import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Services from "../Services";
import Companies from "../../Companies/Companies";

function Addwork() {

    return (

        <Card>
            <Card.Header>Pridekite Darba:</Card.Header>
            <Card.Body></Card.Body>
            <Form>
                <Form.Group className="m-2">
                    <Form.Label>Pasirinkite datą:</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="m-2">

                    <Form.Select aria-label="Default select example">
                        <Services />
                    </Form.Select>
                </Form.Group>

                <Form.Group className="m-2">
                    <Form.Select aria-label="Default select example">
                        <Companies />
                    </Form.Select>
                </Form.Group>

                <Form.Group className="m-2">
                    <textarea name="task" rows="4" cols="50">
                        Atliktos darbo uzduotys
                    </textarea>
                </Form.Group>

                <Form.Group className="m-2">
                    <Form.Label>Nuo:</Form.Label>
                    <Form.Control type="time" />

                    <Form.Label>Iki:</Form.Label>
                    <Form.Control type="time" />
                    <Button className="m-3">Issaugoti</Button>

                </Form.Group>




            </Form>

        </Card >
    )
}

export default Addwork;