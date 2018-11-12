import React, {useState} from 'react'

import Welcome from './Welcome'
import Trials from './Trials'
import Assessment from './Assessment'
import Debrief from './Debrief'

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

	return <View setView={setView} results={results} setResults={setResults}/>
}

export default Main
