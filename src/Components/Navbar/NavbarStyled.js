import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

export const Nav = styled.nav`
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.5rem);
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-left: 1rem;
  font-family: "Montserrat";
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.5rem);

  p {
    transform: translate(-130%, 95%);
    font-weight: 200;

    @media screen and (max-width: 900px) {
      transform: translate(-150%, 169%);
    }
  }
`;

export const FoodIcon = styled(IoFastFoodOutline)`
  font-size: 2.5rem;
  transform: translate(-10%, -20%);

  @media screen and (max-width: 900px) {
    transform: translate(-10%, -10%);
  }
`;
