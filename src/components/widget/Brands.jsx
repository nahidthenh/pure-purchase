import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";


const Brands = () => {

    const [brandData, setBrandData] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setBrandData(res.data.products);
            })
    }, [])

    console.log('Brand Data ', brandData);
    return (
        <div className="category-wrap">
            <h4>Brands</h4>

            <Form>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        {
                            brandData.map(data => (
                                <Form.Check
                                    key={data.id}
                                    type={type}
                                    id={`${data.brand}`}
                                    label={`${data.brand}`}
                                />
                            ))
                        }
                    </div>
                ))}
            </Form>
        </div>
    );
};

export default Brands;