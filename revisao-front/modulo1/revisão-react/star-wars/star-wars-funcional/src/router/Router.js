import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/"></Route>
            <Route path="/characters"></Route>
            <Route path="/characters/details"></Route>
        </BrowserRouter>
    );
};
