const express = require('express')
const router = express.Router()
const {User,Expenses} = require('../src/schema');


const {authMiddleware} = require('../middleware/AuthMiddle')

router.post('/addExpense',authMiddleware,async (req,res)=>{
    const userId = req.userId;
    const {title,amount,category,descr } = req.body;
    const expense = new Expenses({
        userId,
        title:title,
        amount:amount,
        category:category,
        description:descr
    })
    await expense.save()
    return res.json({message:"Expense has been Added"})

})

router.get('/allExpenses',authMiddleware,async (req,res)=>{
    const userId = req.userId;
    // console.log(userId)
    const data = await Expenses.find({userId});
    console.log(data);
    return res.json(data)
})


router.put('/update',async (req,res)=>{
    const {title,amount,category,descr,expenseId} = req.body;
    const expense = await Expenses.updateOne({
        _id:expenseId,
        title:title,
        amount:amount,
        category:category,
        description:descr
    })
    return res.json(expense)
})

router.delete('/deleteEx',async(req,res)=>{
    const {expenseId} = req.body;
    const expense = await Expenses.deleteOne({_id:expenseId})
    res.send("Expense Deleted")
})

module.exports = router;

