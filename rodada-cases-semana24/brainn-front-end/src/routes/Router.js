import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "../pages/HomePage"


const Router = ({setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path="/HomePage">
                <HomePage setRightButtonText={setRightButtonText}/>
            </Route>
           
        </Switch>
    )
}

export default Router