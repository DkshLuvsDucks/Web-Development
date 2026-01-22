import "./Price.css";

export default function Price({oldPrice, newPrice}){
    return(
        <div className="price-box">
            <span className="old-price">₹{oldPrice}</span>
            <span className="new-price">₹{newPrice}</span>
        </div>
    );
};