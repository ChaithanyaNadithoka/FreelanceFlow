import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/user_controller.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

export default router;