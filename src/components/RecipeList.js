import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeDetail key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
