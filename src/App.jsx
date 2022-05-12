import './App.css';
import {useState, useEffect} from "react";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
function App() {

const [star, setStar] = useState([]);

const getStar = async () => {
  const res = await fetch(`https://swapi.dev/api/starships`)
  const data = await res.json()
  setStar(data.results);
  console.log(data)
}

useEffect(() => {getStar()}, []);
return ( 
  <div className="app">
    <Header />
    <Cards star={star} />  
  </div>
  )
}
export default App;
