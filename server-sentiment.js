//Requires Express
const express = require("express");
const Sentiment = require("sentiment");

//Create Express server
let app = express();

let addition = function(num1,num2) {
    let result = num1 + num2;
    return result;
}

var sentiment = new Sentiment();

let sentimentAnalysis = function(text) {
    let result = sentiment.analyze(text);
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

app.get("/calc",function(request,response) {
    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    let addResult = addition(num1,num2);
    response.send("Calculator Result: " + addResult);
})

app.get("/analyze",function(request,response) {
    let text = request.query.text;
    let result = sentimentAnalysis(text);
    response.send(result)
})