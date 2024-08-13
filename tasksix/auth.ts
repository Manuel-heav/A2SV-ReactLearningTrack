import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest, NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export async function GET(request: NextRequest) {
  const response = await handler(request as any, NextResponse);
  return response;
}

export async function POST(request: NextRequest) {
  const response = await handler(request as any, NextResponse);
  return response;
}

export { handler as default };
