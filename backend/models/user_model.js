import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    user_id: { type: String },
    tax_id: { type: String },
});
userSchema.pre('save', async function (next) {
    if (!this.user_id) {
        const lastUser = await mongoose.model('User').findOne().sort({ user_id: -1 });
        this.user_id = lastUser ? lastUser.user_id + 1 : 0; // Start from 0
    }
    next();
});

export default mongoose.model('User', userSchema);
