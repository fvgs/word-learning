import React, {memo} from 'react'

const styles = {
	fontSize: '3rem',
	fontWeight: 500,
	lineHeight: 1.8,
	textAlign: 'center',
}

const TrialWords = ({words}) =>
	<div style={styles}>
		{words.map(word => <div key={word}>{word}</div>)}
	</div>

export default memo(TrialWords)
