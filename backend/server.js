const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/erroeMiddleware')
const port =process.env.Port  ||  5000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes')) 

app.use(errorHandler)

app.listen(port, () =>console.log(`Server has started on the port ${port}`))