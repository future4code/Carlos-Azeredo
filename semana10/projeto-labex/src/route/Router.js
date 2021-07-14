import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import ApplicationFormPageCopy from '../pages/ApplicationFormPageCopy'
import CreateTripPage from '../pages/CreateTripPage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import Error from '../pages/Error'


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/ListTripsPage"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/AdminHomePage"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/ApplicationFormPage/"}>
                    <ApplicationFormPage />
                </Route>
                
                <Route exact path={"/ApplicationFormPageCopy"}>
                    <ApplicationFormPageCopy />
                </Route>
                
                <Route exact path={"/CreateTripPage"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/LoginPage"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/TripDetailsPage"}>
                    <TripDetailsPage />
                </Route>

                <Route>
                    <Error/>
                </Route>

            </Switch>


        </BrowserRouter>
    )
}