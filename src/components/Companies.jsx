import Company from "./Company";
import { getAllCompanies } from "../services/companies";
import { useEffect, useState } from "react";

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getAllCompanies(setCompanies);
    }, []);

    return companies.map(c => <Company key={c.code} value={c.name} title={c.name} />);
}

export default Companies;
