import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import { logInApi, checkPermission } from '../api/auth';

export const AuthContext = createContext({
	isAuthenticated: false,
	login: null,
	logout: null,
});

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginState, setLoginState] = useState("");
	const { pathname } = useLocation();

	useEffect(() => {
		const checkTokenIsValid = async () => {
			const token = document.cookie
				.split(";")
				.find((row) => row.startsWith("perfectToken="))
				?.split("=")[1];
			if (!token) {
				setIsAuthenticated(false);
				return;
			}
			try {
				await checkPermission(token);
				setIsAuthenticated(true);
			} catch (err) {
				setIsAuthenticated(false);
			}
		};

		if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
			checkTokenIsValid();
		};

	}, [pathname]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                loginState,
                logIn: async(data) => {
                    try {
                        const res = await logInApi({
                            username: data.username,
                            password: data.password,
                        }).then((res) => {
                            const { token, expired } = res.data;
							if (token) {
								document.cookie = `perfectToken = ${token}; expires = ${new Date(expired)}`;
								setIsAuthenticated(true);
							} else {
								setLoginState(res.data.error);
								setIsAuthenticated(false);
							}
                        })
                        return res;
                    }catch(err) {
                        console.log(err);
                        setIsAuthenticated(false);
                    }
                },
                logOut: () => {
                    document.cookie = "perfectToken=;";
					setIsAuthenticated(false);
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
