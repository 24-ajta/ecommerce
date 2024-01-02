const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
// const accessControl = require('../utils/access-control').accessControl;

// const setAccesControl = (access_type)=>{
//     return (req,res,next)=>{
//         accessControl(access_type,req,res,next)
//     }
// };



//employee api's
router.post('/register',userController.register);

module.exports = router;