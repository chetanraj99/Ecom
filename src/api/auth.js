import axios from "axios";

const Base_API_URL = import.meta.env.VITE_API_URL; // Your backend API URL
const jwt = localStorage.getItem("jwtToken");

export const register = async (details) => {
	return await axios.post(`${Base_API_URL}/home/signup`, { ...details });
};

export const login = ({ email, password }) => {
	return axios.post(`${Base_API_URL}/auth/login`, { email, password });
};

export const api = axios.create({
	baseURL: Base_API_URL,
	headers: {
		Authorization: `Bearer ${jwt}`,
		"Content-Type": "application/json",
	},
});
