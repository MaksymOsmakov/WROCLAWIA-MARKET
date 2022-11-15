import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className='mt-12 ml-12'>
			<h1>Page error. Go <Link to='/' className='border border-sky-500  p-1 mt-2 mb-2 hover:bg-sky-500 hover:text-white transition-all'>home</Link></h1>
		</div>
	);
};


export default NotFoundPage;