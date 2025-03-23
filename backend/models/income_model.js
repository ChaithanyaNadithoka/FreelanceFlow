import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
    client_name: { type: String, required: true },
    user_id: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'received'], required: true },
    date: { type: Date, default: Date.now },
    tax: { type: Number, required: true }
});

export default mongoose.model('Income', incomeSchema);
