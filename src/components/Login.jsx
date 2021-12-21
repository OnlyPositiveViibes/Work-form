import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, signIn } from "../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, error, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if (!email) alert("Ivesk pašto adresą");
        if (!password) alert("Ivesk slaptažodi");
        signIn(email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("works");
    }, [user, loading]);

    return (
        <>
            <h2 className="">Prisijunkite</h2>
            <Form onSubmit={submitHandler} className="mx-auto col-sm-6">
                <Form.Group className="mb-3">
                    <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Iveskite el.paštą" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Iveskite slaptažodį" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Prisijungti
                </Button>
                <div>
                    <ul>
                        <li>
                            Neturite Paskyros? <Link to="/register">Galite prisiregistruoti</Link>
                        </li>
                        <li>
                            Pamiršote Slaptažodį? <Link to="/reset">Atkurti</Link>
                        </li>
                    </ul>
                </div>
            </Form>
        </>
    );
};

export default Login;
