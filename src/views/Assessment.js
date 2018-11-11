import React, {Fragment, useState, useMemo} from 'react'
import {Box} from 'gestalt'

import pseudowords from '../../data/pseudowords.json'
import images from '../../data/images/image*.jpg'
import Word from '../components/Word'
import Image from '../components/Image'

const shuffle = arr => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
	return arr
}

const isImageMatched = (matches, index) =>
	matches.some(({image}) => image === index)

const isWordMatched = (matches, word) =>
	matches.some(({pseudoword}) => pseudoword === word)

const instructions = {
	fontSize: '1.3rem',
	fontWeight: 600,
	display: 'flex',
	justifyContent: 'center',
	paddingTop: '1.8rem',
	paddingBottom: '1rem',
}

const Assessment = ({setView}) => {
	const [selectedWord, setSelectedWord] = useState(null)
	const [selectedImage, setSelectedImage] = useState(null)
	const [matches, setMatches] = useState([])
	const words = useMemo(
		() => {
			const shuffledPseudowords = [...pseudowords]
			for (let i = 0; i < 1e3; i++) {
				shuffle(shuffledPseudowords)
			}
			return shuffledPseudowords
		},
		[],
	)
	const imgs = useMemo(
		() => {
			const shuffledImages = Object.entries(images)
			for (let i = 0; i < 1e3; i++) {
				shuffle(shuffledImages)
			}
			return shuffledImages
		},
		[],
	)

	return (
		<Fragment>
			<div style={instructions}>
				<span style={{maxWidth: '720px'}}>Select pairs of words and objects you believe correspond to each other until all words and objects are matched.</span>
			</div>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				wrap
			>
				<Box
					dangerouslySetInlineStyle={{__style: {flexBasis: '450px'}}}
					paddingX={10}
					paddingY={4}
					maxWidth={600}
					minWidth={450}
					display="flex"
					justifyContent="center"
					flex="grow"
					wrap
				>
					{words.map(
						word => {
							const handleClick = () => {
								if (isWordMatched(matches, word)) {
									return
								}

								if (selectedImage !== null) {
									setMatches([...matches, {pseudoword: word, image: selectedImage}])
									setSelectedImage(null)
									return
								}

								setSelectedWord(selectedWord === word ? null : word)
							}

							return (
								<Word
									key={word}
									word={word}
									selected={selectedWord === word}
									matched={isWordMatched(matches, word)}
									onClick={handleClick}
								/>
							)
						}
					)}
				</Box>
				<Box
					dangerouslySetInlineStyle={{__style: {flexBasis: '450px'}}}
					paddingX={10}
					paddingY={4}
					maxWidth={600}
					minWidth={450}
					display="flex"
					justifyContent="center"
					flex="grow"
					wrap
				>
					{imgs.map(([index, url]) => {
						const handleClick = () => {
							if (isImageMatched(matches, index)) {
								return
							}

							if (selectedWord !== null) {
								setMatches([...matches, {pseudoword: selectedWord, image: index}])
								setSelectedWord(null)
								return
							}

							setSelectedImage(selectedImage === index ? null : index)
						}

						return (
							<Image
								key={index}
								image={url}
								selected={selectedImage === index}
								matched={isImageMatched(matches, index)}
								onClick={handleClick}
							/>
						)
					})}
				</Box>
			</Box>
		</Fragment>
	)
}

export default Assessment
