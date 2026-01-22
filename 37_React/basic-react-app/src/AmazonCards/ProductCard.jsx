import Price from "./Price";
import "./ProductCard.css";

export default function ProductCard({idx}) {
    let oldPrices = [69000, 10000, 72000, 6900];
    let newPrices = [67000, 6700, 67000, 6700];
    let titles = ["Mobile", "Headphones", "Laptop", "Keyboard"];
    let descriptions = ["yo ts Mobile lwk tuff" , "yo ts Headphones lwk tuff", "yo ts Laptop lwk tuff", "yo ts Keyboard lwk tuff"];
    return (
        <div className="product-card">
            <h2>{titles[idx]}</h2>
            <p className="description">{descriptions[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
};