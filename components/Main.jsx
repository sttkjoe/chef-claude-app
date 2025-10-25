import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main()
{
    const [ingredients, setIngredients] = React.useState([])
    const [recipeResponse, setRecipeResponse] = React.useState(null)

    function addIngredients(formData)
    {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function handleGetRecipe()
    {
        const response = await getRecipeFromMistral(ingredients)
        setRecipeResponse(prevResponse => response)
    }



    return(
        <main>
            <form action={addIngredients}>
                <input 
                    type="text"
                    aria-label="Add Ingredient"
                    placeholder="e.g. Oregano"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} handleClick={handleGetRecipe}/>}
            {recipeResponse != null && <ClaudeRecipe recipeResponse={recipeResponse} />}
        </main>
    )
}