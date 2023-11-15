import { connection } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  try {
    const singleGetQuery = "SELECT * FROM maratonistas WHERE student_id = $1"
    const singleQueryValue = [Number(params.student_id)]
    const response = await connection.query(singleGetQuery, singleQueryValue)

    if (response.rows.length === 0)
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      })

    return NextResponse.json({
      message: `User found in the Database`,
      data: response.rows[0],
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({
      message: `Error fetching user: ${params.student_id}`,
    })
  }
}

export async function PUT(request: NextRequest, { params }: any) {
  const body = await request.json()

  const { first_name, last_name, email, password, team, course_check } = body

  try {
    const singleGetQuery =
      "UPDATE maratonistas SET first_name = $1, last_name = $2, email = $3, password = $4, team = $5, course_check = $6 WHERE student_id = $7 RETURNING *"
    const studentToModify = [params.student_id]
    const values = [
      first_name,
      last_name,
      email,
      password,
      team,
      course_check,
      Number(studentToModify),
    ]
    const response = await connection.query(singleGetQuery, values)

    if (response.rows.length === 0)
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      })

    return NextResponse.json({
      message: `User information updated in database`,
      data: response.rows[0],
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: `Error modifying data of user: ${params.student_id}`,
    })
  }
}

export async function DELETE(request: NextRequest, { params }: any) {
  try {
    const singleGetQuery =
      "DELETE FROM maratonistas WHERE student_id = $1 RETURNING *"
    const singleQueryValue = [params.student_id]
    const response = await connection.query(singleGetQuery, singleQueryValue)

    if (response.rows.length === 0)
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      })

    return NextResponse.json({
      message: `User deleted successfully`,
      data: response.rows[0],
    })
  } catch (error) {
    return NextResponse.json({
      message: `Error deleting user: ${params.student_id}`,
    })
  }
}
