export const getAllTimetables = async () => {
	const res = await fetch("/api/timetables/get-all");
	return await res.json();
};
