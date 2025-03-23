export const calculateTax = async (req, res) => {
    try {
        const { income, expenses } = req.body;
        const taxableIncome = income - expenses;
        const taxRate = taxableIncome > 50000 ? 0.3 : 0.2; // Example rule
        const taxOwed = taxableIncome * taxRate;

        res.json({ taxableIncome, taxRate, taxOwed });
    } catch (error) {
        res.status(500).json({ message: 'Error calculating tax' });
    }
};
