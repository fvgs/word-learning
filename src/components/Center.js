import React from 'react'

const styles = {
	minHeight: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
}

const Center = props => <div style={styles}>{props.children}</div>

export default Center
