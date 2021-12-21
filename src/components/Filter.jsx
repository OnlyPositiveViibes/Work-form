import { useEffect, useState } from "react";
import { Form, Button, FloatingLabel, FormGroup } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";

function Filter(props) {
    const [filter, setFilter] = useState({});

    const handleChange = e => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    };

    const resetFilterHandler = () => {
        setFilter({});
    };

    useEffect(() => {
        props.handleFilter(filter);
    }, [filter]);

    return (
        <div className="filters">
            <Form>
                <FormGroup>
                    <FloatingLabel className="mb-3" label="Companies">
                        <Form.Select defaultValue="Company" onChange={handleChange} name="company" aria-label="Floating label select example">
                            <Companies />
                        </Form.Select>
                    </FloatingLabel>
                </FormGroup>
                <FormGroup>
                    <FloatingLabel className="mb-3" label="Services">
                        <Form.Select onChange={handleChange} name="service" aria-label="Floating label select example">
                            <Services />
                        </Form.Select>
                    </FloatingLabel>
                </FormGroup>
                <FormGroup>
                    {Object.keys(filter).length !== 0 && (
                        <Button type="reset" onClick={resetFilterHandler}>
                            Valyti
                        </Button>
                    )}
                </FormGroup>
            </Form>
        </div>
    );
}

export default Filter;
