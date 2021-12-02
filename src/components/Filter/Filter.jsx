import { Form, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Services from "../Services";
import Companies from "../../Companies/Companies";
import { useState } from "react";


function Filter(props) {

    const [filter, setFilter] = useState({

    })
    const handleFilter = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })

    }
    const submitFilter = (e) => {
        e.preventDefault();
        props.setFilter(filter);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Form className="d-flex" onSubmit={submitFilter}>
                        <Form.Group className="m-2 w-25">
                            <Form.Select name="serviceSelect" onChange={handleFilter}>

                                <option selected disabled>Pasirinkite-</option>
                                <Services />

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="m-2 w-25">
                            <Form.Select name="companySelect" onChange={handleFilter}>

                                <option selected disabled>-Pasirinkite-</option>
                                <Companies />

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