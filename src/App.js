import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import { Card } from 'react-bootstrap';
import './App.css';
import Works from './components/Works/Works';
import {useState, useEffect} from "react";
import {Alert} from "react-bootstrap"

function App() {

  const [message, setMessage] = useState(false);

 const setMessageHandler = (status) =>{
   if(status) {
     setMessage('Service added');
   }
  }

  useEffect(() => {
    setTimeout(() => {
    setMessage('');
    }, 5000);
    }, [message]);

  return (
    <div className="App">

      
        <Header/>
          {message && <Alert>{message}</Alert>}
        <Works status={setMessageHandler}></Works>
    

    </div>
  );
}

export default App;
