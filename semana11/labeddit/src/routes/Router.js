import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/Postpage'
import ErrorPage from '../pages/ErrorPage/Errorpage'
import Header from '../components/Header/Header'

const Router = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/cadastrar'}>
                    <SignUpPage />
                </Route>

                <Route exact path={'/'}>
                    <FeedPage />
                </Route>

                <Route exact path={'/post/:id'}>
                    <PostPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>

        </BrowserRouter>
    )




}

export default Router