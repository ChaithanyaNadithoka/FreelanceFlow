import Income from '../models/income_model.js';

export const addIncome = async (req, res) => {
    const { name, amount, status, source } = req.body;

    // Validate required fields
    if (!name || !amount || !status || !source) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const income = new Income({
            userId: req.user.uid,
            name,
            amount,
            status,
            source
        });

        await income.save();
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({ message: 'Error adding income' });
    }
};

export const getIncome = async (req, res) => {
    try {
        const income = await Income.find({ userId: req.user.uid });
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching income' });
    }
};
