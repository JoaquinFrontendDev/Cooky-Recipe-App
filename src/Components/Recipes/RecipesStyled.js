import styled from "styled-components";
import background from "../../images/background.jpg";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

export const RecipeSectionContainer = styled.section`
  max-width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #000;
  display: grid;
  place-items: start;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${background});
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
`;

export const RecipesContainer = styled.div`
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(4, minmax(200px, 300px));
  max-width: 100%;
  padding: 2rem 4rem;
  grid-template-rows: auto;
  align-items: baseline;
  gap: 5rem;
  max-height: 100%;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: auto;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(150px, 230px));
    grid-template-rows: auto;
    padding: 0.5rem 1rem;
  }
`;

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
`;

export const RecipeElement = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  &:hover > header {
    background: #ffc500;
    color: #000;
    cursor: pointer;
  }
`;

export const RecipeHeader = styled.header`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #084b83 30%, #0984e3 100%);
  color: #fff;
  transition: background 250ms ease;
  overflow-y: hidden;
`;

export const RecipeFav = styled.button`
  height: 40%;
  width: 16px;
  margin-left: 10px;
  border: none;
  outline: none;
  background: transparent;
  position: relative;
`;

export const RecipesH1 = styled.h1`
  font-size: clamp(0.7rem, 1.2vw, 1.1rem);
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
  z-index: 999;
`;

export const RecipeIngredientsList = styled.ul`
  text-align: center;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  line-height: 1;
  position: absolute;
  width: 100%;
  height: calc(100% - 45px);
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: all 400ms ease-in;
  transform: translateY(-150%);
`;

export const RecipeIngredientsH4 = styled.h4`
  font-size: clamp(8px, 1vw, 16px);
  color: #fff;

  @media screen and (min-width: 1300px) {
    padding-bottom: 8px;
  }
`;

export const RecipeIngredientsLi = styled.li`
  text-decoration: none;
  font-size: clamp(9px, 1vw, 16px);
  color: #fff;
  padding: 4px;

  @media screen and (min-width: 1300px) {
    gap: 1rem;
    padding-top: 0.2rem;
  }
`;

export const RecipeCardFooter = styled.footer`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 10%;
`;

export const RecipeFavBtn = styled.button`
  color: #0080ff;
  padding: 9px 6px;
  background: #e8efff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 35%;
  transition: all 350ms ease;
  font-size: clamp(8px, 0.7vw, 16px);
  position: relative;

  &:hover {
    color: #e8efff;
    background: #0080ff;
  }
`;

export const RecipeFavIcon = styled(BsFillHeartFill)`
  font-size: clamp(14px, 1.5vw, 16px);
  color: red;
  position: absolute;
  top: 30%;
  left: 20%;

  @media screen and (max-width: 1100px) {
    top: 25%;
  }

  @media screen and (max-width: 500px) {
    top: 30%;
  }
`;

export const RecipeNotFavIcon = styled(BsHeart)`
  font-size: clamp(14px, 1.5vw, 16px);
  color: red;
  position: absolute;
  top: 30%;
  left: 20%;

  @media screen and (max-width: 1100px) {
    top: 25%;
  }

  @media screen and (max-width: 500px) {
    top: 30%;
  }
`;

export const RecipeP = styled.p`
  font-size: clamp(9px, 1vw, 16px);
  color: #fff;
  font-weight: bold;
`;

export const RecipesImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const RecipeChangePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 2rem;
`;

export const RecipeChangePage = styled.button`
  width: 120px;
  height: 35px;
  padding: 4px 6px;
  font-size: clamp(8px, 2vw, 12px);
  cursor: pointer;
  border: none;
  outline: none;
  background: #e31837;
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
`;
