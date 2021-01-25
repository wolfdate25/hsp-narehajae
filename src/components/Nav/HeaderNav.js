import { Nav, Navbar,Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function headerNav() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="home">팀-라온하제</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="home">홈</Nav.Link>
                    <NavDropdown title="카테고리" id="basic-nav-dropdown">
                        <NavDropdown.Item href="category/1">색션1</NavDropdown.Item>
                        <NavDropdown.Item href="category/2">색션2</NavDropdown.Item>
                        <NavDropdown.Item href="category/3">색션3</NavDropdown.Item>
                        {/*<NavDropdown.Divider />*/}
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">검색</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}