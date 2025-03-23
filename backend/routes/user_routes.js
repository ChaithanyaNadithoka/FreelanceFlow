import express from 'express';

const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.json({ message: "User API is working!" });
});

export default router;
