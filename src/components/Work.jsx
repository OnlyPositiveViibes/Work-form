import React, {useContext} from "react";
import { WorkContext } from "./Works";
import {Link} from "react-router-dom";




function Work({ work, erase }) {

    const {workId, setWorkId} = useContext(WorkContext)
    const diff = (start, end) => {
        start = start.split(":");
        end = end.split(":");

        const startDate = new Date(0, 0, 0, start[0], start[1], 0);
        const endDate = new Date(0, 0, 0, end[0], end[1], 0);

        let diff = endDate.getTime() - startDate.getTime();
        let hours = Math.floor(diff / 1000 / 60 / 60);

        diff -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(diff / 1000 / 60);
        return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    };

    const getIdHandler = () => {
       erase(work.id)
    }

    const getIdUpdateHandler = () => {
        setWorkId(work.id)
    }
    return (
        <tr>
            <td>{work.date}</td>
            <td>{work.company}</td>
            <td>{work.service}</td>
            <td>{diff(work.from, work.to)}</td>
            <td><a href="#/" className="btn btn-secondary" onClick={getIdUpdateHandler}>Redaguoti</a></td>
            <td><a href="#/" className="btn btn-danger" onClick={getIdHandler}>Šalinti</a></td>
            <td><Link className={"btn btn-primary"} key={work.id} to={`work/${work.id}`}>Plačiau</Link></td>
        </tr>
    );
}

export default Work;
