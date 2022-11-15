import React, { useState } from 'react';
import { blog } from '../store/blogStore'
interface BlogProps {

}

const Blog: React.FC<BlogProps> = () => {
	const [tag, setTag] = useState<string>('all');


	return (

		<div className='w-[800px] mt-9 mb-0 ml-auto mr-auto'>
			<div className='mb-20 '>
				<button className='border border-sky-500  p-2 mt-2 cursor-pointer hover:bg-sky-500 hover:text-white transition-all mr-2' onClick={() => setTag('all')}>#all</button>
				<button className='border border-sky-500  p-2 mt-2 cursor-pointer hover:bg-sky-500 hover:text-white transition-all mr-2' onClick={()=> setTag('news')}>#news</button>
				<button className='border border-sky-500  p-2 mt-2 cursor-pointer hover:bg-sky-500 hover:text-white transition-all' onClick={()=> setTag('awards')}>#awards</button>
			</div>

			{blog.filter(e => e.tag.includes(tag)).map(e =>
				<div key={e.id} className='grid grid-cols-[2fr,1fr] w-[500px]'>
					<div>
						<img src={e.img} alt="news" className='w-[300px] h-[200px]' />
					</div>
					<div>
						<h6 className='font-bold'>{e.title}</h6>
						<p className='h-[39%] ml-3 overflow-hidden text-ellipsis whitespace-normal'>{e.description}</p>
						<p>{e.date}</p>
						<p>{e.tag}</p>
					</div>
				</div>
			)}
		</div>
	);
};
export default Blog;