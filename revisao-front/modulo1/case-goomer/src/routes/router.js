import { BrowserRouter, Switch, Route } from "react-router-dom";
import { 
    HomePage,
    RestaurantDetailPage
} from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/details/:id'>
                    <RestaurantDetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}