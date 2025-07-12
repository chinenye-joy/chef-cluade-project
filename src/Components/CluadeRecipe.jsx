

const CluadeRecipe = () => {

    const token = import.meta.env. VITE_APP_Hf_Access_Token;

console.log(token);
  return (
    <div>
         (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 bg-white mb-0">
          <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
              🍽️ Chef Claude Recommends:
            </h2>
            <article className="text-gray-700" aria-live="polite">
              <p className="text-base sm:text-lg font-medium mb-4">
                Based on the ingredients you have available, I would recommend
                making a simple and delicious{" "}
                <strong className="text-slate-900">Beef Bolognese Pasta</strong>
                . Here is the recipe:
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                Beef Bolognese Pasta
              </h3>

              <strong className="block font-semibold mb-2 text-gray-900">
                Ingredients:
              </strong>
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
                <li>
                  8 oz pasta of your choice (e.g., spaghetti, penne, or
                  linguine)
                </li>
              </ul>

              <strong className="block font-semibold mb-2 text-gray-900">
                Instructions:
              </strong>
              <ol className="list-decimal list-inside space-y-2 mb-2">
                <li>
                  Bring a large pot of salted water to a boil for the pasta.
                </li>
                <li>
                  In a large skillet or Dutch oven, cook the ground beef over
                  medium-high heat, breaking it up with a wooden spoon, until
                  browned and cooked through, about 5-7 minutes.
                </li>
                <li>
                  Add the diced onion and minced garlic to the skillet and cook
                  for 2-3 minutes, until the onion is translucent.
                </li>
                <li>Stir in the tomato paste and cook for 1 minute.</li>
                <li>
                  Add the crushed tomatoes, beef broth, oregano, and basil.
                  Season with salt and pepper to taste.
                </li>
                <li>
                  Reduce the heat to low and let the sauce simmer for 15-20
                  minutes, stirring occasionally, to allow the flavors to meld.
                </li>
                <li>
                  While the sauce is simmering, cook the pasta according to the
                  package instructions. Drain the pasta and return it to the
                  pot.
                </li>
                <li>
                  Add the Bolognese sauce to the cooked pasta and toss to
                  combine.
                </li>
                <li>
                  Serve hot, garnished with additional fresh basil or grated
                  Parmesan cheese if desired.
                </li>
              </ol>
            </article>
          </div>
        </section>
      )
    </div>
  )
}

export default CluadeRecipe