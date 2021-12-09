import {Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import * as services from "../services";
import {useParams} from "react-router-dom";


const WorkById = ()=> {
    const [work, setWork] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        services.showById(item=>setWork(item), id)
    }, [])

    console.log(work)
    return (

    <Card>
        <Card.Header>{work.date}</Card.Header>
        <Card.Body>
            <Card.Title>{work.company}</Card.Title>
            <Card.Text>{work.description}</Card.Text>
        </Card.Body>
    </Card>
)
}

export default WorkById