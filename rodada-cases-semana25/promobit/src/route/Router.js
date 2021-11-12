import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import MoviePage from '../pages/MoviePage/MoviePage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/movie/:id'}>
                    <MoviePage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router