import { BrowserRouter, Switch, Route} from "react-router-dom";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen/AddRecipeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen/RecipeDetailScreen";
import RecipesListScreen from "../screens/RecipesListScreen/RecipesListScreen";
import ErrorScreen from "../screens/ErrorScreen/ErrorScreen";

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>

            <Route exact path='/'>
                <WelcomeScreen />
            </Route>

            <Route exact path='/signup'>
                <SignUpScreen />
            </Route>

            <Route exact path='/addrecipe'>
                <AddRecipeScreen />
            </Route>

            <Route exact path='/recipeslist'>
                <RecipesListScreen />
            </Route>

            <Route exact path='/recipedetail/:id'>
                <RecipeDetailScreen />
            </Route>

            <Route>
                <ErrorScreen />
            </Route>

        </Switch>
    </BrowserRouter>
  );
};

export default Router;
