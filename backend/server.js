require('express-async-errors')
require('dotenv').config()

const helmet = require('helmet')
const cors = require('cors')
const {rateLimit } = require('express-rate-limit')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(helmet());
app.use(cors());
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

