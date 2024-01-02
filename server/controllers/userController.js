const successfunction = require("../utils/responsehandler").successfunction;
const errorfunction = require("../utils/responsehandler").errorfunction;
const users = require("../db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registereduservalidation = require("../validation/registervalid.js").registereduservalidation;
async function register(req, res) {
    try {
        console.log(req.body);
        let {name,email,place,contact,password } = req.body;
        let validationResult= await registereduservalidation(req.body);
        console.log("Validation Result...", validationResult);   
        // let userPassword = generateRandomPassword(5);
        // let salt = bcrypt.genSaltSync(10);
        // let hashed_password = bcrypt.hashSync(userPassword,salt);    
        if(validationResult.isValid){
            let result = await users.create({ name,email,place,contact,deleted:false});
            if(result){
            let response = successfunction({statusCode:200,data:result,message:"Registered Successfully"});
            return res.status(200).send(response);
            }else{
            let response=errorfunction({statusCode:500,message:"Not Registered"});
            return res.status(500).send(response);
            }
        }else{
            let response=errorfunction({statusCode:500,message:"Validation failed"})
            response.errors=validationResult.errors;
            return res.status(200).send(response);
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error");
    }
}
module.exports = {
    register,
    
}