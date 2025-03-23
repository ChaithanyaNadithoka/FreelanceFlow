import User from '../models/user_model.js'; // Import the User model

// Controller function to create a user
export const create_user = async (req, res) => {
    try {
        console.log("hi"); // Debug message to check if function is called

        const { full_name, email, tax_id } = req.body;

        console.log("Preparing to create user:", full_name, email);

        // Validate input
        if (!full_name || !email) {
            return res.status(400).json({ message: 'Full name and email are required' });
        }

        // Create a new user
        const newUser = new User({ full_name, email, tax_id });

        console.log("Saving user to MongoDB...");

        // Save user to MongoDB
        await newUser.save();

        console.log("User saved successfully!");

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("❌ Error creating user:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
