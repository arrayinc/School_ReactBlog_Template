import express from 'express';

import { getComments, createComment} from '../controllers/comments.js';

const router = express.Router();
//import auth from "../middleware/auth.js";

router.get('/', getComments);
router.post('/', createComment);

export default router;