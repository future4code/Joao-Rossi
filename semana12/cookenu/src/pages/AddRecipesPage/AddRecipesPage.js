import useProtectedPage from "../../hooks/useProtectedPage"

export default function AddRecipesPage() {
    useProtectedPage()
    return(
        <div>
            <h1>AddRecipesPage</h1>
        </div>
    )
}