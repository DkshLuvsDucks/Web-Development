import Product from "./Product";

function ProductTab(){
    let options = ["hi-tech", "durable", "fast"];
    let options2 = {a: "hi-tech", b: "durable", c: "fast"};
    return(
        <>
            <Product title="Laptop" price={1000} features={options}/>
            <Product title="Mobile" price={450} features2={options2}/>
            <Product title="Headphones" price={100} features={["hi-tech"]}/>
            <Product title="Headphones" features2={{a: "hi-tech", b: "durable", c: "fast"}}/>
        </>
    );  
}

export default ProductTab;