export default function IngredientsList(props)
{
    const ingredientsList = props.ingredients.map((ingredient) => {
        return(<li key={ingredient}>{ingredient}</li>)
    })

    return(
        <section>
            <h1>Ingredients on hand</h1>
            <ul className="ingredients-list">
                {ingredientsList}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe">
                <div className="get-recipe-contents">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Get a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.handleClick}>Get a recipe</button>
                </div>
            </div>}
        </section>
    )
}