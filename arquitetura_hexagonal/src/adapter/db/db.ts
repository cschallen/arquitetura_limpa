import pgPromise from "pg-promise";

console.log(process.env.DB_DATABASE);
const pgp = pgPromise()
console.log('try connect db');
const db = pgp({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD
})

export default db
