const express = require('express');
const router = express.Router();
const contacts = require('../data/contacts');
const contactCounter = contacts.length;

router.get('/contacts', (req, res) => {
    res.json(contacts);
});
//----
router.get("/contacts/:id", (req, res) => {
    // res.json(comments._id == (req.params._id));
    const id = req.params.id; 
    const comment = comments.find(comment => comment._id === Number(id));
    
    res.json(comment);
});
//----
router.post("/contacts", (req, res) => {
    comments.push({
        _id: contactCounter + 1,
        body: req.body.body,
        postId: 1
    })
    res.json(contacts)
});

module.exports = router