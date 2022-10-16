const express = require('express')
const dotenv = require('dotenv').config();

const PORT = 5000;

const app = express()

app.use('/api/users', require('./routes/userRoutes'))
app.listen(PORT, () => console.log(`server started at ${PORT}`))

