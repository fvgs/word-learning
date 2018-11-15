const AWS = require('aws-sdk')
const Airtable = require('airtable')

const SUCCESS = {statusCode: 200, headers: {'Access-Control-Allow-Origin': '*'}}
const ERROR = {statusCode: 500, headers: {'Access-Control-Allow-Origin': '*'}}

AWS.config.update({region: 'us-east-2'})

let decrypted

module.exports.handler = (event, context, callback) => {
	if (decrypted) {
		main(event, context, callback)
		return
	}
	
	const kms = new AWS.KMS()
	const encrypted = process.env.AIRTABLE_API_KEY

	kms.decrypt({CiphertextBlob: new Buffer(encrypted, 'base64')}, (err, data) => {
		if (err) {
			console.log('Decrypt error:', err)
			callback(null, ERROR)
			return
		}

		decrypted = data.Plaintext.toString('ascii')
		main(event, context, callback)
	})
}

const main = async (event, context, callback) => {
	try {
		const {condition, score, object_pairings} = JSON.parse(event.body)
		const base = new Airtable({apiKey: decrypted}).base('appU1QJwSwuT3hspd')

		await base('data').create({
			condition,
			score,
			object_pairings,
		})

		callback(null, SUCCESS)
	} catch (err) {
		callback(null, ERROR)
	}
}
