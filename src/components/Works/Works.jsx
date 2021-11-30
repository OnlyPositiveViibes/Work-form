import Addwork from "../Form/Addwork";
import {Card, Table} from "react-bootstrap"
import Filter from "../Filter/Filter";
import {useState} from "react";
import { Button } from "react-bootstrap";


function Works() {
    const [addWork, setAddWork] = useState(false)

    const addWorkHandler = () => {
        setAddWork(true)
    }

    const closeWork = () => {
        setAddWork(false)
    }

  
    return(
        <>
       {addWork && <Addwork/>} 
        <Filter/>
        <Card>
            <Card.Header>
                

               {(addWork)?<Button className="btn btn-danger" onClick={closeWork}>Atsaukti</Button>:
                <Button className="btn btn-primary" onClick={addWorkHandler}>Prideti</Button>}
                

            </Card.Header>
            <Card.Header><h3>Darbu Sarasas:</h3></Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Data:</th>
                            <th>Klientas:</th>
                            <th>Suteikta paslauga:</th>
                            <th>Aprasymas:</th>
                            <th>Trukme:</th>
                        </tr>
                    </thead>
                </Table>
            </Card.Body>
        </Card>
        </>
    )
}

export default Works;