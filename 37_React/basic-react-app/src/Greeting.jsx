function Greeting({username, textColor}){
    let styles = {color : textColor};
    return(
        <>
            <h1>Hi, <span style={styles}>{username}</span></h1>  
        </>
    );
}

export default Greeting;