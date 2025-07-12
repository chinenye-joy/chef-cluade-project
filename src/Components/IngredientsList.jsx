import React from 'react'

const IngredientsList = (props) => {
     const ingredientsitems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <div>
      <section className="p-4 md:p-8 mb-4">
          <h2 className="text-black text-2xl font-bold mb-4">
            Ingredients on hand:
          </h2>

          <ul className="list-disc list-inside mb-8 text-gray-600">
            {ingredientsitems}
          </ul>

          {props.ingredients.length > 3 && (
            <div className="bg-slate-300 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-slate-950 text-xl md:text-2xl font-bold mb-3">
                  Ready for a recipe?
                </h3>
                <p className="text-slate-700 md:text-lg">
                  Generate a recipe from your list of ingredients
                </p>
              </div>
              <button
                className="bg-white text-slate-800 font-semibold px-6 py-3 rounded-full md:rounded hover:bg-slate-100 transition duration-300 w-full md:w-auto"
                onClick={props.getRecipe}
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>  
    </div>
  )
}

export default IngredientsList