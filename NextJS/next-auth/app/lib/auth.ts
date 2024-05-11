import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'email' },
                password: { label: 'password', type: 'password', placeholder: 'password'},
            },
            // when button clicked control reaches here
            async authorize(credentials: any) {
                // const username = credentials.username;
                // const password = credentials.password;

                // do validation here like this
                // const user = await prisma.user.findOne({
                //     where: {
                //         email: username,
                //         password: password
                //     }
                // })
                // if(!user)
                //     return null;

                console.log(credentials);

                return {
                    id: "user1",
                    name: "thor",
                    email: "@gmail.com"
                };
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }), 

        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],

    secret: process.env.NEXTAUTH_SECRET, 
    callbacks: {
        // jwt: ({ token, user }) => {
        //     console.log(token);
        //     token.userId = 4;
        //     return token;
        // }, 

        session: ({ session, token, user }: any) => {
            console.log(session);
            if(session && session.user)
                session.user.id = token.userId;     // OR token.sub

            return session
        },

        // signIn: ({ user }) => {
        //     if(user.email == "random@gmil.com") {
        //         return false;
        //     }
        //     return true;
        // }
    }
}