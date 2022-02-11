import { Pool } from "pg";

const dbUrl = process.env.DATABASE_URL || "postgres://localhost:5432/asd";

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: /localhost|192.168./ig.test(dbUrl) ? false : { rejectUnauthorized: false },
});

/**
 * above `connectionString` will require system user being able to access the `asd` db
 * if not allowed, then you might see error:
 * 	Error: role "Username" does not exist
 * troubleshooting:
 * 1. log in to psql and connect to the asd db, the run below script:
 *
 * create user "Username" with login;
 * --- Username must be your name used to loging to your computer
 *
 * 2. edit connection policy to your Postgres db server to trust for
 * all connections localhost. this needs to be set in <path to pgsql server>\data\pg_hba.conf:
 * # TYPE  DATABASE        USER            ADDRESS                 METHOD
 * # IPv4 local connections:
 * host    all             all             127.0.0.1/32            trust
 * # IPv6 local connections:
 * host    all             all             ::1/128                 trust
 */

export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
	} catch(err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};

export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool), connect: connectDb, disconnect: disconnectDb };
