import express from 'express';
import { addIncome, getIncome } from '../controllers/income_controller.js';

const income_router = express.Router();

income_router.post('/add', addIncome);
// income_router.get('/', getIncome);

export default income_router;