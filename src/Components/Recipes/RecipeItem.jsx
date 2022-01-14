import React from 'react'

import {
	RecipesContainer,
	RecipesH1,
	RecipeHeader,
	RecipesImg,
	RecipeIngredientsList,
	RecipeIngredientsH4,
	RecipeIngredientsLi,
	RecipeElement,
	RecipeCardFooter,
	RecipeP,
	RecipeFavBtn,
	RecipeFavIcon,
	RecipeNotFavIcon,
} from './RecipesStyled'

const RecipeItem = ({
	recipes,
	mainIngredient,
	mainType,
	fav,
	setFavourite,
	id,
	key,
}) => {
	return (
		<RecipesContainer>
			{recipes.map((recipe) => {
				return (
					<RecipeElement id={id} key={key}>
						<RecipeHeader>
							<RecipesH1>
								{recipe.recipe.label
									.split(' ')
									.slice(0, 2)
									.join(' ')
									.replace(/[,:''&]/g, ' ')}
							</RecipesH1>
						</RecipeHeader>
						<RecipesImg
							src={recipe.recipe.image}
							alt='imagen no encontrada'
							onError={(event) => {
								event.target.src = `https://source.unsplash.com/200x200/?${mainIngredient},${mainType}`
								event.onerror = null
							}}
						/>
						<RecipeIngredientsList>
							<RecipeIngredientsH4>Ingredients:</RecipeIngredientsH4>
							{recipe.recipe.ingredients.map((item) => {
								return <RecipeIngredientsLi>{item.text}</RecipeIngredientsLi>
							})}
							<RecipeCardFooter>
								<RecipeP>
									Calories: {Math.floor(recipe.recipe.calories)}
								</RecipeP>
								<RecipeFavBtn onClick={setFavourite}>
									<span>{fav ? <RecipeFavIcon /> : <RecipeNotFavIcon />}</span>
									<span>{fav ? 'Liked' : 'Like'}</span>
								</RecipeFavBtn>
							</RecipeCardFooter>
						</RecipeIngredientsList>
					</RecipeElement>
				)
			})}
		</RecipesContainer>
	)
}

export default RecipeItem
