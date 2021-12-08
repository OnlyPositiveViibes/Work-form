import { Card, Table } from "react-bootstrap";
import * as services from "../services"
import Work from "./Work";

const WorksTable = props => {

    const deleteItemHandler = (id)=> {
            services.deleteWork(id)

    }
    return (
        <Card.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Klientas</th>
                        <th>Suteikta paslauga</th>
                        <th>Aprašymas</th>
                        <th>Trukmė</th>
                        <th>Keisti</th>
                        <th>Šalinti</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((w, i) => (
                        <Work key={i} work={w}  
                        erase={deleteItemHandler}/>
                       
                    ))}
                </tbody>
            </Table>
        </Card.Body>
    );
};

export default WorksTable;
