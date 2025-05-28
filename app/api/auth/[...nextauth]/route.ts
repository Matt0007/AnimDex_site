import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import { authConfig } from "@/auth/config";
const handler = NextAuth(authConfig as AuthOptions);
export { handler as GET, handler as POST };
