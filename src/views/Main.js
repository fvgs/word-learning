import React, {useState} from 'react'

import Welcome from './Welcome'
import Trials from './Trials'
import Assessment from './Assessment'
import Debrief from './Debrief'

const condition = Math.floor(Math.random() * 2) + 1

const getView = {
	welcome: Welcome,
	trials: Trials,
	assessment: Assessment,
	debrief: Debrief,
}

const Main = () => {
	const [view, setView] = useState('welcome')
	const [results, setResults] = useState([])

	const View = getView[view]

	return (
		<View
			condition={condition}
			setView={setView}
			results={results}
			setResults={setResults}
		/>
	)
}

export default Main
