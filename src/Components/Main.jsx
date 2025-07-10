import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown]= useState(false)

  const ingredientsitems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
    const newIngredient = formData.get("ingredient");
  }
function getRecipe(){
  setRecipeShown(prevGetRecipe => !prevGetRecipe)
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
      {ingredients.length > 0 && <section  className="p-4 md:p-8 mb-4">
        <h2 className="text-black text-2xl font-bold mb-4">
         Ingredients on hand:
        </h2>

        <ul className="list-disc list-inside mb-8 text-gray-600">
          {ingredientsitems}
        </ul>

        { ingredients.length > 3 && <div className="bg-slate-300 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h3 className="text-slate-950 text-xl md:text-2xl font-bold mb-3">
              Ready for a recipe?
            </h3>
            <p className="text-slate-700 md:text-lg">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button className="bg-white text-slate-800 font-semibold px-6 py-3 rounded-full md:rounded hover:bg-slate-100 transition duration-300 w-full md:w-auto" onClick={getRecipe}>
            Get a recipe
          </button>
        </div>}
      </section>}
{recipeShown !== false && (
  <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 bg-white mb-0">
    <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-slate-50 p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
        🍽️ Chef Claude Recommends:
      </h2>
      <article className="text-gray-700" aria-live="polite">
        <p className="text-base sm:text-lg font-medium mb-4">
          Based on the ingredients you have available, I would recommend making a simple and delicious <strong className="text-slate-900">Beef Bolognese Pasta</strong>. Here is the recipe:
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">Beef Bolognese Pasta</h3>

        <strong className="block font-semibold mb-2 text-gray-900">Ingredients:</strong>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>1 lb. ground beef</li>
          <li>1 onion, diced</li>
          <li>3 cloves garlic, minced</li>
          <li>2 tablespoons tomato paste</li>
          <li>1 (28 oz) can crushed tomatoes</li>
          <li>1 cup beef broth</li>
          <li>1 teaspoon dried oregano</li>
          <li>1 teaspoon dried basil</li>
          <li>Salt and pepper to taste</li>
          <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>

        <strong className="block font-semibold mb-2 text-gray-900">Instructions:</strong>
        <ol className="list-decimal list-inside space-y-2 mb-2">
          <li>Bring a large pot of salted water to a boil for the pasta.</li>
          <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
          <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
          <li>Stir in the tomato paste and cook for 1 minute.</li>
          <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
          <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
          <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
          <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
          <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
      </article>
    </div>
  </section>
)}

    </main>
  );
};

export default Main;
