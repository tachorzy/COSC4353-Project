import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import bcrypt from 'bcryptjs'
import { User } from "./lib/models/User"
import CredentialsProvider from "next-auth/providers/credentials"

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

export default NextAuth({
  adapter: MongoDBAdapter(process.env.MONGODB_URI),
  providers: [
    // OAuth authentication providers...
    // Passwordless / email sign in
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email })
        if (!user) {
          throw new Error("You haven't registered yet")
        }
        if (user) {
          return signinUser({ password, user })
        }
      },
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
})
