const express = require('express');
const router = express.Router();
router.get('/',(req,res)=> { 
    obj = {
        name:'aquib',
        email:'atifNotes@gmail.com'
    };
    res.json(obj);
});

module.exports = router;