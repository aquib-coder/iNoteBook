const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'This is my longest secret key'
//creates user-dont require authentication
router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter atleast 5 characters').isLength({min:5})
],async(req,res)=> { 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error:"User already exists!!!"});
        }
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password,salt);
 user = await User.create({
    name:req.body.name,
    password: secPass,
    email:req.body.email 
 });
 const data = {
    user:{id:user.id}
 };
 var token = jwt.sign(data, JWT_SECRET);
 return res.json(token);
}catch(error) {
    res.status(500).send("some error occured");
}
   
});

module.exports = router;