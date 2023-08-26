import { Col, Container, Row } from "react-bootstrap";
import footerLogo from '/main-logo-light.png';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer-wrap">
            <div className="footer-top py-5">
                <Container>
                    <Row>
                        <Col xl={3} md={6}>
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <img width={50} src={footerLogo} alt="footer logo" />
                                </div>
                                <p className="mb-2">
                                    Largest product search engine, maximum categorized online shopping mall and quickest home delivery system.
                                </p>
                            </div>
                        </Col>
                        <Col xl={3} md={6}>
                            <div className="ms-5 footer-widget">
                                <div className="footer-title">
                                    <h4>Quick Menu</h4>
                                </div>
                                <ul>
                                    <li><Link to='/myaccount'>Your Account</Link></li>
                                    <li><Link to='/myorder'>Your Order</Link></li>
                                    <li><Link to='/pp'>Privacy Policy</Link></li>
                                    <li><Link to='/about'>About us</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} md={6}>
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <h4>Let Us Help You</h4>
                                </div>
                                <ul>
                                    <li><Link to='/about'>About us</Link></li>
                                    <li><Link to='/contact'>Contact us</Link></li>
                                    <li><Link to='/testimonials'>Testimonials</Link></li>
                                    <li><Link to='/features'>Features</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} md={6}>
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <p className="mb-2">
                                    House #8, Road # 14,
                                    Dhanmondi, Dhaka-1209.
                                </p>
                                <p className="mb-2">Email: mail.mdnahidhasan@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom py-4">
                <p className="copy-right-text">@ 2023-2024 pure-purchase.com Limited. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;