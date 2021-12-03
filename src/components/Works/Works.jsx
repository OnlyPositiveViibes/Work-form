import Addwork from "../Form/Addwork";
import { Card, Table } from "react-bootstrap"
import Filter from "../Filter/Filter";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Work from "./Work";
// import { propTypes } from "react-bootstrap/esm/Image";


function Works(props) {
    const [addWork, setAddWork] = useState(false)
    const [works, setWorks] = useState([
    ]);

    const [filteredWorks, setFilteredWorks] = useState([])

    const addWorkHandler = () => {
        setAddWork(true)
    }
    const closeWork = () => {
        setAddWork(false)
    }
    const handleAddWork = (date) => {
        setWorks([...works, date])
        props.status(true)
        closeWork();
    }

    const handleFilter = (items) => {
        
        const filteredItems = works.filter(item => {
            return Object.keys(items).every(filter => {
                return items[filter] === item[filter];
            });
        })
        setFilteredWorks(filteredItems)
        console.log(filteredItems)
    }

    

    return (
        <>
            {addWork && <Addwork setWorks={handleAddWork} />}
            
            <Card>
                <Card.Header>

                    {(addWork) ? <Button className="btn btn-danger" onClick={closeWork}>Atsaukti</Button> :
                        <Button className="btn btn-primary" onClick={addWorkHandler}>Prideti</Button>}

                </Card.Header>

                <Card.Header>
                    <Filter setFilter={handleFilter}/>

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
                                <th>Baigta:</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                                {(filteredWorks.length)? 
                              ( filteredWorks.map((work, i) => (
                                    <Work key={work.i} date={work.date}
                                    company={work.company}
                                    service={work.service}
                                    description={work.description}
                                    startTime={work.startTime}
                                    endTime={work.endTime} />

                               )))
                              

                            : 
                            
                            (works.map((work =>
                                <Work key={work.i} date={work.date}
                                    company={work.company}
                                    service={work.service}
                                    description={work.description}
                                    startTime={work.startTime}
                                    endTime={work.endTime} />
                            )))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}

export default Works;