import dbConnect from '@/__database/dbConnect.js';
import Client from '@/__models/client.js'
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    await dbConnect();

    const client = await Client.findOne({ email });
    if (client) {
      const passwordMatch = await bcrypt.compareSync(password, client.password);
      if (password == client.password) {
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