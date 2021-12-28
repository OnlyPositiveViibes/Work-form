import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword, auth } from "../services/AuthServices";

const Reset = () => {
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if (!email) alert("Įveskite adresą");
        resetPassword(email);
        navigate("/login");
    };

    return (
        <>
            <h2 className="mt-3 text-center">Atstatykite slaptažodį</h2>
            <Form className="mx-auto col-sm-6" onSubmit={submitHandler}>
                <Form.Control title="email" placeholder="El. pašto adresas" value={email} onChange={e => setEmail(e.target.value)} />
                <Button type="submit">Atstatyti slaptažodį</Button>
            </Form>
            <div>
                Neturite paskyros?
                <Link to={"/register"}>Registruokites</Link>
            </div>
        </>
    );
};

export default Reset;
