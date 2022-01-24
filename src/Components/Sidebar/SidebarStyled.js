import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 350px;
	height: 100%;
	background: #ffc500;
	display: grid;
	align-items: center;
	top: 0;
	transition: 500ms ease-in-out;
	right: ${({ isOpen }) => (isOpen ? '0px' : '-1000px')};
	z-index: 999999;

	@media screen and (max-width: 400px) {
		width: 70%;
	}
`

export const CloseIcon = styled(IoArrowBackSharp)`
	color: #000;
	transform: rotate(180deg);
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	left: 1.5rem;
	background: transparent;
	border: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`

export const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(3, 60px);
	}
`

export const SidebarLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	text-decoration: none;
	color: #000;
	font-size: clamp(1rem, 1.5vw, 1.5rem);
	transition: 250ms ease;
	cursor: pointer;

	&:hover {
		color: #fff;
		transition: 250ms ease-in-out;
		background: #e31837;
	}
`

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const SidebarRoute = styled(Link)`
	background: #e31837;
	white-space: nowrap;
	padding: 16px 64px;
	cursor: pointer;
	color: #fff;
	outline: none;
	text-decoration: none;
	font-size: clamp(1rem, 1.5vw, 1.5rem);
	transition: 250ms ease-in-out;

	&:hover {
		transition: 300ms ease-in-out;
		background: #fff;
		color: #010606;
	}
`
