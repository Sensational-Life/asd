import { Router } from "express";
import db from "./db";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.get("/health", function(_, response) {
	db.query("select version()")
		.then((result) => {
			if(result.rows.length > 0) {
				response.status(200).send(result.rows);
			} else {
				response.sendStatus(400);
			}
		}).
		catch ((ex) => {
			console.error(ex.message);
		});
});

export default router;
