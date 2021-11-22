import React, { useContext, useState, useEffect } from "react";
const UserContext = React.createContext();

const categoryUrl = "http://localhost:3500/api/v2";

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [categories, setCategories] = useState([]);

	const fetchCategory = async () => {
		let data = await fetch(categoryUrl);
		const response = await data.json();
		setCategories(response.data.rows);
	};

	const setState = (data) => {
		setUser(data);
	};

	useEffect(() => {
		fetchCategory();
	}, []);

	return (
		<UserContext.Provider value={{ user, setState, categories }}>
			{children}
		</UserContext.Provider>
	);
};

// make sure use
export const useGlobalContext = () => {
	return useContext(UserContext);
};

export { UserContext, UserProvider };
