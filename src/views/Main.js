import React, {useState} from 'react'

import Welcome from './Welcome'
import Trials from './Trials'

const getView = {
	welcome: Welcome,
	trials: Trials,
}

const Main = () => {
	const [view, setView] = useState('welcome')
	const View = getView[view]
	return <View setView={setView}/>
}

export default Main
