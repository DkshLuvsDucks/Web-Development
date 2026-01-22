// import { useState } from "react";
import { useFormik } from "formik";

// USING FORMIK FOR VALIDATIONS

export default function CommentsForm({ addNewComment }) {

    // FORM STATE NOW HANDLED BY FORMIK
    /*
    let [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: 5 
    });
    */

    // REPLACED BY formik.handleChange
    /*
    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };
    */

    // REPLACED BY formik.handleSubmit
    /*
    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            comment: "",
            rating: 5 
        });
    };
    */

    const formik = useFormik({
        initialValues: {
            username: "",
            comment: "",
            rating: 5
        },

        validate: (values) => {
            const errors = {};

            if (!values.username) {
                errors.username = "Username is required";
            }

            if (!values.comment) {
                errors.comment = "Comment cannot be empty";
            } else if (values.comment.length < 5) {
                errors.comment = "Comment must be at least 5 characters";
            }

            if (!values.rating) {
                errors.rating = "Rating is required";
            } else if (values.rating < 1 || values.rating > 5) {
                errors.rating = "Rating must be between 1 and 5";
            }

            return errors;
        },

        onSubmit: (values, { resetForm }) => {
            addNewComment(values);
            resetForm();
        }
    });

    return (
        <>
            <h2>Leave a Comment!</h2>

            {/* onSubmit now handled by Formik */}
            <form onSubmit={formik.handleSubmit}>

                {/* USERNAME */}
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.username && formik.errors.username && (
                    <p style={{ color: "red" }}>{formik.errors.username}</p>
                )}

                <br /><br />

                {/* COMMENT */}
                <label htmlFor="comment">Comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    placeholder="Add few remarks"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.comment && formik.errors.comment && (
                    <p style={{ color: "red" }}>{formik.errors.comment}</p>
                )}

                <br /><br />

                {/* RATING */}
                <label htmlFor="rating">Rating</label>
                <input
                    id="rating"
                    name="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.rating && formik.errors.rating && (
                    <p style={{ color: "red" }}>{formik.errors.rating}</p>
                )}

                <br /><br />

                <button type="submit" disabled={!formik.isValid}>
                    Add Comment
                </button>

            </form>
        </>
    );
}
