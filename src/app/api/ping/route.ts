import { connection } from "@/utils/database"

export async function GET(request: Response) {
  const response = await connection.query("SELECT NOW ()")

  console.log(response)

  return new Response(
    JSON.stringify({ message: "pong", time: response.rows[0].now })
  )
}
