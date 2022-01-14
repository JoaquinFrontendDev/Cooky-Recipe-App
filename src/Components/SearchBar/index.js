import React, { useState } from 'react'
import dishTypes from './dishTypes.json'
import {
	SearchBtn,
	SearchForm,
	SearchInput,
	SearchOption,
	SearchSelect,
} from './SearchBarStyled'

const SearchBar = ({ setMainIngredient, setMainType }) => {
	/*------------------------------------------------------------*/
	const [inputIngredient, setInputIngredient] = useState('')
	/*------------------------------------------------------------*/
	const handleIngredientSubmit = (e) => {
		e.preventDefault()
		setMainIngredient(inputIngredient)
		setInputIngredient('')
	}
	const handleIngredientChange = (e) => {
		setInputIngredient(e.target.value)
	}

	const handleSelect = (e) => {
		setMainType(e.target.value)
		console.log(e.target.value)
	}
	/*------------------------------------------------------------*/
	return (
		<SearchForm>
			<SearchInput
				value={inputIngredient}
				onChange={handleIngredientChange}
				placeholder='Search by main ingredient'
				required
			/>
			<SearchSelect onChange={handleSelect}>
				{dishTypes.map((el) => (
					<SearchOption>{el}</SearchOption>
				))}
			</SearchSelect>
			<SearchBtn onClick={handleIngredientSubmit}>Search</SearchBtn>
		</SearchForm>
	)
}

export default SearchBar
