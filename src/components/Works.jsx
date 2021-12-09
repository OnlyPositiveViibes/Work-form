import { Button, Card } from "react-bootstrap";
import AddWork from "./AddWork";
import React, { useEffect, useState, useMemo } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services";

export const WorkContext = React.createContext();

function Works  (props)  {
    const [workId, setWorkId] = useState('');
    const [addWork, setAddWork] = useState(false);
    const [works, setWorks] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [sortBy, setSortBy] = useState("company_desc")
    const [sortService, setSortService] = useState("service_asc")
   
    const value = useMemo(()=> (
    {
        workId,
        setWorkId
        
    }), [workId])
   
    console.log(sortBy)
    function SortServiceHandler() {
        if (sortService === 'service_asc') {
            setSortService('service_desc');
        }
        else {
            setSortService('service_asc');
        }
    }

    function SortCompanyHandler() {
        if (sortBy === 'company_desc') {
            setSortBy('company_asc');
        }
        else {
            setSortBy('company_desc');
        }
    }
    

    function addWorkHandler() {
        setAddWork(true);
    }

    function closeWorkHandler() {
        setAddWork(false);
    }

    const handleAddWork = data => {
        services.addWork(data);
        // setWorks((prevData) => [...works, prevData]);
        closeWorkHandler();
        props.status(true);
    };

    const onUpdateWorkHandler = (data, id) => {
        services.updateWork(id, data)
        setWorkId('')
    }
    const handleFilter = criteria => {
        const filteredItems = works.filter(item => {
            return Object.keys(criteria).every(filter => {
                return criteria[filter] === item[filter];
            });
        });
        setSearchResult(filteredItems);
        // console.log("filteredItems", filteredItems);
    };

    useEffect(() => {
        services.getAllWorks(works => setWorks(works), sortBy,sortService);
    }, [sortBy, sortService])

    // console.log(workId)

    return (
        <>
            
            {(addWork || workId) && <AddWork setWorks={handleAddWork} update={workId} onUpdateWorkHandler ={onUpdateWorkHandler}/>}
            <Card>
                <Card.Header>
                    {addWork ? (
                        <Button className="btn btn-danger" onClick={closeWorkHandler}>
                            Atšaukti
                        </Button>
                    ) : (
                        <Button className="btn btn-primary" onClick={addWorkHandler}>
                            Pridėti
                        </Button>
                    )}
                </Card.Header>

                <Card.Header>
                    <h3>Darbų sąrašas</h3>
                </Card.Header>

                <Card.Header>
                    <Filter handleFilter={handleFilter} />
                </Card.Header>
               
                    <WorkContext.Provider value={value}>
                <WorksTable SortCompanyHandler={SortCompanyHandler} SortServiceHandler={SortServiceHandler} data={searchResult.length ?  searchResult : works} />
                </WorkContext.Provider>

               
            </Card>
        </>
    );
}

export default Works;
