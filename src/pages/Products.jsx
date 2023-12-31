import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../components/widget/Slider';
import Category from '../components/widget/Category';
import Product from '../components/ui/Product';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Discount from '../components/widget/Discount';
const Products = () => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        axios.get('products')
            .then(res => {
                setProductsData(res.data.products);
            })
    }, [])

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
                            <Discount></Discount>
                            <Category></Category>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="products-wrap">
                            <Row>
                                {
                                    productsData.map(data =>
                                        <Col key={data.id} xl={4} md={6} sm={12} lg={6} >
                                            <Product
                                                data={data}
                                            />
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Products;