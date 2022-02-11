const fs = require("fs");
const { Pool } = require("pg");

const dbUrl = process.env.DATABASE_URL || "postgres://localhost:5432/asd";

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: /localhost|192.168./gi.test(dbUrl)
		? false
		: { rejectUnauthorized: false },
});

const dbScript = fs.readFileSync("./server/dbSetup.sql").toString();
const populateDb = fs.readFileSync("./server/testUsers.sql").toString();
const timetables = fs.readFileSync("./server/timetables.sql").toString();
pool
	.query(dbScript)
	.then(() => console.info("running db restore script..."))
	.then(() => pool.query(populateDb))
	.then(() => console.info("running  sample users..."))
	.then(() => pool.query(timetables))
	.then(() => console.info("running timetables  script..."))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
