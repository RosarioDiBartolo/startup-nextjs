
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET, // A secret key for encryption
  pages: {
    signIn: "/signin", // Custom sign-in page
    signUp: "/signup"
  }
}

export default authOptions
