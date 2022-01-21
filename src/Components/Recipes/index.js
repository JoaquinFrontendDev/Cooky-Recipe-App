import axios from 'axios'
import React from 'react'
import Navbar from '../Navbar'
import SearchBar from '../SearchBar'
import Sidebar from '../Sidebar'
import RecipeItem from './RecipeItem'
import { v4 as uuid } from 'uuid'
import {
	RecipeChangePage,
	RecipeChangePageContainer,
	RecipesContainer,
	RecipeSectionContainer,
} from './RecipesStyled'

const Recipes = ({
	recipes,
	setRecipes,
	setMainIngredient,
	setMainType,
	mainIngredient,
	mainType,
	toggle,
	isOpen,
	nextUrl,
	setNextUrl,
}) => {
	const goNextPage = () => {
		axios.get(nextUrl).then((res) => {
			setRecipes(res.data.hits)
			setNextUrl(res.data._links.next.href)
		})
	}

	return (
		<RecipeSectionContainer>
			<Navbar toggle={toggle} />
			<Sidebar toggle={toggle} isOpen={isOpen} />

			<SearchBar
				recipes={recipes}
				setMainIngredient={setMainIngredient}
				setMainType={setMainType}
			/>
			<RecipesContainer>
				{recipes.length > 0 &&
					recipes.map((recipeObj) => (
						<RecipeItem
							recipes={recipeObj.recipe}
							mainIngredient={mainIngredient}
							mainType={mainType}
							key={uuid()}
						/>
					))}
			</RecipesContainer>
			<RecipeChangePageContainer>
				<RecipeChangePage onClick={goNextPage}>Next Page</RecipeChangePage>
			</RecipeChangePageContainer>
		</RecipeSectionContainer>
	)
}

export default Recipes
