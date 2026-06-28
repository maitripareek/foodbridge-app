import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const addFood = (data) => API.post("/food/add", data);
export const getFoods = (params) => API.get("/food", { params });
export const claimFood = (id, claimedBy) => API.patch(`/food/${id}/claim`, { claimedBy });
export const deleteFood = (id) => API.delete(`/food/${id}`);
export const getStats = () => API.get("/food/meta/stats");
