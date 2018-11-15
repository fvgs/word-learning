import React, {useMemo, useEffect} from 'react'
import {Box} from 'gestalt'

import pseudowords from '../../data/pseudowords.json'
import Title from '../components/Title'

const ENDPOINT = 'https://bb0qijdhsd.execute-api.us-east-2.amazonaws.com/airtable'

const getNumCorrect = results => results.reduce(
	(count, {pseudoword, image}) =>
		pseudoword === pseudowords[parseInt(image)]
		? count + 1
		: count,
	0,
)

const body = {
	fontSize: '2rem',
}

const subtext = {
	fontSize: '0.75rem',
	marginTop: '4rem',
}

const retry = (fun, count) => {
	const continuation = res => {
		if (count > 0 && !res.ok) {
			retry(fun, count - 1)
		}
	}

	fun().then(continuation).catch(continuation)
}

const recordResults = (condition, numCorrect, objectPairings) => () =>
	fetch(ENDPOINT, {
		method: 'POST',
		mode: 'cors',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			condition,
			score: numCorrect,
			object_pairings: objectPairings,
		}),
	})

const Debrief = ({condition, results}) => {
	const numCorrect = useMemo(() => getNumCorrect(results), [results])

	useEffect(
		() => {
			const objectPairings =
				results
					.sort((a, b) => parseInt(a.image) - parseInt(b.image))
					.map(result => result.pseudoword)
					.join()

			retry(recordResults(condition, numCorrect, objectPairings), 3)
		},
		[],
	)

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			direction="column"
			height="100vh"
		>
			<Title>Thank you for completing the study</Title>
			<div style={body}>
				You correctly matched <strong>{numCorrect}</strong> out of <strong>18</strong> pairs
			</div>
			<div style={subtext}>
				Please direct comments or inquiries to <strong>felipe@cmu.edu</strong> and <strong>hannahskim@cmu.edu</strong>
			</div>
		</Box>
	)
}

export default Debrief
