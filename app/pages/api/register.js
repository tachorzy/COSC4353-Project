import bcrypt from 'bcrypt';
import User from '../models/User';

export default async function handler(req, res) {
    const body = req.body;
    try {
        const user = await Users.findOne({ email: body.email });
        if (user) {
            res.status(200).json({ message: 'already registered' });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(body.password, salt);
        const newUser = new Users({ name: body.name, email: body.email, password: body.password });
        await newUser.save();
        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
}