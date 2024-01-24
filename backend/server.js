const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/erroeMiddleware')
const connectDB = require('./config/db')
const port =process.env.Port  ||  5000;

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes')) 
app.use('/api/users', require('./routes/userRoute'))

app.use(errorHandler)

app.listen(port, () =>console.log(`Server has started on the port ${port}`))