import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from './../utils/axios';
import { Link } from "react-router-dom";

const Category = () => {

    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        axios.get('/products/categories')
            .then(res => {
                setCategoryData(res.data);
            })
    }, [])

    return (
        <div className="mt-170">
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        <h3 className="page-title">Categories</h3>
                        <div className="category-item">
                            {
                                categoryData.map(
                                    data => <Link
                                        key={data}
                                        to={`/result/${data}`}
                                        data={data}
                                    >{data}</Link>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;