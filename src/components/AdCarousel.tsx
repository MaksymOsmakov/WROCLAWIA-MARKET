import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface AdCarouselProps {

}
const settings = {
	className: "center cursor-pointer ",
	dots: true,
	infinite: true,
	speed: 400,
	slidesToShow: 2.9,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	centerPadding: "60px",
}

const AdCarousel: React.FC<AdCarouselProps> = () => {
	return (
		<Slider {...settings}>
			<div>
				<img className='h-[35vh] w-[40wv] ' src="https://indiater.com/wp-content/uploads/2019/05/Free-Best-Fashion-Advertising-Ads-Banner-PSD-Template.jpg" alt="advertisement" />
			</div>
			<div>
				<img className='h-[35vh] w-[40wv]' src="https://indiater.com/wp-content/uploads/2019/05/1.jpg" alt="advertisement" />
			</div>
			<div>
				<img className='h-[35vh] w-[40wv]' src="https://indiater.com/wp-content/uploads/2019/03/free-mens-wear-shopping-social-media-banner-psd.jpg" alt="advertisement" />
			</div>
			<div>
				<img className='h-[35vh] w-[40wv]' src="https://i.pinimg.com/originals/08/e5/97/08e5975b50251388d72f9672c538149c.jpg" alt="advertisement" />
			</div>
			<div>
				<img className='h-[35vh] w-[40wv]' src="https://s3.envato.com/files/225595224/01_preview4.jpg" alt="advertisement" />
			</div>
			<div>
				<img className='h-[35vh] w-[40wv]' src="https://indiater.com/wp-content/uploads/2019/05/1.jpg" alt="advertisement" />
			</div>
		</Slider>
	);
};

export default AdCarousel;