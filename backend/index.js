const express = require('express')
const Router = require('./src/routes/index.js')
const app = express()
const PORT = 3500
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api",Router)
app.listen(PORT)