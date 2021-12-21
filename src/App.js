import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Works from "./components/Works";
import { Alert } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkById from "./components/WorkById";
import CompaniesTable from "./components/CompaniesTable";
import Register from "./components/Register";
import Login from "./components/Login";

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
            <Router>
                <Header />
                {message && <Alert>{message}</Alert>}
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/works" element={<Works status={setMessageHandler} />} />
                    <Route exactpath="/companies" element={<CompaniesTable />} />
                    <Route path="/work/:id" element={<WorkById />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
