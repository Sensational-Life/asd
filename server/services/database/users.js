import db from "../../db";

export const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM users", (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result.rows);
			}
		});
	});
};

export const getUserByEmail = (email) => {
	return new Promise((resolve) => {
		db.query(
			"SELECT * FROM users where email = $1",
			[email],
			(error, result) => {
				resolve(result.rows[0]);
			}
		);
	});
};

 export const createUser = ({ name, email, pwd }) => {
    console.log(name,email,pwd)
	return new Promise((resolve, reject) => {
		db.query(
			"INSERT INTO users (name,email, pwd) values ($1, $2,$3) RETURNING id",
			[name, email, pwd],
			(error, result) => {
				if (error) {
					reject(error);
				}
				resolve(result.rows);
			}
		);
	});
};

export const getUserById = (id) => {
	return new Promise((resolve, reject) => {
		db.query(
			"SELECT * FROM users WHERE id = $1",
			[id],
			(error, result) => {
				if (error) {
					return reject(error);
				}
				resolve(result.rows);
			}
		);
	});
};