import { useEffect, useState } from "react";
import { Card, Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";
import * as services from "../services/WorksServices";
import { auth } from "../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGlobalContext } from "../context/WorksContext";
import { useParams, useNavigate } from "react-router-dom";

function AddWork(props) {
    const navigate = useNavigate();
    const { work, errors, handleWorkData, workValidation, addWorkToFirestore, updateFirestore } = useGlobalContext();
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();

    useEffect(() => {
        try {
            id && services.showById(data => handleWorkData(data), id);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const handleChange = e => {
        handleWorkData({ [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        workValidation(work);
        window.scrollTo(0, 0);
        if (Object.keys(errors).length !== 0) {
            addWorkToFirestore(work);
        }
    };

    const updateHandler = () => {
        updateFirestore(id, work);
        navigate("/works");
    };

    useEffect(() => {
        if (user) {
            handleWorkData({ uid: user.uid });
        }
    }, [user]);

    return (
        <Card>
            <Card.Header>Pridėkite Darbą</Card.Header>
            <Card.Body>
                {errors && Object.keys(errors).map(key => <Alert variant="danger">{errors[key]}</Alert>)}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Data</Form.Label>
                        <Form.Control name="date" onChange={handleChange} type="date" value={work.date} />
                    </Form.Group>

                    <FloatingLabel className="mb-3" label="Pasirinkite įmonę">
                        <Form.Select name="company" onChange={handleChange} value={work.company} aria-label="Floating label select example">
                            <option></option>
                            <Companies />
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" label="Pasirinkite suteiktą paslaugą">
                        <Form.Select name="service" onChange={handleChange} value={work.service} aria-label="Floating label select example">
                            <Services />
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Atlikto darbo aprašymas">
                        <Form.Control
                            name="description"
                            onChange={handleChange}
                            value={work.description}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>

                    <Form.Group className="mb-3">
                        <Form.Label>Nuo:</Form.Label>
                        <Form.Control name="from" onChange={handleChange} value={work.from} type="time" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Iki:</Form.Label>
                        <Form.Control name="to" onChange={handleChange} value={work.to} type="time" />
                    </Form.Group>

                    {props.updateId ? (
                        <Button variant="primary" type="button" onClick={updateHandler}>
                            Redaguoti
                        </Button>
                    ) : (
                        <Button onClick={updateHandler} variant="primary" type="submit">
                            Saugoti
                        </Button>
                    )}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddWork;
