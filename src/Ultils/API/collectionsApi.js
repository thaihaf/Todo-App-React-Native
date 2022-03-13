import axiosInstance from "../../Helpers/axios";

const getCollections = async (linkAPI) => {
  const res = await axiosInstance().get(linkAPI);
  return res.data;
};

const getCollection = async (collectionID) => {
  const res = await axiosInstance().get(`api/categories/${collectionID}`);
  return res.data;
};

export { getCollections, getCollection };
