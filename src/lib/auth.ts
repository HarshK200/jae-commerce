import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/db";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Signin",
      credentials: {
        firstname: {
          label: "First Name",
          type: "text",
          placeholder: "firstname",
        },
        lastname: {
          label: "Last Name",
          type: "text",
          placeholder: "lastname",
        },
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
        if (
          !credentials?.email ||
          !credentials.password ||
          !credentials.firstname ||
          !credentials.lastname
        ) {
          return null; // returning null means the credentials were incorrect
        }

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

        const isPassValid = await compare(credentials.password, user.password);

        if (
          !isPassValid ||
          credentials.firstname !== user.firstName ||
          credentials.lastname !== user.lastName
        ) {
          return null;
        }

        // this will be what goes into the jwt by next-auth
        return {
          id: user.id,
          email: user.email,
          firstname: user.firstName,
          lastname: user.lastName,
        };
      },
    }),
  ],
};
