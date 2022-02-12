const express = require("express");
const router = express.Router();
import { getAllTimetables } from "../Controller/services/repository/timetables";

router.get("/get-all", (req, res) => {
	getAllTimetables()
		.then((data) => res.status(200).send(data))
		.catch((err) => {
			console.error(err.message);
			res.status(500);
		});
});

export default router;
