

import express from 'express';
import colors from 'colors'
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config();
import dbConnection from './config/db.js';
import authRoute from './routes/authRoute.js'


dbConnection();


const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1/auth',authRoute)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`.bgCyan);
})
