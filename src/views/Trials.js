import React, {useState} from 'react'

import Trial from '../components/Trial'
import pseudowords from '../../data/pseudowords.json'
import images from '../../data/images/image*.jpg'
import trials from '../../data/trials.json'

const pairs = pseudowords.map(
	(pseudoword, i) => ({
		pseudoword,
		image: images[i + 1],
	}),
)

const Trials = ({setView}) => {
	const [trial, setTrial] = useState(0)

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
