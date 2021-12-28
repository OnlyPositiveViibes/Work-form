import { Table } from "react-bootstrap";
import * as services from "../services/WorksServices";
import Work from "./Work";
import { Button } from "react-bootstrap";
import { ArrowDownUp } from "react-bootstrap-icons";
import { useGlobalContext } from "../context/WorksContext";

const WorksTable = props => {
    const { worksNew, worksFiltered } = useGlobalContext();

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
                {worksFiltered.length
                    ? worksFiltered.map((w, i) => <Work key={"workid" + i} work={w} deleteW={deleteItemHandler} />)
                    : worksNew.map((w, i) => <Work key={"workid" + i} work={w} deleteW={deleteItemHandler} />)}
            </tbody>
        </Table>
    );
};

export default WorksTable;
