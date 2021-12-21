import { Table } from "react-bootstrap";
import * as services from "../services/WorksServices";
import Work from "./Work";
import { Button } from "react-bootstrap";
import { ArrowDownUp } from "react-bootstrap-icons";

const WorksTable = props => {
    const deleteItemHandler = id => {
        services.deleteWork(id);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>
                        <span>Klientas</span>
                        <Button className="btn btn-danger" onClick={props.SortCompanyHandler}>
                            <ArrowDownUp />
                        </Button>
                    </th>
                    <th>
                        <span className="mr-3">Paslauga</span>
                        <Button className="btn btn-danger" onClick={props.SortServiceHandler}>
                            <ArrowDownUp />
                        </Button>
                    </th>
                    <th>Aprašymas</th>
                    <th>Trukmė</th>
                    <th>Redaguoti</th>
                    <th>Šalinti</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((w, i) => (
                    <Work key={"workid" + i} work={w} deleteW={deleteItemHandler} />
                ))}
            </tbody>
        </Table>
    );
};

export default WorksTable;
