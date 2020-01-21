import React from "react";
import { Switch, Route } from "react-router-dom";
// import route stuff
import Navigation from "./components/Navigation";

// import HomePage component
// import ModelerPage component
import HomePage from "./pages/HomePage";
import FrameworksPage from "./pages/FrameworksPage";
import ModelerPage from "./pages/ModelerPage";

export default () => (
  <div>
    <Navigation />
    {/* render routing logic of react-router-dom */}
    <Switch>
      <Route path="/modeler">
        <ModelerPage />
      </Route>
      <Route path="/frameworks">
        <FrameworksPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </div>
);
