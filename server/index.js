import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

import commentRoutes from './routes/comments.js'

const app = express();
dotenv.config();


app.use(express.json()) //to read json
app.use(express.urlencoded())
app.use(cors());

app.use('/comments', commentRoutes )

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e));