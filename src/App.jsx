import './App.css';
import {useState, useEffect} from "react";
import Cards from "./components/Cards";

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
    <Cards star={star} />  
  </div>
  )
}
export default App;
