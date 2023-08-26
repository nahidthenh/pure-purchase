import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Error = () => {
    return (
        <>
            <Header></Header>
            <Container className="mt-170">
                <Row>
                    <Col md={12} className="mx-auto">
                        <div className="error-wrap">
                            <h1>404</h1>
                            <h2>page is not found. <br /> the page is doesnt exist or deleted.</h2>
                            <Link to='/'>GO BACK TO HOME</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Error;