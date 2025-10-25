import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props)
{
    return(
            <section className="recipe-container">
            <ReactMarkdown>{props.recipeResponse}</ReactMarkdown>
            </section>
    )
}