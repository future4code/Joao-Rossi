import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styled from "styled-components";

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
`;

export default function RecipesListPage() {
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);
  console.log(recipes);

  const cardRecipeList = recipes.map((recipeItem) => {
    return (
      <RecipeCard
        key={recipeItem.recipe_id}
        title={recipeItem.title}
        image={recipeItem.image}
      />
    );
  });

  return <RecipesContainer>{cardRecipeList}</RecipesContainer>;
}
