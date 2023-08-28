import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const currentProductId = useParams();

    const [productData, setProductData] = useState([])

    useEffect(() => {
        axios.get(`/product/${currentProductId.id}`)
            .then(res => {
                setProductData(res.data);
            })
    })

    return (
        <div className="mt-170">
            <h3>This is Product details page Name is {productData.title}</h3>
        </div>
    );
};

export default ProductDetails;