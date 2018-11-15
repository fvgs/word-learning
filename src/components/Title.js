import React from 'react'

const styles = {
	fontSize: '3rem',
	fontWeight: 600,
	marginBottom: '2.5rem',
	textAlign: 'center',
}

const Title = props =>
	<div style={styles}>{props.children}</div>

export default Title
