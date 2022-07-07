import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/ok" component={LandingPage} />
        
        </Switch>    
      </Router>
    </div>
  );
};

export default Routes;
