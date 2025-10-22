// this file combines all exports from the files in this folder
const apple = require("./apple.js");
const banana = require("./banana.js");
const orange = require("./orange.js");

let fruits = [apple, banana, orange];

module.exports = fruits;