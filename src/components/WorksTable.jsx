import { Card, Table } from "react-bootstrap";
import * as services from "../services"
import Work from "./Work";
import {Button} from "react-bootstrap";
// import Works from "./Works";


const WorksTable = props => {

    const deleteItemHandler = (id)=> {
            services.deleteWork(id)

    }


    // const Works = props => {
    //     const sortByDesc = (sortBy)=> {

    //         services.getAllWorks(sortBy)
    //     }

    // }
    return (
        <Card.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Klientas 
                        <Button className="btn btn-danger"  onClick={props.SortCompanyHandler}>
                            SortByCompany
                        </Button>
                        </th>
                        <th>Suteikta paslauga
                        <Button className="btn btn-danger" onClick={props.SortServiceHandler}>
                            SortByService
                        </Button>
                        </th>
                        <th>Trukmė
                        
                        </th>
                        <th>Keisti</th>
                        <th>Šalinti</th>
                        <th>Plačiau</th>
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
