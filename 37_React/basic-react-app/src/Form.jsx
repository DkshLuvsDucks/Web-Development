function handleFormSubmit(event){
    event.preventDefault();
    // prevents auto reload
    console.log("Form was submitted...");
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write smth..."/>
            <button>Submit</button>
        </form>
    );
};

