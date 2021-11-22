import React, { useContext, useState } from "react";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const setState = (data) => {
		setUser(data);
	};

	return (
		<UserContext.Provider value={{ user, setState }}>
			{children}
		</UserContext.Provider>
	);
};

// make sure use
export const useGlobalContext = () => {
	return useContext(UserContext);
};

export { UserContext, UserProvider };
