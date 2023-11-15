import { connection } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const response = await connection.query("SELECT * FROM maratonistas")

  return NextResponse.json({ message: "Getting Users", data: response.rows })
}

export async function POST(request: NextRequest) {
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
