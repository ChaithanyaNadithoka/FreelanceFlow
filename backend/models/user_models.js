import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String },
    phone: { type: String },
    address: { type: String },
    registeredAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
