import React, { useContext } from "react";
import { Link } from "react-router-dom";
import diff from "../utilities/timeCalc";
import { useGlobalContext } from "../context/WorksContext";

function Work({ work, deleteW, id }) {
    const { deleteFromFirestore } = useGlobalContext();

    return (
        <tr>
            <td>{work.date}</td>
            <td>{work.company}</td>
            <td>{work.service}</td>
            <td>{work.description}</td>
            <td>{diff(work.from, work.to)}</td>
            <td>
                <Link type="button" to={`/work/update/${work.id}`}>
                    Edit
                </Link>
            </td>
            <td>
                <button onClick={() => deleteFromFirestore(work.id)}>Delete</button>
            </td>
            <td>
                <Link className={"btn btn-primary"} key={work.id} to={`work/${work.id}`}>
                    Plačiau
                </Link>
            </td>
        </tr>
    );
}

export default Work;
