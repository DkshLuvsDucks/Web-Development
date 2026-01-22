import { useState } from "react";

export default function Form(){
    // This approach is TEDIOUS!!
    // let [fullName, setFullName] = useState("");
    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    }); // Make an obj containing all form data instead

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Test Form</h2>
            <label htmlFor="fName">
                Full Name 
            </label>
            <input
                id="fName"
                name="fullName"
                placeholder="Enter Your Full Name" 
                type="text" 
                value={formData.fullName}
                onChange={handleInputChange}
            />

            <br></br><br></br>

            <label htmlFor="uName">
                Username 
            </label>
            <input
                id="uName" 
                name="username"
                placeholder="Enter Username" 
                type="text" 
                value={formData.username}
                onChange={handleInputChange}
            />

            <br></br><br></br>

            <label htmlFor="pass">
                Password 
            </label>
            <input
                id="pass" 
                name="password"
                placeholder="Enter password" 
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
            />

            <br></br><br></br>

            <button>Submit</button>

            <br></br><br></br>
            
        </form>
    );
}