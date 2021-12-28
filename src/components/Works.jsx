import { Button, Card } from "react-bootstrap";
import AddWork from "./AddWork";
import React, { useEffect } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGlobalContext } from "../context/WorksContext";

function Works() {
    const { worksNew, isOpen, handleForm } = useGlobalContext();

    const [user, error, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/");
    }, [user]);

    return (
        <>
            {isOpen && <AddWork />}

            <Card>
                <Card.Header>
                    {isOpen ? (
                        <Button
                            className="btn btn-danger"
                            onClick={() => {
                                handleForm(false);
                            }}
                        >
                            Atšaukti
                        </Button>
                    ) : (
                        <div>
                            <Button
                                className="btn btn-primary"
                                onClick={() => {
                                    handleForm(true);
                                }}
                            >
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
                    <Filter />
                </Card.Header>
                <Card.Body>
                    <WorksTable data={worksNew} />
                </Card.Body>
            </Card>
        </>
    );
}

export default Works;
