import './App.css';
import {useRef, useState, useEffect} from "react";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Form from "./components/Form";


function App() {
const [star, setStar] = useState([]);
const url = "https://swapi.dev/api/starships/?page=1"
const getStar = async () => {
  const res = await fetch(url)
  const data = await res.json()
  setStar(data);
  console.log(data);
}
useEffect(() => {getStar()}, []);

const inputRef = useRef(null);


const handleSubmit = (e) => {
  e.preventDefault();
  const pageNum = inputRef.current.value
  setStar(`${url}?page=${pageNum}`)
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
