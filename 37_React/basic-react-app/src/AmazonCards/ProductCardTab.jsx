import ProductCard from "./ProductCard";

export default function ProductCardTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px"
    };
    return(
        <div style={styles}>
            <ProductCard idx={0}/>
            <ProductCard idx={1}/>
            <ProductCard idx={2}/>
            <ProductCard idx={3}/>
        </div>
    );
};