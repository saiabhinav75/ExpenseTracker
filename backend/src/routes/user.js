const express = require('express')
const router = express.Router()

const { User,Expense } = require('../schema')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../../config')


router.post("/", async (req,res) =>{
    const username = req.body.username;
    const password= req.body.password;
    const name= req.body.name;

    if(username==undefined || password==undefined || name==undefined){
        console.log(username,password,name)
        return res.status(411).json({
            message:"Incorrect credentials"
        })
    }
    const existingUser = await User.findOne({
        username : username
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken"
        })
    }
    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        Name:req.body.name,
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    },JWT_SECRET);
    return res.json({
        message: "User created successfully",
        token : token
    })
})


router.post("/signin", async (req,res) => {
    const {username,password} = req.body
    if(!username || !password ){
        return res.status(411).json({
            message:"Incorrect credentials"
        })
    }
    const existingUser = await User.findOne({
        username:req.body.username,
        password:req.body.password 
    })

    if(existingUser==null){
        return res.status(411).json({
            message : "Invalid username / password"
        })
    }

    // User Exist
    console.log(existingUser)
    const userId = existingUser._id
    const token = jwt.sign({
        userId
    },JWT_SECRET);
    return res.json({
        message : "User Successfully Loggedin",
        token : token
    })
})



// router.get("/bulk", async (req,res) =>{
//     const filter = req.query.filter || "";
    
//     // $or ?
//     const users = await User.find({
//         $or : [{
//             firstName : {
//                 "$regex" : filter
//             }
//         },
//             {
//                 lastName : {
//                     "$regex" :filter
//                 }
//             }
//     ]
//     })
//     res.json({
//         user : users.map(user =>({
//             username : user.username,
//             Name : user.Name,
//             _id : user._id
//         }))
//     })
// })



module.exports = router;