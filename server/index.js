const express = require('express')
const cardRouter = require('./src/routes/card')
const userRouter = require('./src/routes/user')
const authRouter = require('./src/routes/auth')
const app = express()
const port = 3000
const cors = require("cors")

app.use(cors());
app.use(express.json())

app.use('/cards', cardRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});