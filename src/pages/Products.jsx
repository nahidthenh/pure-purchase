import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../components/widget/Slider';
import Category from '../components/widget/Category';
import Brands from '../components/widget/Brands';
const Products = () => {
    return (
        <section className='mt-170'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="banner-wrap">
                            <Slider></Slider>
                        </div>
                    </Col>
                </Row>

                <Row className='my-3'>
                    <Col md={3}>
                        <div className="left-sidebar">
                            <Brands></Brands>
                            <Category></Category>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="p-3 bg-danger">

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Products;