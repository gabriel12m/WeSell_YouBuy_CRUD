/* Nesta função são feitos os routes para poder aceder às várias páginas através da Navbar e de outros cliques feitos em determinadas funcionalidades*/

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Produtos from "./components/pages/Produtos";
import InserirProduto from "./components/pages/InserirProduto";
import Produto from "./components/pages/Produto";
import EditarProduto from "./components/pages/EditarProduto";
import NavBar from "./components/sidebar/NavBar";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <div className="page">
            <Switch>
              <Route path="/" exact component={Produtos} />
              <Route path="/insert" exact component={InserirProduto} />
              <Route path="/produto/:id" exact component={Produto} />
              <Route
                path="/editarproduto/:id"
                exact
                component={EditarProduto}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
