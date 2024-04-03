require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello world...');
})

// router middleware
const authRouter = require('./routes/auth')

app.use('/auth', authRouter)

// Error & Not found middleware
const errorHanderMiddleware = require('./middleware/errorHandlerMiddleware')
const notFound = require('./middleware/notFound')

app.use(errorHanderMiddleware)
app.use(notFound)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()

