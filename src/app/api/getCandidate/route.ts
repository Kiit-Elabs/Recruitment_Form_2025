
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await request.json()
}