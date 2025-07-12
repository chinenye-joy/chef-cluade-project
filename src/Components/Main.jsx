import { useState } from "react";

import IngredientsList from "./IngredientsList";
import CluadeRecipe from "./CluadeRecipe";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData) {
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
    const newIngredient = formData.get("ingredient");
  }
  function getRecipe() {
    setRecipeShown((prevGetRecipe) => !prevGetRecipe);
  }

  return (
    <main>
      <form
        action={addIngredient}
        className=" flex justify-center gap-10 py-20 px-10 bg-zinc-50"
      >
        <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 p-4">
          <input
            className="
      w-full sm:flex-1
      max-w-md
      border border-[#D1D5DB] shadow-md
      px-4 py-2
      rounded-2xl
      text-sm md:text-base
    "
            type="text"
            placeholder="e.g... oranges"
            aria-label="Add ingredient"
            name="ingredient"
          />

          <button
            type="submit"
            className="
      w-full sm:w-auto
      max-w-xs
      rounded-md sm:rounded-lg md:rounded-2xl lg:rounded-3xl
      font-serif text-sm md:text-base font-semibold
      border bg-[#141413] text-[#FAFAF8]
      px-3 py-2
      whitespace-nowrap
      relative
      before:content-['+'] before:mr-2 before:text-xl
      hover:bg-[#333331] transition-colors duration-300
    "
          >
            Add ingredient
          </button>
        </div>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipeShown !== false && <CluadeRecipe />}
    </main>
  );
};

export default Main;
