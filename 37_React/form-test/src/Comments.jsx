import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comments(){
    let [comments, setComments] = useState([{
        username: "duzz",
        comment: "great work!",
        rating: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => {
            return [...currComments, comment];
        });
    };

    return (
        <>
            <h2>All Comments</h2>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                <span>{comment.comment}</span>
                &nbsp;
                <span>- (rating = {comment.rating})</span>
                &nbsp;
                <p>~ @{comment.username}</p>
            </div>
            ))}
            
            <br></br><br></br>
            
            <hr/>
            <CommentsForm addNewComment={addNewComment}/>
        </>
    );
}