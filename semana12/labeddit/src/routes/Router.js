import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostPage from "../pages/PostPage/PostPage";
import NewUserPage from "../pages/NewUserPage/NewUserPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/newlogin">
          <NewUserPage />
        </Route>

        <Route exact path="/feedpage">
          <FeedPage />
        </Route>

        <Route exact path="/postpage/:id">
          <PostPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
