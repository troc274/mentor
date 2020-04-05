import { h, render } from "preact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "pages/home";
import Auth from "pages/auth";
import "assets/styles/style.scss";

const App = props => {
  return (
    <div id="main-app">
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/mentor">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.body);
