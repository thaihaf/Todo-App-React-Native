import instance from "../Helpers/axios";

export const createTask = async (data) => {
  let res = await instance.post("api/tasks", data);
  return res.data;
};

export const getTasks = async (linkApi) => {
  const res = await instance.get(linkApi);
	// await new Promise((r) => setTimeout(r, 3000));
  return res.data;
};

export const getTask = async (id) => {
  const res = await instance.get(`api/tasks/${id}`);
  return res.data;
};

export const updateTask = async ({id, data}) => {
  const res = await instance.patch(`api/tasks/${id}`, data);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await instance.delete(`api/tasks/${id}`);
  return res.data;
};
