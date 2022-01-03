import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import commentRoutes from './routes/comments.js'

const PORT = 5000;
const app = express();



app.use(express.json()) //to read json
app.use(express.urlencoded())
app.use(cors());

app.use('/comments', commentRoutes )


mongoose.connect('mongodb://mongodb:27017/blog', function (err) {
    if (err) throw err;
    console.log("connected to db")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


//then make models/comments.js