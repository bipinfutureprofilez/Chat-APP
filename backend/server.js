require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

const connectDB = require('./db/connect')

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello world...');
})

// router middleware
const authRouter = require('./routes/auth')
const messageRouter = require('./routes/messages')
const usersRouter = require('./routes/user')
const authentication = require('./middleware/authentication')

app.use('/api/auth', authRouter)
app.use('/api/message', authentication, messageRouter)
app.use("/api/users", authentication, usersRouter);

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

