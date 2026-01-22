import "./Product.css"

function Product({title, price = 1, features, features2}){
    let isDiscount = price > 500;
    let styles = {backgroundColor: isDiscount ? "pink" : "", color: isDiscount ? "black" : ""};
    return (
        <div className = "Product" style={styles}>
            <h3>{title}</h3>
            
            <h5>Price: ${price}</h5>

            {/* use ternary operator or &&, && saves some time (if first true then directly does the operation) */}
            {/* {price > 500 ? <p>"Discount : 5%"</p> : null} */}
            {isDiscount && <p>"Discount : 5%"</p>}
            
            {features && (
                <p> {features.map((feature) => <li>{feature}</li>)}</p>
            )}

            {features2 && (
            <p>{features2.a} {features2.b} {features2.c}</p>
            )}           
        </div>
    );
}

export default Product;