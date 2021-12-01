import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Services from "../Services";
import Companies from "../../Companies/Companies";
import { useState } from "react";

function Addwork(props) {

    const [items, setItems] = useState({
        date: "",
        company: "",
        service: "",
        description: "",
        startTime: "",
        endTime: "",
    })

    const handleChange = (e) => {
        setItems({
            ...items,
            [e.target.name]: e.target.value,

        }
        )
        // console.log(e.target.name);
    }
    // console.log(items)

    const handleSubmit= (e) => {
        e.preventDefault();
        props.setWorks(items);
    }

    return (

        <Card>
            <Card.Header>Pridekite Darba:</Card.Header>
            <Card.Body></Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2 ">
                    <Form.Label>Pasirinkite datą:</Form.Label>
                    <Form.Control type="date" name="date" value={items.date} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-2" >
                <FloatingLabel label="Select service">
                    <Form.Select aria-label="Default select example" name="service" value={items.service} onChange={handleChange}>
                        <option>...</option>
                        <Services /> 
                        
                    </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-2" >
                <FloatingLabel label="Select company">
                    <Form.Select aria-label="Default select example" name="company" value={items.company} onChange={handleChange} >
                    <option>...</option>
                        <Companies />
                    </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-2"  >
                    <textarea name="description" rows="4" cols="50" value={items.description} onChange={handleChange}>
                        Atliktos darbo uzduotys
                    </textarea>
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Label >Nuo:</Form.Label>
                    <Form.Control type="time" name="startTime" value={items.startTime} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Iki:</Form.Label>
                    <Form.Control type="time" name="endTime" value={items.endTime} onChange={handleChange} />
                </Form.Group>
                <Button className="mb-3" type="submit">Issaugoti</Button>

            </Form>

        </Card >
    )
}

export default Addwork;