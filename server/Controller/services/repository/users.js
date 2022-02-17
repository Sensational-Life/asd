import db from "../../../db";

export const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM users", (err, result) => {
			err ? reject(err) : resolve(result.rows);
		});
	});
};

export const getUserByEmail = (email) => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM users where email = $1", [email], (err, result) => {
			if (err) {
				reject(err);
			}
			resolve(result.rows[0]);
		});
	});
};

export const createUser = ({ name, email, pwd }) => {
	return new Promise((resolve, reject) => {
		db.query(
			"INSERT INTO users (name, email, pwd) values ($1, $2, $3) RETURNING id",
			[name, email, pwd],
			(err, result) => {
				if (err) {
					reject(err);
				}
				resolve(result.rows);
			}
		);
	});
};

export const getUserById = (id) => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM users WHERE id = $1", [id], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result.rows);
		});
	});
};

export const editPassword = (userId, newPassword) => {
	return new Promise((resolve, reject) => {
		db.query(
			"UPDATE users SET  PASSWORD=$1 WHERE id = $2",
			[newPassword, userId],
			(err, result) => {
				err ? reject(err) : resolve(result.rows);
			}
		);
	});
};
