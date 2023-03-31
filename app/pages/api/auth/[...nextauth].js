import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../utils/mongodb';
import bcrypt from 'bcrypt';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',

      // The credentials to validate against
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john@example.com' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const client = await connectToDatabase();
        const users = await client.db().collection('users');
        const user = await users.findOne({ email: credentials.email });

        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          // Any object returned here will be saved in the JSON Web Token
          return { id: user._id, email: user.email };
        }

        // If you return null or false then the credentials will be rejected
        return null;
      },
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_URI,
});