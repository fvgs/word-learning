import React, {useCallback} from 'react'

import Center from '../components/Center'
import Title from '../components/Title'
import {Button} from 'gestalt'

const styles = {
	maxWidth: '800px',
	padding: '1.5rem',
}

const Welcome = ({setView}) => {
	const begin = useCallback(() => setView('trials'), [setView])

	return (
		<Center>
			<div style={styles}>
				<Center>
					<Title>Word Learning Research Study</Title>
					<div>You will be presented with a number of trials each consisting of two pseudowords and two objects. Your goal is to correctly learn the association between a word and its corresponding object.</div>
					<ul style={{marginBottom: '2.5rem'}}>
						<li>There are 18 words and 18 objects.</li>
						<li>Each word corresponds to a single object.</li>
						<li>There are 54 trials, each lasting 6 seconds.</li>
						<li>Please do not take any notes during the trials.</li>
						<li>Please focus on the task for the duration of the study (7 minutes)</li>
						<li>Please complete the word-object association assessment following the final trial as soon as the last trial has ended.</li>
						<li>Please do not complete the study more than once.</li>
					</ul>
					<Button text="Begin" color="red" onClick={begin}/>
				</Center>
			</div>
		</Center>
	)
}

export default Welcome
