import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // ou "database" si tu veux gérer des utilisateurs persistants
  },
  pages: {
    signIn: "/auth/login", // ou retire cette ligne si tu veux garder la page par défaut
  },
};
