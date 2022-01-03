import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    name: String,
    index: String,
    comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;