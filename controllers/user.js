const User = require('../models/User');

async function getWithDirectoryId(req, res) {
    const letter = req.params.firstLetter.toUpperCase();

    try {
        const users = await User.find({ firstName: new RegExp(`^${letter}`, 'i') });
        if (!users.length) {
            return res.status(404).json({ err: 'No users found starting with this letter' });
        }
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ err: 'Server error' });
    }
}

async function createUser(req, res) {
    const { firstName, lastName, contact, address } = req.body;

    try {
        const user = new User({
            firstName,
            lastName,
            contact,
            address,
        });

        await user.save(); 

        res.status(201).json(user); 
    } catch (err) {
        return res.status(500).json({ error: 'Failed to create user' });
    }
}

async function deleteUser(req, res) {
    const firstName = req.params.firstName;

    try {
        const user = await User.findOneAndDelete({ firstName: firstName });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: `User with first name ${firstName} deleted successfully` });
    } catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { getWithDirectoryId,createUser,deleteUser };
