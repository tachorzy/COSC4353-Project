import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '../../__database/dbConnect'
import Client from '../../__models/client'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // credentials: {
      //   username: {label: "Username", type: "text", placeholder: "Test" },
      //   password: { label: "Password", type: "password" }
      // }, 
      async authorize(credentials, req){
        dbConnect().catch(err => console.log(err));
        const userFound = await clientSchema.findOne({
          email: credentials.email
        })
        
        if(userFound){

        }
      }
    })    
  ]
})