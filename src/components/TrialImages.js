import React, {memo} from 'react'

const styles = {
	width: '200px',
	margin: '3rem',
}

const TrialImages = ({images}) =>
	<div>
		{images.map(
			image => <img style={styles} key={image} src={image}/>,
		)}
	</div>

export default memo(TrialImages)
