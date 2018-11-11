import React from 'react'

const baseStyles = {
	width: '100px',
	height: '100px',
	margin: '7px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '100px',
	cursor: 'pointer',
}

const selectedStyles = {
	backgroundColor: 'rgba(0, 250, 154, 0.5)',
}

const matchedStyles = {
	backgroundColor: 'rgba(140, 217, 255, 0.5)',
	cursor: 'auto',
}

const Word = ({word, selected, matched, onClick}) => {
	const styles = {
		...baseStyles,
		...(selected && selectedStyles) || {},
		...(matched && matchedStyles) || {},
	}

	return <div style={styles} onClick={onClick}>{word}</div>
}

export default Word
