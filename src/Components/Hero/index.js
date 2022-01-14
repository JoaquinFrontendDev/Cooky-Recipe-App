import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useHistory } from 'react-router-dom'
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroStyled'

const Hero = ({ toggle, isOpen }) => {
	const history = useHistory()
	const goSearch = () => history.push('/search')

	return (
		<div>
			<HeroContainer>
				<Navbar toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<HeroContent>
					<HeroItems>
						<HeroH1>Tasty Recipes Now</HeroH1>
						<HeroP>One click, all recipes</HeroP>
						<HeroBtn onClick={goSearch}>Go Search</HeroBtn>
					</HeroItems>
				</HeroContent>
			</HeroContainer>
		</div>
	)
}

export default Hero
