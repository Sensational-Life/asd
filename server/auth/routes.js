const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../services/database/users");

/**
 * Users Login
 */
router.post("/login", async (req, res, next) => {
	const { email, pwd } = req.body;
	console.log("aksa;ls",email,pwd);
	console.log(`Login attempt ${email}`);
	try {
		const user = await db.getUserByEmail(email);

		if (!email || !pwd || !user || pwd !== user.pwd) {
			return res.sendStatus(403);
		}

		const secret = process.env.JWT_SECRET || "your_jwt_secret";
		const token = jwt.sign({ userId: user.id }, secret);
		delete user.pwd;
		delete user.salt;
		return res.send({ token, user });
	} catch (e) {
		console.error(e);
		next(e);
	}
});

/**
 * Users Registration
 */
router.post("/register", async (req, res, next) => {
	const { name, email, pwd } = req.body;

	console.log("------<<<<<<<<<<<<>>>>>>>>>>>>>>>",name,email,pwd);
	const user = { name,  email, pwd };

	db.createUser(user)
		.then((data) => {
			res.send({
				success: true,
				message: "Account created",
				data,
			});
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
});

module.exports = router;
