const express = require("express");
const router = express.Router();
import { editPassword } from "../Controller/services/repository/users.js";

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
