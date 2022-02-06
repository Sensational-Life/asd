const express = require("express");
const router = express.Router();
import db from "../db";

const passport = require("passport");



router.get("/health", function (_, response) {
	db.query("select version()")
		.then((result) => {
			if (result.rows.length > 0) {
				response.status(200).send(result.rows);
			} else {
				response.sendStatus(400);
			}
		})
		.catch((ex) => {
			console.error(ex.message);
		});
	});


/** route is /status/ (status is defined as prefix in index.js) */
router.get("/", (req, res) => {
	res.send("All good");
});

/**
 * This route (/status/protected) is protected. If you GET /api/protected-status without a valid token
 * then it will 403 (forbidden). Check the README for information on how to authenticate and get a token
 */
router.get(
	"/protected",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.send("All good");
	}
);



export default router;
