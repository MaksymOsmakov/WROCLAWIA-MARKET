import React, { createContext, useState } from 'react';

interface authProviderProps {
	children: any
}
interface valueProps {
	user?: string | null
	singIn?: (user: string, cb: any) => void
	singOut?: (cb: any) => void
}
const defaultValue: valueProps = {
	singIn: () => console.error("attempting to use AuthContext outside of a valid provider"),
}
export const AuthContext = createContext<valueProps>(defaultValue)

export const AuthProvider: React.FC<authProviderProps> = ({ children }) => {
	const [user, setUser] = useState<string>('');
	const singIn = (newUser: string, cb: any) => {
		setUser(newUser)
		cb()
	}
	const singOut = (cb: any) => {
		setUser('')
		cb()
	}
	return <AuthContext.Provider value={{ user, singIn, singOut }}>
		{children}
	</AuthContext.Provider>
};

