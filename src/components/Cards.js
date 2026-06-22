/* eslint-disable react/no-unknown-property */

import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import { Fade } from "react-awesome-reveal";

function Cards() {
	return (
	<div>
		{/* <video playsInline webkit-playsinline autoPlay loop muted className='projectpage__video' src="/videos/about.mp4"/> */}
		<div>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<Fade bottom>
						<h2>Projects</h2>

						<ul className='cards__items'>
								<div className='two__in__one'>
								<CardItem 
									src="/images/PP.jpg"
									text="Product Selection Page"
									label="Professional Project"
									path="/prdctpg"
								/>
								</div>
								<div className='two__in__one'>
								<CardItem 
									src="/images/IM.jpg"
									text="illumin Deal Marketplace"
									label="Professional Project"
									path="/nvntrmrktplc"
								/>
								</div>
						</ul>

						<ul className='cards__items'>
							<div className='two__in__one'>
								<CardItem 
									src="/images/AR.jpg"
									text="AI-powered Audience Recommendation"
									label="Professional Project"
									path="/dncrcmmndtn"
								/>
								</div>
								<div className='two__in__one'>
								<CardItem
									src="/images/FI_cover.jpg"
									text="Facebook & Instagram Integration"
									label="Professional Project"
									path="/fcbknstgrmntgrtn"
								/>
								</div>
								
						</ul>

						<ul className='cards__items'>
							<div className='two__in__one'>
								<CardItem 
									src="/images/FM.jpeg"
									text="Adsquare Footfall Measurement"
									label="Professional Project"
									path="/ftfllmsrmnt"
								/>
								</div>
							<div className='two__in__one'>
								<CardItem 
									src="/images/FPA.jpeg"
									text="First-Party Audience Onboarding"
									label="Professional Project"
									path="/frstprtdncnbrdng"
								/>
								</div>
						
						</ul>
						
						<ul className='cards__items'>	
								<div className='two__in__one'>
								<CardItem 
									src="/images/SC.jpeg"
									text="Support Center Responsive Design"
									label="Professional Project"
									path="/spprtcntr"
								/>
								</div>
								<div className='two__in__one'>
								<CardItem 
									src="/images/illumin-component-library.jpeg"
									text="illumin Component Library"
									label="Professional Project"
									path="/llmncmpnntlbrr"
								/>
								</div>
						</ul>

					</Fade>
				</div>
			</div>
		</div>
		</div>		
	)
}

export default Cards;