import React, {useState} from 'react'

import Trial from '../components/Trial'
import pseudowords from '../../data/pseudowords.json'
import images from '../../data/images/image*.jpg'
import trialsCondition1 from '../../data/trialsCondition1.json'
import trialsCondition2 from '../../data/trialsCondition2.json'

const pairs = pseudowords.map(
	(pseudoword, i) => ({
		pseudoword,
		image: images[i],
	}),
)

const getTrials = {
	1: trialsCondition1,
	2: trialsCondition2,
}

const Trials = ({condition, setView}) => {
	const [trial, setTrial] = useState(0)

	const trials = getTrials[condition]

	const next = () => {
		if (trial === trials.length - 1) {
			setView('assessment')
		} else {
			setTrial(trial + 1)
		}
	}

	const [i, j] = trials[trial]
	const trialPairs = [pairs[i], pairs[j]]

	return <Trial pairs={trialPairs} next={next}/>
}

export default Trials
