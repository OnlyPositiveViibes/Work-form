import { Button, Form, Table } from "react-bootstrap";
import { getAllCompanies, addCompany } from "../services/companies";
import { useEffect, useState } from "react";
import CompanyItem from "./CompanyItem";
import { PlusSquare, ArrowReturnLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CompaniesTable = () => {
    const [companies, setCompanies] = useState([]);
    const [companyData, setCompanyData] = useState({
        name: "",
        manager: "",
        address: ""
    });

    useEffect(() => {
        getAllCompanies(setCompanies);
    }, []);

    const handleChange = e => {
        setCompanyData({
            ...companyData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        addCompany(companyData);
        setCompanyData({
            name: "",
            manager: "",
            address: ""
        });
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Pavadinimas</th>
                    <th>Vadovas</th>
                    <th>Adresas</th>
                    <th>
                        <Link className="btn btn-primary" to="/">
                            <ArrowReturnLeft />
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {companies.map((c, i) => (
                    <CompanyItem key={i} company={c} />
                ))}
                <tr>
                    <td>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Pavadinimas" name="name" onChange={handleChange} type="text" value={companyData.name} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Vadovas" name="manager" onChange={handleChange} type="text" value={companyData.manager} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Adresas" name="address" onChange={handleChange} type="text" value={companyData.address} />
                        </Form.Group>
                    </td>
                    <td>
                        <Button onClick={handleSubmit}>
                            <PlusSquare />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default CompaniesTable;
