import { connection } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export async function GET(res: NextResponse) {
  const response = await connection.query("SELECT * FROM maratonistas")

  return NextResponse.json({ message: "Getting Users", data: response.rows[0] })
}

export async function POST(req: NextRequest, res: NextResponse) {
  const query = await connection.query(
    "INSERT INTO maratonistas (student_id,first_name, last_name, email, password, team, asignature_check) VALUES ($1, $2, $3, $4, $5, $6)"
  )

  const values = [
    20201034098,
    "Andres",
    "Velasquez",
    "namayorgav@outlook.com",
    "Pizza_011",
    1,
    "programacion basica",
  ]

  const response = await connection.query(query, values)

  console.log(response)

  return NextResponse.json({ message: "Creating Users" })
}

export async function PUT(res: NextResponse) {
  return NextResponse.json({ message: "Updating Users" })
}
export async function DELETE(res: NextResponse) {
  return NextResponse.json({ message: "Deleting Users" })
}
