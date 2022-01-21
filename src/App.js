import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import Hero from './Components/Hero'
import Recipes from './Components/Recipes'
import About from './Components/About'

const App = () => {
	const apiKey = 'fe8629681214d2c676285197c507a723'
	const apiID = '371c3927'
	const [mainIngredient, setMainIngredient] = useState('cheese')
	const [mainType, setMainType] = useState('dessert')
	const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${mainIngredient}&app_id=${apiID}&app_key=${apiKey}&ingr=3-4&dishType=${mainType}`
	const [nextUrl, setNextUrl] = useState('')
	const [recipes, setRecipes] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	const getRecipes = async () => {
		await axios
			.get(url)
			.then((res) => {
				setNextUrl(res.data._links.next.href)
				setRecipes(res.data.hits)
			})
			.catch((error) => console.log(`Ha ocurrido el siguiente error: ${error}`))
	}

	useEffect(() => {
		getRecipes()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mainIngredient, mainType])

	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path='/'>
					<Hero toggle={toggle} isOpen={isOpen} />
				</Route>
				<Route exact path='/search'>
					<Recipes
						recipes={recipes}
						setRecipes={setRecipes}
						setMainIngredient={setMainIngredient}
						setMainType={setMainType}
						mainIngredient={mainIngredient}
						mainType={mainType}
						toggle={toggle}
						isOpen={isOpen}
						nextUrl={nextUrl}
						setNextUrl={setNextUrl}
					/>
				</Route>
				<Route exact path='/about'>
					<About toggle={toggle} isOpen={isOpen} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
