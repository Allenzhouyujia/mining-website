import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.HEYGEN_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "HeyGen API key not configured" }, { status: 500 });
  }

  const response = await fetch("https://api.heygen.com/v1/streaming.create_token", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data.message || "Failed to get token" }, { status: response.status });
  }

  return NextResponse.json({ token: data.data?.token });
}
