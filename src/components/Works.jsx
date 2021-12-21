import { Button, Card } from "react-bootstrap";
import AddWork from "./AddWork";
import React, { useEffect, useState, useMemo } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services/WorksServices";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

export const WorkContext = React.createContext();

function Works(props) {
    const [user, error, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const [workId, setWorkId] = useState("");
    const [addWork, setAddWork] = useState(false);
    const [works, setWorks] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const [sortBy, setSortBy] = useState("company_desc");

    const value = useMemo(
        () => ({
            workId,
            setWorkId
        }),
        [workId]
    );

    function SortServiceHandler() {
        setSortBy(prevState => (prevState === "service_asc" ? "service_desc" : "service_asc"));
    }

    function SortCompanyHandler() {
        setSortBy(prevState => (prevState === "company_asc" ? "company_desc" : "company_asc"));
    }

    function addWorkHandler() {
        setAddWork(true);
    }

    function closeWorkHandler() {
        setAddWork(false);
    }

    function onUpdateWorkHandler(id, data) {
        services.updateWork(id, data);
        setWorkId("");
    }

    const handleAddWork = data => {
        services.addWork(data);
        closeWorkHandler();
        props.status(true);
    };

    const handleFilter = criteria => {
        const filteredItems = works.filter(item => {
            return Object.keys(criteria).every(filter => {
                return criteria[filter] === item[filter];
            });
        });
        setSearchResult(filteredItems);
    };

    useEffect(() => {
        if (!user) navigate("/");
        services.getAllWorks(setWorks, sortBy);
    }, [sortBy]);

    return (
        <>
            {(addWork || workId) && <AddWork onUpdate={onUpdateWorkHandler} setWorks={handleAddWork} updateId={workId} />}

            <Card>
                <Card.Header>
                    {addWork ? (
                        <Button className="btn btn-danger" onClick={closeWorkHandler}>
                            Atšaukti
                        </Button>
                    ) : (
                        <div>
                            <Button className="btn btn-primary" onClick={addWorkHandler}>
                                Pridėti Darbą
                            </Button>
                            <Link className="btn btn-primary" to={"/companies"}>
                                Peržiūrėti įmones
                            </Link>
                        </div>
                    )}
                </Card.Header>

                <Card.Header>
                    <h3>Darbų sąrašas</h3>
                </Card.Header>

                <Card.Header>
                    <Filter handleFilter={handleFilter} />
                </Card.Header>
                <Card.Body>
                    <WorkContext.Provider value={value}>
                        <WorksTable
                            SortCompanyHandler={SortCompanyHandler}
                            SortServiceHandler={SortServiceHandler}
                            data={searchResult.length ? searchResult : works}
                        />
                    </WorkContext.Provider>
                </Card.Body>
            </Card>
        </>
    );
}

export default Works;
