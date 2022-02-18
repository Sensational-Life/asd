import db from "../../../db";

export const getAllTimetables = () => {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM timetables", (err, result) => {
			err ? reject(err) : resolve(result.rows);
		});
	});
};

