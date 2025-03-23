import express from 'express';
import { create_user } from '../controllers/user_controller.js'; // Import the controller function

const router = express.Router();

// GET route (Make sure create_user is a GET handler or change method to POST)
router.post('/add', create_user);


export default router;
