import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Produtos from "./components/Produtos";
import InserirProduto from "./components/InserirProduto";
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
