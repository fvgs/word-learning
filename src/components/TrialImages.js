import React, {memo} from 'react'

const styles = {
	width: '200px',
	margin: '3rem',
}

const TrialImages = ({images}) =>
	<div style={{textAlign: 'center'}}>
		{images.map(
			image => <img style={styles} className="trial-image" key={image} src={image}/>,
		)}
	</div>

export default memo(TrialImages)
