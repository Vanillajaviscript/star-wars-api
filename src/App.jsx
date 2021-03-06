import './App.css';
import {useState, useEffect} from "react";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Form from "./components/form/Form";


function App() {
const [url, setUrl] = useState("https://swapi.dev/api/starships/");

const [star, setStar] = useState([]);

async function getStar() {
  const res = await fetch(url)
  const data = await res.json()
  setStar(data);
  setUrl(data.next);
  console.log(data);
}
useEffect(() => {getStar()}, []);

return ( 
  <div className="app">
    <Header />
    <Form getStar={getStar}/>
    <Cards star={star} />  
  </div>
  )
}
export default App;
