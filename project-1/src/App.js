import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
	<div style={styles}>
		<Carousel>
			<div>
				<img src="https://wi.wallpapertip.com/wsimgs/150-1509773_ipl-chennai-super-kings-csk-team-logo-white.jpg" alt="CSK" />
				<p className="legend">Chennai Super Kings</p>
			</div>
			<div>
				<img src="https://i0.wp.com/infonetworth.com/wp-content/uploads/2020/08/mumbai-indians.jpg?w=750&ssl=1" alt="MI"/>
				<p className="legend">MUMBAI INDIANS</p>
			</div>
			<div>
				<img src="https://i.pinimg.com/originals/8d/96/f0/8d96f06f6c548cf03e17924e90f8cf61.jpg" alt="RCB"/>
				<p className="legend">Royal Challengers Bangalore</p>
			</div>
			<div>
				<img src="https://www.kkr.in/static-assets/images/cssimages/default-kkr.jpg" alt="KKR"/>
				<p className="legend">Kolkata Night Riders</p>
			</div>
		</Carousel>
	</div>
  );
}

export default App;
