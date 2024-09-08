import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const storageToken = localStorage.getItem("jwtToken");
		setToken(storageToken);
		if (storageToken) {
			setIsLogged(true);
		}
	}, []);

	const logout = () => {
		const toastId = toast.loading("Logging out, Please wait!");
		setTimeout(() => {
			localStorage.removeItem("jwtToken");
			setIsLogged(false);
			toast.dismiss(toastId);
			toast.success("Logged out successful.");
		}, 600);
	};
	return (
		<GlobalContext.Provider
			value={{ token, logout, setToken, isLogged, setIsLogged }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
