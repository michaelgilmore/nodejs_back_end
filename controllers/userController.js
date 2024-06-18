import User from '../models/user.js';

export const createUser = async (req, res) => {
    //console.log('createUser');
    try {
        const user = new User(req.body);
        const {email} = user;
        const existingUser = await User.findOne({
            email
        });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const savedUser = await user.save();
        return res.status(201).json(savedUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user
            = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate (id, req.body , { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


