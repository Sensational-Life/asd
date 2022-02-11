export const signApi = async (email, pwd) => {
	const opts = {
		method: "POST",
		body: JSON.stringify({ email, pwd }),
		headers: {
			"content-type": "application/json",
		},
	};
	try {
		const res = await fetch("http://localhost:3100/auth/login", opts);
		const data = await res.json();
		return data;
	} catch (err) {
		return console.log(err);
	}
};

export const createNewUser = async (userInputs) => {
	const res = await fetch("http://localhost:3100/auth/register", {
		method: "POST",
		body: JSON.stringify(userInputs),
		headers: { "Content-Type": "application/json" },
	});
	return await res.json();
};
export const changePassword = async (userId, newPassword) => {
	const res = await fetch("http://localhost:3100/api/users/change-password", {
		method: "PUT",
		body: JSON.stringify({ userId, newPassword }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await res.json();
};