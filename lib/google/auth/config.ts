import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/lib/prisma";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "database", // ou "database" si tu veux gérer des utilisateurs persistants
  },
  pages: {
    signIn: "/auth/login", // ou retire cette ligne si tu veux garder la page par défaut
  },
};
