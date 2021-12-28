import { Form, Button, FloatingLabel, FormGroup } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";
import { useGlobalContext } from "../context/WorksContext";
import { useEffect } from "react";

function Filter() {
    const { handleFilter, filter, worksFiltered } = useGlobalContext();

    const handleChange = e => {
        handleFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (!worksFiltered.length) {
            handleFilter({});
        }
    }, [worksFiltered]);

    const resetFilterHandler = () => handleFilter({});
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
