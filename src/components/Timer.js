import React, {useRef, useEffect, useLayoutEffect} from 'react'

import '../css/timer.css'

const TIMER_DURATION = 6

const wrapperStyles = {
	position: 'relative',
	width: '70px',
	height: '70px',
	borderRadius: '50px',
	backgroundColor: '#fff',
	zIndex: 10,
}

const maskStyles = {
	position: 'absolute',
	width: '50%',
	height: '100%',
	backgroundColor: '#fff',
	borderRadius: '50px 0 0 50px',
	animation: `${TIMER_DURATION}s steps(1, end)`,
	zIndex: 30,
	opacity: 0,
	border: '1px solid #fff',
	borderRight: 'none',
	transform: 'translateY(-1px) translateX(-1px)',
}

const spinnerStyles = {
	position: 'absolute',
	width: '50%',
	height: '100%',
	backgroundColor: 'rgb(140, 217, 255)',
	borderRadius: '50px 0 0 50px',
	animation: `${TIMER_DURATION}s linear`,
	transformOrigin: 'center right',
	zIndex: 20,
}

const fillStyles = {
	position: 'absolute',
	width: '50%',
	height: '100%',
	backgroundColor: 'rgb(140, 217, 255)',
	borderRadius: '0 50px 50px 0',
	animation: `${TIMER_DURATION}s steps(1, end)`,
	left: '50%',
}

const Timer = () => {
	const spinnerRef = useRef()
	const fillRef = useRef()
	const maskRef = useRef()
	useLayoutEffect(() => {
		spinnerRef.current.style.animationName = 'none'
		fillRef.current.style.animationName = 'none'
		maskRef.current.style.animationName = 'none'
	})
	useEffect(() => {
		spinnerRef.current.style.animationName = 'spinner'
		fillRef.current.style.animationName = 'fill'
		maskRef.current.style.animationName = 'mask'
	})
	return (
		<div style={wrapperStyles}>
			<div ref={spinnerRef} style={spinnerStyles}/>
			<div ref={fillRef} style={fillStyles}/>
			<div ref={maskRef} style={maskStyles}/>
		</div>
	)
}

export default Timer
