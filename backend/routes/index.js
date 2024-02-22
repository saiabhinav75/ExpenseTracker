const express = require('express')
const router = express.Router()
const ExpenseRouter = require('./Expense')
const userRouter = require('./user')


router.use('/expense',ExpenseRouter)
router.use('/user',userRouter)

module.exports= router;