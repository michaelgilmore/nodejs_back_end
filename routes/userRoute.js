import express from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';
import { verifyToken} from '../util/auth.js';

const router = express.Router();

router.post('/', createUser);
router.get('/all', verifyToken, getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;