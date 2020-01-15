import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import { Link } from 'react-router-dom';

const content = [
    /* content cheatsheet:
       image: 1440 x maakt niet uit (voorkeur 1000+)
       userProfile: 120 x 120 
    */
	{
		title: 'Night of the Nerds',
		description:
		'Vanaf het begin van semester 3 tot het einde van semester 4 was ik samen met mijn groep de Designerds bezig aan een project voor Night of The Nerds. ',
		button: 'Read More',
		page:'/NotN',
		image: 'https://www.vdlgroep.com/_cache/_public/NOTN-2017_YXJfMTI2MHg4NDBfZF8xX2pwZ18vX2Fzc2V0L19wcml2YXRlL25ld3MvMjQ_ff16f5ce.jpg',
		user: '',
		userProfile: ''
	},
	{
		title: 'Tim Koehoorn',
		description:
		'In mijn 2de semester heb ik samen met mijn groep gewerkt aan de branding voor Tim Koehoorn.',
		button: 'Discover',
		page:'',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: '',
		userProfile: ''
	},
	{
		title: 'Picoo',
		description:
		'In mijn maatwerk semester ben ik samen met een groep gaan werken aan een brandguide voor het bedrijf Picoo.',
		button: 'Lees verder',
		page:'',
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
						<Link to={item.page}><button>{item.button}</button></Link>
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