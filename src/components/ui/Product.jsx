/* eslint-disable react/prop-types */
const Product = (props) => {
    const { title, description, price, thumbnail } = props.data;
    return (
        <div>
            <h3>{title}</h3>
            <img className="img-fluid" src={thumbnail} alt="" />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Product;