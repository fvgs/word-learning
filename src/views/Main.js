import React, {useState} from 'react'

import Welcome from './Welcome'
import Trials from './Trials'
import Assessment from './Assessment'

const getView = {
	welcome: Welcome,
	trials: Trials,
	assessment: Assessment,
}

const Main = () => {
	const [view, setView] = useState('welcome')
	const View = getView[view]
	return <View setView={setView}/>
}

export default Main
