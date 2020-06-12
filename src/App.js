import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import ExternalApi from "./views/ExternalApi";

import Cards from "./components/Cards";
import SearchResult from "./components/SearchResult"
import CategorySets from "./components/CategorySets"

import { Router, Route, Switch } from "react-router-dom";

import "./styles/index.css";

import Profile from "./components/Profile";
import history from "./utils/history";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PrivateRoute from "./components/PrivateRoute"
import theme from './components/Theme'


function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Don't forget to include the history module */}
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sets/search/:search" exact component={SearchResult} />
            <Route path="/categories/:id" component={CategorySets} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/external-api" component={ExternalApi} />
            <Route path="/sets/:id" component={Cards} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
