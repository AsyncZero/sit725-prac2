//Requires Express
const express = require("express");

//Create Express server
let app = express();

//Create addition function
let addition = function(num1,num2) {
    let result = num1 + num2;
    return result;
}

//Create static web page
app.use(express.static("public"));

//Starts server on port listed (3000)
app.listen(3000);

//Create root endpoint
app.get("/",function(request,response) {
    response.send("Prac 2 - Hello World");
})

//Create Test endpoint
app.get("/test",function(request,response) {
    response.send("Test Endpoint");
})

//Create Calc endpoint
app.get("/calc",function(request,response) {
    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    let addResult = addition(num1,num2);
    response.send("Calculator Result: " + addResult);
})