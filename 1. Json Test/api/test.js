import axios from "axios";

export const getToken = async () => {
  const response = await axios.get("http://localhost:3000/token");
  return response.data;
};

export const getTest = async () => {
  const response = await axios.get(`http://localhost:3000/test`);
  return response.data;
};

// export const getTestById = async (id: ) => {
//   const response = await axios.get(`http://localhost:4000/test/${id}`);
//   return response.data;
// };