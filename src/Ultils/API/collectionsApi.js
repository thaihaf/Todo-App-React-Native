import instance from "../../Helpers/axios";

const getCollections = async (linkAPI, firstRequest) => {
  const res = await instance.get(linkAPI);
  firstRequest && await new Promise((r) => setTimeout(r, 3000));
  return res.data;
};

const getCollection = async (collectionID) => {
  const res = await instance.get(`api/categories/${collectionID}`);
  return res.data;
};

export { getCollections, getCollection };
