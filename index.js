const express = require("express");
var bodyParser = require("body-parser");
const commentsRouter = require("./routes/comments")
//const contacts = require("./data/contacts");
//const vehicles = require("./data/vehicles");
//const commentsRouter = require('./routes/comments');
//const products = require("./data/products");
const app = express();
const port = process.env.PORT || 4001;
//let counter = contacts.length;
app.use(express.static("public"));
app.use(bodyParser.json());

app.use(commentsRouter);
//-----------------------------------------------
/*

app.get('/contacts', (req, res) => {
    res.json(contacts);
});
app.get("/contacts/:id", (req, res) => {
    //res.json(contacts._id == (req.params._id));
    const id = req.params.id; 
    const match = contacts.find(contacts => contacts._id == Number(id));
    console.log(match);
    res.json(match);
});
app.post("/contacts", (req, res) => {

});
//-----------------------------------------
app.get('/vehicles', (req, res) => {
    res.json(vehicles);
});
app.get("/vehicles/:id", (req, res) => {
    //res.json(vehicles._id == (req.params._id));
    const id = req.params.id; 
    const match = vehicles.find(vehicles => vehicles._id == Number(id));
    console.log(match);
    res.json(match);
});
app.post("/vehicles", (req, res) => {

});
//-----------------------------------------
app.get('/products', (req, res) => {
    res.json(products);
});
app.get("/products/:id", (req, res) => {
    //res.json(products._id == (req.params._id));
    const id = req.params.id; 
    const match = products.find(products => products._id == Number(id));
    console.log(match);
    res.json(match);
});
app.post("/products", (req, res) => {

});  */
//------------------------------------------------
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
