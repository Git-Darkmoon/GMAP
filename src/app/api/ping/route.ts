import { NextResponse } from "next/server"

import { connection } from "@/utils/database"

export async function GET(res: NextResponse) {
  const response = await connection.query("SELECT * FROM maratonistas")

  console.log(response)

  return NextResponse.json({ message: "pong", data: response.rows[0] })
}
