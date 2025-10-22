    // Use cmd "node <script name>" to execute them
    let n=5;
    for(let i=1; i<=n; i++){
        console.log("Hello", i);
    }

    // if any extra arguments are passed while launching the process they will be printed here in an array
    console.log(process.argv); 

    let args = process.argv;
    // skipping first 2 vals (one is executable path for node and other is cwd)
    for(let i=2; i<args.length;i++){
        console.log(args[i]);
    }

    const math = require("./02_math.js");
    console.log(math);

    console.log(math.PI);
    console.log(math.g);
    console.log(math.sum(2,2));
    console.log(math.diff(2,2));
    console.log(math.mul(2,2));
    console.log(math.div(2,2));

    // Export data from entire directory
    const fruits = require("./03_Fruits");
    console.log(fruits);    