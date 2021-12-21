import { Container, Nav, Navbar } from "react-bootstrap";
import User from "./User";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Timetable App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#/"></Nav.Link>
                </Nav>
                <User />
            </Container>
        </Navbar>
    );
}

export default Header;
