
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Header />
        <Hero />
      </Route>
      
    </Switch>
  </Router>
);
}

export default App;
