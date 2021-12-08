import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Works from "./components/Works";
import { Alert } from "react-bootstrap";

function App() {
    const [message, setMessage] = useState("");

    const setMessageHandler = status => {
        status && setMessage("Paslauga pridėta");
    };

    useEffect(() => {
        setTimeout(() => {
            setMessage("");
        }, 5000);
    }, [message]);

    return (
        <div className="container">
            <Header />
            {message && <Alert>{message}</Alert>}
            <Works status={setMessageHandler} />
        </div>
    );
}

export default App;
