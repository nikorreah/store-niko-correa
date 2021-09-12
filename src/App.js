import Header from "./components/header/Header"
import Home from "./components/cardProducts/CardProducts";
import './App.css';
import Points from "./components/pages/Points/Points";
import Redeem from "./components/pages/Redeems/Redeems";
import { Route, Switch } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/points" component={Points} />
        <Route path="/redeem" component={Redeem} />
      </Switch>
    </div>
  );
}

export default App;
