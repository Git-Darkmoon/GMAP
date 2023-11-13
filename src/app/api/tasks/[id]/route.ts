import { NextResponse } from "next/server"

export async function GET(res: NextResponse, context: any) {
  console.log(context.params)
  return NextResponse.json({ message: "Getting Users" })
}
