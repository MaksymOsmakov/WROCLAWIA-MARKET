import React from 'react';

interface GoogleMapProps {

}

const GoogleMap: React.FC<GoogleMapProps> = () => {
	return (
		<div>
			<iframe width="450" height="300" scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=wroclawia%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='map'></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=b0ed021a96f7519dd17dc172f90c68b7a4be118a'></script>
		</div>
	);
};

export default GoogleMap;