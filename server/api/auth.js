const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
	getUserByEmail,
	createUser
} = require("../Controller/services/repository/users");

/**
 * Users Login
 */
router.post("/login", async (req, res, next) => {
	const { email, pwd } = req.body;
	console.log(`Login attempt ${email}`);
	try {
		const user = await getUserByEmail(email);
		if (!email || !pwd || !user || pwd !== user.pwd) {
			return res.status(400).send({
				success: false,
				message: "Email or Password doesn't Exist check your inputs"
			});
		}
		const secret = process.env.JWT_SECRET || "your_jwt_secret";
		const token = jwt.sign({ userId: user.id }, secret);
		delete user.pwd;
		delete user.salt;
		return res.send({ success: true, token, user });
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
	const user = { name, email, pwd };

	getUserByEmail(email).then((data) => {
		data
			? res.status(400).send({
					success: false,
					message: "Account Already Exist",
					data: data
			  })
			: createUser(user)
					.then((data) => {
						res.status(200).send({
							success: true,
							message: "Account created",
							data
						});
					})
					.catch((err) => {
						console.log(err);
						next(err);
					});
	});
});

module.exports = router;
