import dbConnect from '@/lib/dbConnect';
import User from '@/lib/models/User';

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    await dbConnect();

    const user = await User.findOne({ email });
    if (user) {
      //const passwordMatch = await user.comparePassword(password);
      if (password == user.password) {
        res.status(200).json({ message: 'Email and password correct' });
      } else {
        res.status(401).json({ message: 'Incorrect password' });
      }
    } else {
      res.status(404).json({ message: 'Email not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}