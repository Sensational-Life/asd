const express = require("express");
const router = express.Router();
import { editPassword, getUserById } from "../Controller/services/repository/users.js";

router.get("/:id", (request, response) => {
	const id = request.params.id;
	getUserById(id)
		.then((result) => {
			result.length > 0
				? response.status(200).send(result)
				: response.sendStatus(400);
		})
		.catch((err) => {
			console.error(err.message);
		});
});

router.put("/change-password", (req, res) => {
	const { userId, newPassword } = req.body;
	editPassword(userId, newPassword)
		.then((data) => res.send(data))
		.catch((err) => {
			console.error(err.message);
			res.status(500);
		});
});
export default router;
