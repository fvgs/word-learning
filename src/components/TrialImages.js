import React, {memo} from 'react'

const styles = {
	margin: '3rem',
}

const TrialImages = ({images}) =>
	<div>
		{images.map(
			image => <img style={styles} key={image} src={image} width="200px"/>,
		)}
	</div>

export default memo(TrialImages)
