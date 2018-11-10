import React, {useState} from 'react'

import Welcome from './Welcome'

const getView = {
	welcome: Welcome,
}

const Main = () => {
	const [view, setView] = useState('welcome')
	const View = getView[view]
	return <View setView={setView}/>
}

export default Main
