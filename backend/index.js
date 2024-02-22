const express = require('express')
const Router = require('./routes/index')
const app = express()
const PORT = 3500


app.use(express.json())
app.use("/api",Router)
app.listen(PORT)