import { Pool } from "pg"

let connection: any

if (!connection) {
  connection = new Pool({
    user: "vyvxysns",
    password: "knbMlVGiSCkfzZzGOEgYvryP7lTGCAy_",
    host: "chunee.db.elephantsql.com",
    port: 5432,
    database: "vyvxysns",
  })
}

export { connection }
