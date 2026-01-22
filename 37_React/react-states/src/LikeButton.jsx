import { useState } from "react";

export default function LikeButton(){
    // you can pass a init function reference to initiate the value as well
    let [isLiked, setIsLiked] = useState(false);
    
    let toggleLike = () => {
        setIsLiked(!isLiked);
        console.log(isLiked);
    }

    let styles = {color: "red"};

    return(
        <>
            <p onClick={toggleLike}>
                Like Button ({isLiked.toString()}) &nbsp;
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={styles}></i>
                ) :
                (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </>
    );
};