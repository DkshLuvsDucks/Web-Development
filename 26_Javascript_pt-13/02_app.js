const url = "https://icanhazdadjoke.com/";
const p = document.querySelector("p");

async function getJokes() {
    try{
        // Sending Headers in API req
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        p.innerText=res.data.joke;
        console.log(res);
    } catch (err){
        p.innerText=`ERROR - ${err}`;
    }
}

getJokes();