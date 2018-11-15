import React, {useEffect} from 'react'

import Center from './Center'
import TrialWords from './TrialWords'
import TrialImages from './TrialImages'
import Timer from './Timer'

const TRIAL_DURATION = 6

const shuffle = arr => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
	return arr
}

const Trial = ({pairs, next}) => {
	useEffect(
		() => {
			const timerID = setTimeout(next, TRIAL_DURATION * 1000)
			return () => clearTimeout(timerID)
		},
		[pairs, next],
	)

	const words = shuffle(pairs.map(pair => pair.pseudoword))
	const images = shuffle(pairs.map(pair => pair.image))

	return (
		<Center>
			<div style={{padding: '1.5rem'}}>
				<Center>
					<TrialWords words={words}/>
					<TrialImages images={images}/>
					<Timer/>
				</Center>
			</div>
		</Center>
	)
}

export default Trial
