import instance from "../../Helpers/axios";

const register = async (details) => {
	let res = await instance.post("auth/register", details);
	return res.data;
};

const login = async (details) => {
	let res = await instance.post("auth/login", details);
	return res.data;
};

const getUser = async (id) => {
	const res = await instance.get(`api/users/${id}`);
	return res ? res.data : res;
};

const updateUser = async ({ id, details }) => {
	const res = await instance.patch(`api/users/${id}`, details);
	return res.data;
};

const deleteUser = async (id) => {
	const res = await instance.delete(`api/users/${id}`);
	return res.data;
};

export { register, login, getUser, updateUser, deleteUser };
