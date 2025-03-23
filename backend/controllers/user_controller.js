import User from '../models/user_model.js'; // Ensure this file exists

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.user.uid });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            uid: user.uid,
            email: user.email,
            name: user.name || 'Anonymous',
            phone: user.phone || 'Not provided',
            address: user.address || 'Not provided',
            registeredAt: user.registeredAt
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile' });
    }
};

export const updateUserProfile = async (req, res) => {
    const { name, phone, address } = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { uid: req.user.uid },
            { name, phone, address },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            message: 'Profile updated successfully',
            user
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile' });
    }
};
