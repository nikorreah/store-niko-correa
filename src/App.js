import Header from "./components/header/Header"
import Navbar from "./components/nav/Navbar"
import CardProducts from "./components/cardProducts/CardProducts";
import './App.css';
import Points from "./components/pages/Points/Points";
import Redeem from "./components/pages/Redeems/Redeems";
import { Route, Switch } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/points" component={Points} />
        <Route path="/redeem" component={Redeem} />
      </Switch>
      <Navbar />
      <CardProducts />
    </div>
  );
}

export default App;
