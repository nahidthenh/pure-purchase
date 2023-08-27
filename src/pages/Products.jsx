import { Col, Container, Row } from 'react-bootstrap';
// import bannerImage from '../assets/image/banner/4.png'
import Slider from '../components/widget/Slider';
const Products = () => {
    return (
        <section className='mt-170'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="banner-wrap">
                            {/* <img className='img-fluid' src={bannerImage} alt="" /> */}
                            <Slider></Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Products;