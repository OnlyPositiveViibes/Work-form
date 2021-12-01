import { Form, Table, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Filter() {

    return (
        <>
            <Card>
                <Card.Body>
                    <Form className="d-flex">
                        <Form.Group className="m-2 w-25">
                            <Form.Select id="filter1">
                                <option></option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="m-2 w-25">
                            <Form.Select id="filter2">
                                <option></option>
                            </Form.Select>

                        </Form.Group>
                        <Form.Group className="m-2">
                            <Button variant="primary" type="submit">
                                Taikyti filtra
                            </Button>
                        </Form.Group>

                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Filter;