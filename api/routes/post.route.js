import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
// import { create } from '../controllers/post.controller.js';
import { getposts, create, deletepost} from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', getposts);
router.delete('/deletepost/:postId/:userId',verifyToken,deletepost);

export default router;
