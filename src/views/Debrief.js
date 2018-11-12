import React from 'react'
import {Box} from 'gestalt'

import pseudowords from '../../data/pseudowords.json'
import Title from '../components/Title'

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

const Debrief = ({results}) => {
	const numCorrect = getNumCorrect(results)

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
