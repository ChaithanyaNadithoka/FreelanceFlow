import Income from '../models/income_model.js';

export const addIncome = async (req, res) => {
    const { client_name, amount, status, date, user_id } = req.body;

    // Validate required fields

    try {
        const income = new Income({
            client_name: client_name,
            amount: amount,
            status: status,
            date: date,
            user_id: user_id
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
