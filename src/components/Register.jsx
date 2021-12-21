import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register, auth } from "../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, error, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/works");
    }, [user, loading]);

    const submitHandler = e => {
        e.preventDefault();
        if (!userName) alert("Ivesk vardą");
        register(userName, email, password);
    };

    return (
        <>
            <h2 className="">Sukurk paskyrą</h2>
            <Form onSubmit={submitHandler} className="mx-auto col-sm-6">
                <Form.Group className="mb-3">
                    <Form.Control onChange={e => setUserName(e.target.value)} value={userName} type="text" placeholder="Iveskite savo vardą" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Iveskite el.paštą" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Iveskite slaptažodį" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registruotis
                </Button>
            </Form>
        </>
    );
};

export default Register;
