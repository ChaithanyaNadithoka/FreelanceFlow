import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'received'], required: true },
    source: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Income', incomeSchema);
