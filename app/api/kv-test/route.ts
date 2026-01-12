import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
    await kv.set("test:key", "hello");
    const value = await kv.get("test:key");

    return NextResponse.json({ value });
}
