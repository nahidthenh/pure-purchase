import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const Category = () => {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(res => {
                setCategoryData(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    // console.log('Category', categoryData);

    return (
        <div className="category-wrap">
            <h4>Product categories</h4>

            <Form>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        {
                            categoryData.map(data => (
                                <Form.Check
                                    key={data}
                                    type={type}
                                    id={`${data}`}
                                    label={`${data}`}
                                />
                            ))
                        }
                    </div>
                ))}
            </Form>
        </div>
    );
};

export default Category;