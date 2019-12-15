import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';

const content = [
    /* content cheatsheet:
       image: 1440 x maakt niet uit (voorkeur 1000+)
       userProfile: 120 x 120 
    */
	{
		title: 'Night of the Nerds',
		description:
		'Vanaf het begin van semester 3 tot het einde van semester 4 was ik samen met mijn groep de Designerds bezig aan een project voor Night of The Nerds.',
		button: 'Read More',
		image: 'https://www.vdlgroep.com/_cache/_public/NOTN-2017_YXJfMTI2MHg4NDBfZF8xX2pwZ18vX2Fzc2V0L19wcml2YXRlL25ld3MvMjQ_ff16f5ce.jpg',
		user: '',
		userProfile: ''
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: '',
		userProfile: ''
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: '',
		userProfile: '' 
	}
];

const ContentSlider = () => (
	<div>
		
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`, height: '100%' }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p style={{fontSize: 16}}><strong>{item.description}</strong></p>
						<button>{item.button}</button>
					</div>
					{/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
		</Slider>
	</div>
);

export default ContentSlider;