import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";
import * as services from "../services/WorksServices";

function AddWork(props) {
    const [workData, setWorkData] = useState({
        date: "",
        company: "",
        service: "",
        description: "",
        from: "",
        to: ""
    });

    useEffect(() => {
        props.updateId && services.showById(workData => setWorkData(workData), props.updateId);
    }, [props.updateId]);

    const handleChange = e => {
        setWorkData({
            ...workData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.setWorks(workData);
    };

    const updateHandler = () => {
        props.onUpdate(props.updateId, workData);
    };

    return (
        <Card>
            <Card.Header>Pridėkite Darbą</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Data</Form.Label>
                        <Form.Control name="date" onChange={handleChange} type="date" value={workData.date} />
                    </Form.Group>

                    <FloatingLabel className="mb-3" label="Pasirinkite įmonę">
                        <Form.Select name="company" onChange={handleChange} value={workData.company} aria-label="Floating label select example">
                            <option></option>
                            <Companies />
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" label="Pasirinkite suteiktą paslaugą">
                        <Form.Select name="service" onChange={handleChange} value={workData.service} aria-label="Floating label select example">
                            <Services />
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Atlikto darbo aprašymas">
                        <Form.Control
                            name="description"
                            onChange={handleChange}
                            value={workData.description}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>

                    <Form.Group className="mb-3">
                        <Form.Label>Nuo:</Form.Label>
                        <Form.Control name="from" onChange={handleChange} value={workData.from} type="time" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Iki:</Form.Label>
                        <Form.Control name="to" onChange={handleChange} value={workData.to} type="time" />
                    </Form.Group>

                    {props.updateId ? (
                        <Button variant="primary" type="button" onClick={updateHandler}>
                            Redaguoti
                        </Button>
                    ) : (
                        <Button variant="primary" type="submit">
                            Saugoti
                        </Button>
                    )}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddWork;
