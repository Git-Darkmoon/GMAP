import { connection } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const response = await connection.query("SELECT NOW ()")

  return NextResponse.json({
    message: "pong",
    isDB_connected: response.rows[0].now,
  })
}
