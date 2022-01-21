import React, { useState } from 'react'
import {
	RecipeCardHeader,
	RecipesImg,
	RecipeElement,
	RecipeCardH2,
	RecipeCardDetailsBtn,
} from './RecipesStyled'
import Modal from '../Modal'
const RecipeItem = ({ recipes, mainIngredient, mainType, id }) => {
	console.log(recipes.ingredientLines)
	const [show, setShow] = useState(false)
	return (
		<>
			<Modal recipes={recipes} show={show} setShow={setShow} />
			<RecipeElement key={id}>
				<RecipesImg
					src={recipes.image}
					alt='imagen no encontrada'
					onError={(event) => {
						event.target.src = `https://source.unsplash.com/200x200/?${mainIngredient},${mainType}`
						event.onerror = null
					}}
				/>
				<RecipeCardHeader>
					<RecipeCardH2>{recipes.label}</RecipeCardH2>
					<RecipeCardDetailsBtn onClick={() => setShow(true)}>
						View Details
					</RecipeCardDetailsBtn>
				</RecipeCardHeader>
			</RecipeElement>
		</>
	)
}

export default RecipeItem
