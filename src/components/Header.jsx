import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
    return (
        <Navbar className="container-fluid" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Timetable App</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#/" >Edvin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
