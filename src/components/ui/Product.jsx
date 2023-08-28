/* eslint-disable react/prop-types */
const Product = (props) => {
    const { title, discountPercentage, price, thumbnail, rating } = props.data;
    const backgroundImageStyle = {
        backgroundImage: `url(${thumbnail})`,
    };
    return (
        <div className="product-single-item">
            <div className="product-image" style={backgroundImageStyle}></div>
            <div className="p-3">
                <h3>{title}</h3>
                <div className="d-flex justify-content-between align-items-center">
                    <p>${Math.round(price - (price * (discountPercentage / 100)))} <del>${price}</del></p>
                    <p><i className="ri-star-half-line"></i>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;