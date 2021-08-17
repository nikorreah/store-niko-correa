import Header from "./components/header/Header"
import Navbar from "./components/nav/Navbar"
import CardProducts from "./components/cardProducts/CardProducts";
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <CardProducts/>
    </div>
  );
}

export default App;
