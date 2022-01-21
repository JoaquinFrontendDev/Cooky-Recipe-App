import styled from 'styled-components'
import background from '../../images/background.jpg'

export const RecipeSectionContainer = styled.section`
	max-width: 100%;
	min-height: 100vh;
	height: 100%;
	background: #070707;
	display: grid;
	place-items: start;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${background});
	height: 100vh;
	background-position: center;
	background-size: cover;
	overflow-x: hidden;
	position: relative;
`

export const RecipesContainer = styled.div`
	display: grid;
	justify-self: center;
	grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
	max-width: 100%;
	padding: 2rem;
	grid-template-rows: auto;
	align-items: baseline;
	gap: 5rem;
	max-height: 100%;
`

export const RecipeSearchContainer = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #000;
	font-weight: bold;
	font-size: 2rem;
	padding: 1.5rem;
	background: #ffc500;
`

export const RecipeElement = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: center;
	gap: 0 3rem;
	box-shadow: 3px 3px 5px 0 #000;
	background: #fff;
	position: relative;
	overflow-y: hidden;
	border-radius: 8px;

	&:hover > ul {
		transform: translateY(0%);
	}
`

export const RecipeCardHeader = styled.header`
	width: 100%;
	height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
	color: #070707;
	overflow-y: hidden;
	position: absolute;
	left: 0;
	bottom: 0;
	transition: all 250ms ease-in-out;
	padding: 6px;
	cursor: pointer;
`

export const RecipeCardH2 = styled.h2`
	font-size: clamp(1rem, 1.2vw, 1rem);
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
	margin-right: 10px;
	color: #fff;
	padding: 0 1em;
	z-index: 999;
`

export const RecipesImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: relative;
`
export const RecipeCardDetailsBtn = styled.button`
	font-size: 16px;
	border: none;
	outline: none;
	padding: 9px 12px;
	font-weight: bold;
	color: #070707;
	background-color: #ffc500;
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(0.95);
	}
`

export const RecipeChangePageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	padding: 2rem;
`

export const RecipeChangePage = styled.button`
	width: 120px;
	height: 35px;
	padding: 4px 6px;
	font-size: clamp(8px, 2vw, 14px);
	cursor: pointer;
	border: none;
	outline: none;
	background: #e31837;
	font-weight: bold;
	color: #fff;
	align-self: center;
	border-radius: 8px;
	transition: background 300ms ease;

	&:hover {
		background: #ffc500;
		transition: 200ms ease-out;
		cursor: pointer;
		color: #000;
	}
`
export const RecipeModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.95);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999;
`

export const RecipeModalContent = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	height: 700px;
	width: 350px;
	border-radius: 8px;
`

export const RecipeModalImgContainer = styled.div`
	flex: 1;
	height: 30%;
`

export const RecipeModalTextContainer = styled.div`
	flex: 1;
	display: inline-block;
	height: 70%;
	padding: 2em;
`

export const RecipeModalH2 = styled.h2`
	font-size: 20px;
	color: #0707070;
	margin-bottom: 2em;
`

export const RecipeModalH3 = styled.h3`
	font-size: 18px;
	margin-bottom: 2em;
	color: #0707070;
`

export const RecipeModalP = styled.p`
	font-size: 14px;
	margin: 6px auto;
	color: #070707;
`

export const RecipeModalImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 8px 8px 0 0;
`
