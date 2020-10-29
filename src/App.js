import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { PokemonDetails, PokemonList } from "./components";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <PokemonList/>
        </Route>
        <Route path="/pokemon-details/:pokemonName">
          <PokemonDetails/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
