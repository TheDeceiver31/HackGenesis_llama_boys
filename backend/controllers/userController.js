
const { data } = require('react-router-dom');
const User = require('../models/UserModel');
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await User.create({ username: name, email: email, password: password });
        return res.status(200).json({ message: 'User Created' ,data:req.body});
    } catch (error) {
        return res.status(400).json({ error: 'Error Creating User' })
    }

}




module.exports = signup;