import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const { singIn, singOut } = useAuth();
	const fromPage = location.state?.from?.pathname || '/';
	const { user } = useAuth();

	const [userName, setUserName] = useState<string>('');
	const handleSubmitSingIn = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (userName.length < 4) {
			alert('name should hame minimum 4 symbols')
		} else if (singIn) {
			event.preventDefault()
			singIn(userName, () => navigate(fromPage, { replace: true }));
		}
	}
	const handleSubmitSingOut = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (singOut) {
			event.preventDefault()
			singOut(userName);
		}
	}
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value)
	}
	return (
		<div className='w-[1100px] mt-9 mb-0 ml-auto mr-auto '>
			{!user &&
				<>
					<h1 className='mb-5'>Login</h1>
					<form >
						<label>
							<p>
								Name:
							</p>
							<input className='border border-sky-500 w-80 h-12 p-2' type='text' value={userName} onChange={inputChange} />
						</label>
						<div className='mt-8 flex'>
							<button type='submit' className='border border-sky-500 hover:bg-sky-500 transition-all hover:text-white p-2' onClick={handleSubmitSingIn}>Login</button>
						</div>
					</form>
				</>
			}
			{user &&
				<button type='submit' className='border border-sky-500 hover:bg-sky-500 transition-all hover:text-white p-2' onClick={handleSubmitSingOut}>LogOut</button>
			}
		</div>
	);
};

export default Login;