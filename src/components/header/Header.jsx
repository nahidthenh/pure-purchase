import { Col, Container, Nav, NavLink, Navbar, Row } from "react-bootstrap";
import logo from '/logo-2.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-wrap">
            <div className="header-top py-2 section-border-bottom">
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className="me-5" href="/">
                            <img width={100} src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <div className="nav-search">
                                    <input type="text" placeholder="Search in Pure-purchase." className="form-control header-search" />
                                    <button type="button"><i className="ri-search-line"></i></button>
                                </div>
                            </Nav>
                            <Nav className="nav-end">
                                <Nav.Link className="me-3" href=""><i className="ri-shopping-cart-line"></i></Nav.Link>
                                <NavLink className="d-flex align-items-center" as={Link} to='/cate'>
                                    <i className="ri-login-box-line me-2"></i> <span>Sign In</span>
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="header-bottom py-3">
                <Container>
                    <Row>
                        <Col md={12}>
                            <ul className="header-nav">
                                <li>
                                    <Link to='/'><i className="ri-home-2-line"></i> Home</Link>
                                </li>
                                <li>
                                    <Link to='/product'><i className="ri-shopping-bag-line"></i> Products</Link>
                                </li>
                                <li>
                                    <Link to='/category'><i className="ri-file-list-line"></i> Category</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default Header;