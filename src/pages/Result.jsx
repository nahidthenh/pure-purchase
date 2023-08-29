import { Col, Container, Row } from "react-bootstrap";
import Category from "../components/widget/Category";
import Product from "../components/ui/Product";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";

const Result = () => {
    const currentCategoryId = useParams();

    const [resultData, setResultData] = useState([])

    useEffect(() => {
        axios.get(`/products/category/${currentCategoryId.id}`)
            .then(res => {
                setResultData(res.data.products);
            })
    })

    console.log(resultData);

    return (
        <div className='mt-170'>
            <Container>
                <Row className='my-3'>
                    <Col md={3}>
                        <div className="left-sidebar">
                            <Category></Category>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="products-wrap">
                            <Row>
                                {
                                    resultData.map(data =>
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
        </div>
    );
};

export default Result;