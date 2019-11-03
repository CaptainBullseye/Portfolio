import React from 'react';
// import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
// import './slider-animations.css';
import './ProgStyle.css';

const progress = [
    /* content cheatsheet:
       image: 1440 x maakt niet uit (voorkeur 1000+)
       userProfile: 120 x 120 
    */
	{
		event: 'event 1',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		backimage: 'https://i.imgur.com/ZXBtVw7.jpg',
	},
	{
		event: 'event 2',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		backimage: 'https://i.imgur.com/DCdBXcq.jpg',
	},
	{
		event: 'event 3',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		backimage: 'https://i.imgur.com/DvmN8Hx.jpg',
	}
];

const ProgessBar = () => (
	<div>
		
		<div className="progress-wrapper">
			{progress.map((item, stuff) => (
				<div
					key={stuff}
					className="progress-content"
					style={{ background: `url('${item.backimage}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.event}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default ProgessBar;