function Desc() {
    let name = "Daksh";
    return (
        <>
            <h2>This is the Description!</h2>
            <p>2 * 2 = {2*2}</p>
            {/* use  paranthesis to write pure js */}
            <p>Hi, {name.toUpperCase()}</p>
        </>
    );
}

export default Desc;