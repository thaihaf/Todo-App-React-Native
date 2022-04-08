import instance from "../Helpers/axios";

export const register = async (details) => {
	let res = await instance.post("auth/register", details);
	return res.data;
};

export const login = async (details) => {
	let res = await instance.post("auth/login", details);
	return res.data;
};

export const getUser = async (id) => {
	await new Promise((r) => setTimeout(r, 3000));
	const res = await instance.get(`api/users/${id}`);
	return res ? res.data : res;
};

export const updateUser = async ({ id, details }) => {
	const res = await instance.patch(`api/users/${id}`, details);
	return res.data;
};

export const deleteUser = async (id) => {
	const res = await instance.delete(`api/users/${id}`);
	return res.data;
};
