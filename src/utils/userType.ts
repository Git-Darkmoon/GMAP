export type Maratonista = {
  student_id: number
  first_name: string
  last_name: string
  email: string
  password: string
  team: number
  course_check:
    | "programacion basica"
    | "programacion orientada a objetos"
    | "programacion avanzada"
}
