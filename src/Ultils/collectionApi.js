import instance from "../Helpers/axios";

export const getCollections = async (linkAPI) => {
  const res = await instance.get(linkAPI);
	// await new Promise((r) => setTimeout(r, 3000));
	console.log(res)
  return res.data;
};

export const getCollection = async (collectionID) => {
  const res = await instance.get(`api/categories/${collectionID}`);
  return res.data;
};
