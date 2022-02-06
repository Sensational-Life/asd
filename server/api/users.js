const express = require("express");
const router = express.Router();
import { getAllUsers, getUserById }  from "../services/database/users.js";




router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.get("/get-all", function (_, response) {
	getAllUsers().then((result) => {
			if (result.length > 0) {
				response.status(200).send(result);
			} else {
				response.sendStatus(400);
			}
		})
		.catch((ex) => {
			console.error(ex.message);
		});
});

router.get("/:id",(request,response)=>{
	const id = request.params.id;
	getUserById(id)
		.then((result) => {
			if (result.length > 0) {
				response.status(200).send(result);
			} else {
				response.sendStatus(400);
			}
		})
		.catch((ex) => {
			console.error(ex.message);
		});
});
router.get("/:id",(request,response)=>{
	const id = request.params.id;
	getUserById(id)
		.then((result) => {
			if (result.length > 0) {
				response.status(200).send(result);
			} else {
				response.sendStatus(400);
			}
		})
		.catch((ex) => {
			console.error(ex.message);
		});
});
export default router;
