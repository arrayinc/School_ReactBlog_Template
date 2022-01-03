import Comment from '../models/comments.js';

export const getComments = async (req, res) => { 
    try {
        const comment = await Comment.find();
        res.status(200).json(comment);
    } catch (e) {
        res.status(404).json({ message: e });
    }
}

export const createComment = async (req, res) => {
    const comment = req.body;

   const newComment = new Comment( {...comment})
    try {
       await newComment.save();

        res.status(201).json(newComment);
    } catch (e) {
        res.status(409).json({ message: e });
    }
}

//then routes/comments.js