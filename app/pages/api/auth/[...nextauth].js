import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import bcrypt from 'bcryptjs'
import { User } from "../../../lib/models/User"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../lib/mongodb"

const signinUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("Please enter password")
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error("Password Incorrect.")
  }
  return user;
}

module.exports = NextAuth({
  providers: [
    // Email & Password
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConnect();

        // Find user with the email
        const user = await User.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          throw new Error("Email is not registered");
        }

        // Check hashed password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials.password,
          user.hashedPassword
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});