import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Sidebar from "../Sidebar";
import RecipeItem from "./RecipeItem";
import {
  RecipeChangePage,
  RecipeChangePageContainer,
  RecipeSectionContainer,
} from "./RecipesStyled";

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
  id,
  key,
}) => {
  const history = useHistory();
  const [fav, setFav] = useState(false);

  const setFavourite = () => {
    setFav(!fav);
  };
  const goBack = () => {
    history.goBack();
  };
  const goNextPage = () => {
    axios.get(nextUrl).then((res) => {
      setRecipes(res.data.hits);
      setNextUrl(res.data._links.next.href);
    });
  };

  return (
    <RecipeSectionContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />

      <SearchBar
        recipes={recipes}
        setMainIngredient={setMainIngredient}
        setMainType={setMainType}
      />
      <RecipeItem
        recipes={recipes}
        mainIngredient={mainIngredient}
        mainType={mainType}
        setFavourite={setFavourite}
        fav={fav}
        id={id}
        key={key}
      />
      <RecipeChangePageContainer>
        <RecipeChangePage onClick={goBack}>Previous Page</RecipeChangePage>
        <RecipeChangePage onClick={goNextPage}>Next Page</RecipeChangePage>
      </RecipeChangePageContainer>
    </RecipeSectionContainer>
  );
};

export default Recipes;
