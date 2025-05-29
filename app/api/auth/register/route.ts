import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        const user = await prisma.user.create({ data: { email, password } });
        return NextResponse.json(user);
    } catch {
        return NextResponse.json({ error: "Failed to register" }, { status: 500 });
    }
}   