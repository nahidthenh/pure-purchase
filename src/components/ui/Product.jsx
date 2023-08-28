import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = (props) => {
    const { id, title, discountPercentage, price, thumbnail, rating } = props.data;
    const backgroundImageStyle = {
        backgroundImage: `url(${thumbnail})`,
    };
    // Function to truncate the title to a specific word count
    const truncateTitle = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };
    return (
        <div className="product-single-item">
            <div className="product-image" style={backgroundImageStyle}>
                <div className="product-option">
                    <Link to={`/product-details/${id}`}><button><i className="ri-eye-line"></i></button></Link>
                    <button><i className="ri-heart-line"></i></button>
                    <button><i className="ri-shopping-cart-line"></i></button>
                </div>
            </div>
            <div className="p-3">
                <Link to={`/product-details/${id}`}><h3>{truncateTitle(title, 2)}</h3></Link>
                <div className="item-details-content d-flex justify-content-between align-items-center">
                    <p className="item-price">${Math.round(price - (price * (discountPercentage / 100)))} <del>${price}</del></p>
                    <p className="item-review-count">{rating}<i className="ri-star-half-line"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Product;