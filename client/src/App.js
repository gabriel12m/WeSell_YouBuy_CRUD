/* Nesta função são feitos os routes para poder aceder às várias páginas através da Navbar*/

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Produtos from "./components/pages/Produtos";
import InserirProduto from "./components/pages/InserirProduto";
import Produto from "./components/pages/Produto";
import NavBar from "./components/sidebar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="page">
          <Switch>
            <Route path="/" exact component={Produtos} />
            <Route path="/insert" exact component={InserirProduto} />
            <Route path="/produto/:id" exact component={Produto} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
