import './App.css';
import {useRef, useState, useEffect} from "react";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Form from "./components/Form";


function App() {
const [star, setStar] = useState([]);
const url = "https://swapi.dev/api/starships/"
const getStar = async () => {
  const res = await fetch(url)
  const data = await res.json()
  setStar(data.results);
  console.log(data);
}
useEffect(() => {getStar()}, []);

const inputRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  const search = inputRef.current.value
  setStar(`${url}?page=${search}`)
}


return ( 
  <div className="app">
    <Header />
    <Form onSubmit={() => handleSubmit()}/>
    <Cards star={star} />  
  </div>
  )
}
export default App;
