import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma as db } from "@/db";
import { compare } from "bcrypt";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Signin",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jhondoe@example.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter your password",
        },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null; // returning null means the credentials were incorrect
        }

        try {
          // look up the user in the db
          const user = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          // not found in the db
          if (!user) {
            return null;
          }

          const isPassValid = await compare(
            credentials.password,
            user.password_hash,
          );
          if (!isPassValid) {
            return null;
          }

          // this will be what goes into the jwt token by next-auth
          return {
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
          };
        } catch (error) {
          console.log("Error authorization: ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as User;

        return {
          ...token,
          id: u.id,
          firstname: u.firstname,
          lastname: u.lastname,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          firstname: token.firstname,
          lastname: token.lastname,
        },
      };
    },
  },
};
