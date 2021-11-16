import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SearchPage from "../screens/SearchPage/SearchPage";
import VideoList from "../screens/VideoPage/VideoPage";

const Router = () => {

    return (
        <BrowserRouter>
          <Switch>
              <Route exact path={"/"} component={SearchPage}/>
              <Route exact path={"/lista"} component={VideoList}/>
          </Switch>
        </BrowserRouter>
    )
  }

  export default Router