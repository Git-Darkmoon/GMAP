import { connection } from "@/utils/database"
import { NextResponse } from "next/server"

export async function GET(request: Response) {
  const response = await connection.query("SELECT * FROM maratonistas")

  return new Response(
    JSON.stringify({ message: "Getting Users", data: response.rows[0] })
  )
}

export async function POST(request: NextResponse) {
  const body = await request.json()

  const {
    student_id,
    first_name,
    last_name,
    email,
    password,
    team,
    course_check,
  } = body

  try {
    const insertQuery =
      "INSERT INTO maratonistas (student_id, first_name, last_name, email, password, team, course_check) VALUES ($1, $2, $3, $4, $5, $6, $7)"

    const values = [
      student_id,
      first_name,
      last_name,
      email,
      password,
      team,
      course_check,
    ]

    const response = await connection.query(insertQuery, values)

    return NextResponse.json({
      message: "User created successfully",
      data: response.rows[0],
    })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error inserting data" }),
      {
        status: 500,
      }
    )
  }
}

export async function PUT(request: Response) {
  return new Response(JSON.stringify({ message: "Updating Users" }))
}
export async function DELETE(request: Response) {
  return new Response(JSON.stringify({ message: "Deleting Users" }))
}
