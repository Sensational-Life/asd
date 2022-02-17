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


/**
 * this routine supposed to be executed during the build process
 * if in case process.env.DATABASE_RESET is set to `true`
 * for more info see "postbuild" jon in packaje.json.
 */
const dbsetup = fs.readFileSync("./server/dbsetup.sql").toString();
pool
	.query(dbsetup)
	.then(() => console.info("running db setup script..."))
	.then(() => {
		if (String(process.env.DATABASE_SEED) === "true") {
			/**
			 * dbseed.sql has testing data that can be populated
			 * if process.env.DATABASE_SEED is set and to "true"
			 */
			const dbseed = fs.readFileSync("./server/dbseed.sql").toString();
			pool.query(dbseed)
				.then(() => console.info("running db seed script..."))
				.catch((err) => {
					// if caught an Error here, then throw it further
					// into the next catch() where we print it and exit the process.
					throw err;
				});
		}
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
