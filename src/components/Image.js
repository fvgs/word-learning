import React from 'react'

const baseStyles = {
	width: '100px',
	height: '100px',
	borderRadius: '100px',
	margin: '7px',
	cursor: 'pointer',
	backgroundSize: 'contain',
	WebkitTapHighlightColor: 'transparent',
}

const matchedStyles = {
	cursor: 'auto',
}

const getBackgroundImage = (image, selected, matched) => {
	if (selected) {
		return `linear-gradient(rgba(40, 217, 255, 0.5), rgba(40, 217, 255, 0.5)), url(${image})`
	}

	if (matched) {
		return `linear-gradient(rgba(124, 242, 242, 0.5), rgba(124, 242, 242, 0.5)), url(${image})`
	}

	return `url(${image})`
}

const Image = ({image, selected, matched, onClick}) => {
	const styles = {
		backgroundImage: getBackgroundImage(image, selected, matched),
		...baseStyles,
		...(matched && matchedStyles) || {},
	}

	return <div style={styles} onClick={onClick}/>
}

export default Image
