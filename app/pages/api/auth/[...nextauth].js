import NextAuth from 'next-auth'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../__database/mongodb"
import Client from '@/__models/client.js'
import dbConnect from '@/__database/dbConnect'
import bcrypt from 'bcryptjs';

module.exports = NextAuth({
  name: 'Credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
  providers: [
    // Email & Password
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        console.log(email, password);

        const user = await Client.findOne({ email });
        
        if (!user) {
          throw new Error("Email not found");
        }
        
        // const isPasswordMatched = await bcrypt.compare(password, user.password);
        const encryptedUserPassword = bcrypt.hashSync(password);    

        console.log(`password: ${password} and encryptedUserPassword ${encryptedUserPassword} and encrypted password in the databse ${user.password}`)

        if (encryptedUserPassword != user.password) {
          throw new Error("Incorrect Password");
        }
        console.log(user);
        return user;
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});