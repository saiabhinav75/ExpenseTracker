const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/')
.then(()=>console.log(mongoose.connection.readyState)) //1 (Connect successful)