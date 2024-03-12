const mongoose = require('mongoose');
// const currencyToSymbolMap = require('currency-symbol-map/map');
// const countryToCurrency = require('country-to-currency')
require('dotenv').config()
const uri = process.env.MONGO_URI;
// console.log(uri)
mongoose.connect(uri)
.then((res)=>console.log('MongoDB Connected'))
.catch((err)=>console.log(err))

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required:true,
        // match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    },
    Name:{
        type:String,
        required: true,
    },
    Transactions:[],
})


const expenseSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId , 
        ref:"User",
        required:true
    },
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Food', 'Travel', 'Housing', 'Entertainment', 'Utilities', 'Others'],
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  }
});


const User = mongoose.model('User',UserSchema)
const Expenses = mongoose.model('Expense',expenseSchema)

module.exports = {User,Expenses}