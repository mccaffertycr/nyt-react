import React from "react";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
    <Switch>
      <Route path="/" exact component={Articles} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/articles/saved" component={Saved} />
      <Route path="/articles/:id" component={Detail} />
      <Route component={NoMatch} />
    </Switch>
    </div>
  </Router>
);

export default App;
