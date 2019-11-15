const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");
const app = express();
const port = process.env.PORT || 4001;
let counter = contacts.length;
app.use(express.static("public"));
app.use(bodyParser.json());
//--------------------------------------------
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.get("/comments/:id", (req, res) => {
    // res.json(comments._id == (req.params._id));
    const id = req.params.id; 
    const match = comments.find(comments => comments._id == Number(id));
    console.log(match);
    res.json(match);
});
app.post("/comments", (req, res) => {
    comments.push({
        _id: uuid(),
        postId: 1,
        ...req.body
    });
});
//-----------------------------------------------
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

});
//------------------------------------------------
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
