import React from 'react'
import { useHistory } from 'react-router-dom'
import {
	SidebarContainer,
	SidebarMenu,
	SidebarLink,
	Icon,
	CloseIcon,
	SideBtnWrap,
	SidebarRoute,
} from './SidebarStyled'

const Sidebar = ({ isOpen, toggle }) => {
	const history = useHistory()
	const goSearch = () => history.push('/search')
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon>
				<CloseIcon onClick={toggle} />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Home</SidebarLink>
				<SidebarLink to='/search'>Recipes</SidebarLink>
				<SidebarLink to='/about'>About</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap onClick={goSearch}>
				<SidebarRoute to='/search'>Let's cook</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	)
}

export default Sidebar
