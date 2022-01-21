import React from 'react'
import './Modal.css'

const index = ({ recipes, show, setShow }) => {
	return (
		<div className={show ? 'modal-container show-modal' : 'modal-container'}>
			<div className='modal-content'>
				<div className='modal-content-img'>
					<img src={recipes.image} alt='recipe-modal' />
				</div>
				<div className='modal-content-text'>
					<h2 className='modal-h2'>{recipes.label}</h2>
					<h3 className='modal-h3'>Ingredients:</h3>
					{recipes.ingredientLines.map((ingredient) => (
						<p className='modal-p'>{ingredient}</p>
					))}
				</div>
				<button className='modal-close-btn' onClick={() => setShow(false)}>
					Close
				</button>
			</div>
		</div>
	)
}

export default index
