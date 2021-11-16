
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SearchPage from "../pages/SearchPage/SearchPage";
import VideoList from "../pages/VideoPage/VideoPage";

const Router = () => {
    
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path={"/"} component={SearchPage}/>
              <Route exact path={"/video/:name"} component={VideoList}/>
          </Switch>
        </BrowserRouter>
    )
  }
  
  export default Router