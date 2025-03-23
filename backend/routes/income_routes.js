import express from 'express';
import { addIncome, getIncome } from '../controllers/income_controller.js';
import authMiddleware from '../middleware/auth.js'; // Assuming you have this

const router = express.Router();

router.post('/add', authMiddleware, addIncome);
router.get('/', authMiddleware, getIncome);

export default router;