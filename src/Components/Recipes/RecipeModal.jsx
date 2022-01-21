import {
	RecipeCardCloseDetailsBtn,
	RecipeCardH2,
	RecipeModalContainer,
	RecipeModalContent,
	RecipeModalImg,
	RecipeModalImgContainer,
	RecipeModalP,
	RecipeModalTextContainer,
} from './RecipesStyled'

const RecipeModal = ({ title, image, ingredients, setIsModalOpen }) => {
	const handleModalClose = () => {
		setIsModalOpen(false)
	}
	console.log(title)
	return (
		<RecipeModalContainer>
			<RecipeModalContent>
				<RecipeModalImgContainer>
					<RecipeModalImg src={image} alt='recipes' />
				</RecipeModalImgContainer>
				<RecipeModalTextContainer>
					<RecipeCardH2>{title}</RecipeCardH2>
					{ingredients.map((item) => (
						<RecipeModalP>{item}</RecipeModalP>
					))}
				</RecipeModalTextContainer>
				<RecipeCardCloseDetailsBtn onClick={handleModalClose}>
					Close Details
				</RecipeCardCloseDetailsBtn>
			</RecipeModalContent>
		</RecipeModalContainer>
	)
}

export default RecipeModal
