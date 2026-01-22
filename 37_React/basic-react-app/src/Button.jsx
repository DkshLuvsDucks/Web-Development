function handleClick(event){
    console.log("Button Was Clicked!!!");
    console.log(event);
}

function handleMouseOver(){
    console.log("Mouse over para...");
}

function handleDbClick(){
    console.log("Double Click...");
}

export default function Button (){
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas illo, reprehenderit ullam officiis mollitia eligendi! Ut velit possimus, earum perspiciatis eligendi assumenda consequuntur corrupti ea nam est dolorem laudantium.</p>
            <button onDoubleClick={handleDbClick}>Double Click Me!</button>
        </div>
    );
};