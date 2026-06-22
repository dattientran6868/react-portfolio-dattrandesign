import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FI.css';
import Sidebar from '../../Sidebar';


function FI() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Project Overview' },
    { id: 'section2', title: '2. Research & Analysis' },
    { id: 'section3', title: '3. Ideation & Concept Development' },
    { id: 'section4', title: '4. User Testing & Iteration' },
    { id: 'section5', title: '5. Final Design' },
    { id: 'section6', title: '6. Outcome & Impact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add a buffer for better UX
      let foundSection = null;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            foundSection = section.id;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll initially to set the active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };

	return (
		<div className="project__container white__container FI" >
			<div>
                <img src='images/project-images/FI/FI-hero.jpg' ></img>
            </div>
            {/* <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div> */}
            <div id="section1">
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>{`illumin is a journey advertising platform that seamlessly integrates media planning and buying within an interactive and intuitive interface. Prior to this project, illumin solely facilitated running ads on websites. This project signified the platform's initial venture into social media integration, marking a significant milestone in the company's history.`}</p>
                <h3>Project objective</h3>
                <p>The goal of this project was to develop a robust set of features that empower users to seamlessly create and efficiently manage their Facebook and Instagram advertisements directly within the illumin platform.</p>
                <h3>Project duration</h3>
                <img src='images/project-images/FI/FI-0.png'className='medium__image__noshadow'></img>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
            </div>
            
            <div id="section2">
                <div className='section__name'>
                    <h2>2. RESEARCH & ANALYSIS</h2>
                </div>
                <h3>Ad Hierarchy</h3>
                <p>Because our aim was to assist users in running Facebook and Instagram ads within the product, I initiated the project by conducting comprehensive research on the ad structure of Facebook.</p>
                <img src='images/project-images/FI/FI-A1.png' className='extra__small__image'></img>
                <p>Furthermore, considering our plans to integrate additional Social and Search channels in the future, comprehending the ad hierarchies of those platforms was imperative. This understanding equipped me with the knowledge needed to construct scalable solutions.</p>
                <img src='images/project-images/FI/FI-A2.png' className='medium__image'></img>
                <p>In general, despite these platforms employing varying names for their ad structures, they adhere to a consistent 3-level hierarchy. Consequently, I held the belief that any component of this project showcasing the 3 levels of ads could be reused in future.</p>
                
                <h3>UX/UI Reference</h3>
                <p>After that, I conducted research to analyze the UX and UI of Facebook Ads Manager, as well as other social and search platforms that we might potentially integrate later.</p>
                <img src='images/project-images/FI/FI-A3.png' className='large__image'></img>
                <p>In terms of navigation, Facebook, Google Ads, and Snapchat offer users the flexibility to transition between different levels seamlessly thanks to the Auto Save feature. On the other hand, TikTok, LinkedIn, and Bing require users to follow a step-by-step progression, disallowing any advancement in case of errors.</p>
                <p>Engaging in discussions with the Product Manager and the Engineering team, we collectively decided to implement support for Auto Save. This strategic choice was driven by the conviction that it would significantly enhance the user experience.</p>
                <p>Shifting focus to UI considerations, a notable pattern emerged across these platforms, excluding Bing. Specifically, they all employed a 3-pane UI design: comprising left, middle, and right panes, each serving a distinct purpose.</p>
                <img src='images/project-images/FI/FI-A4.png' className='medium__image'></img>
                <p>Based on this analysis, I believed that implementing a 3-section layout in the right drawer, where users input information for Facebook and Instagram ads, would pave the way for future reusability across other channels.</p>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                
                <h3>User flow</h3>
                <p>I initiated this phase by crafting the primary user flow, centered around the creation and execution of Facebook and Instagram ads within the journey canvas. The flow within the canvas was pivotal, as it enabled users to vividly conceptualize their advertising journey, which stood as the cornerstone feature of illumin.</p>
                <img src='images/project-images/FI/FI-B1.png' className='large__image'></img>
                <p>Guided by the user flow, I identified specific areas that required ideation:</p>
                <div className='list'>
                <ul>
                    <li>The authorization process</li>
                    <li>The canvas element of Meta</li>
                    <li>The right drawer facilitating users to configure Facebook & Instagram ads</li>
                </ul>
                </div>
                
                <h3>Authorization process</h3>
                <h4>Authorization process from Licensee Settings</h4>
                <p>In order to create and manage Facebook & Instagram ads, users were required to undergo an authorization process to establish a connection between illumin and Facebook. Beginning with a basic concept, I thought that users should initiate the authorization process within the Licensee settings page.</p>
                <img src='images/project-images/FI/FI-B2.png' className='large__image'></img>
                {/* <h4>Authorization process from Canvas</h4>
                <p>To provide users with greater flexibility, I extended the functionality to allow them to initiate the authorization process from multiple points, such as the journey canvas and settings.</p>
                <p>Moreover, enabling users to perform the authorization process directly within the Journey canvas and Journey settings—frequently accessed areas—served the dual purpose of increasing awareness regarding the availability of Facebook & Instagram integration without necessitating explicit communication from our company.</p>
                <h4>Direction 1: Disable the toolbox element until authorization is completed</h4>
                <img src='images/project-images/FI/FI-B3.png' className='large__image'></img>
                <h4>Direction 2: Keep the toolbox element enabled at all times</h4>
                <img src='images/project-images/FI/FI-B32.png' className='large__image'></img>
                <p>After creating 2 directions for the authorization step in Canvas, I decided to test them with users to gather feedback. The results of the testing session are mentioned in the User Testing and Iteration phase.</p> */}

                <h3>Canvas element</h3>
                <p>As illumin provides users with a canvas to visualize their journey advertising, the canvas element for Facebook & Instagram holds significant importance.</p>
                <p>I began by establishing the ad hierarchy, which served as the foundation for further exploration. I explored various directions to ascertain the optimal and most fitting solution.</p>
                <h4>Direction 1: Focus on Ad set</h4>
                <p>Since a Campaign comprises multiple Ad Sets, this approach is centered around presenting detailed information for each Ad Set, including its name and the quantity of Ads it contains.</p>
                <img src='images/project-images/FI/FI-B4.png' className='medium__image'></img>
                
                {/* <h4>Direction 2: Focus on the quantity of Ad Sets and Ads</h4>
                <p>This approach provides high-level information about a Campaign, such as the number of Ad Sets and Ads</p>
                <img src='images/project-images/FI/FI-B5.png' className='medium__image'></img>
                <h4>Direction 3: Combine direction 1 & 2</h4>
                <p>This approach not only provides high-level information about a Campaign, such as the number of Ad Sets and Ads, but also offers information about each Ad Set.</p>
                <img src='images/project-images/FI/FI-B6.png' className='medium__image'></img>
                <p>I opted for the last option within direction 3, as it creates a balance between providing high-level and detailed information that users sought. Furthermore, it offers ample space to display creative thumbnails, enhancing its visual appeal.</p>
                <p>Then I created different variants for the canvas element</p>
                <img src='images/project-images/FI/FI-B7.png' className='medium__image'></img> */}

                <h3>Right drawer</h3>
                <p>To view and edit information of a Facebook & Instagram campaign, users need to access a right drawer. (Why a right drawer? Because this is the original interaction in the journey canvas)</p>
                <p>Although I conducted research on the interfaces of Facebook Ads Manager, I actively explored various solutions to ensure the optimal decision.</p>
                <h4>Direction 1: Breadcrumbs</h4>
                <p>To access level 3 (Ad), users are required to first select level 2 (Ad Set).</p >
                <img src='images/project-images/FI/FI-B8.png' className='large__image'></img>
                <h4>Direction 2: Breadcrumbs combine with selects</h4>
                <p>Similar to direction 1, in order to access level 3 (Ad), users must first select level 2 (Ad Set). However, this solution assists users in selecting a level 2 (Ad Set) without having to navigate to that tab.</p >
                <img src='images/project-images/FI/FI-B9.png' className='large__image'></img>
                <h4>Direction 3: Putting the navigation bar into the left side</h4>
                <p>This operates similarly to direction 1, but placing the navigation section in the left column enhances its intuitiveness.</p >
                <img src='images/project-images/FI/FI-B10.png' className='large__image'></img>
                <h4>Direction 4: Columns</h4>
                <p>This solution visually represents campaign levels using columns.</p >
                <img src='images/project-images/FI/FI-B11.png' className='large__image'></img>
                <h4>Direction 5: Tree selector</h4>
                <p>I considered this to be the most optimal solution, as it allows users to navigate directly from level 1 to level 3 without the need to access level 2. Additionally, this approach aligns with the user experience offered by Facebook Ads Manager.</p >
                <img src='images/project-images/FI/FI-B12.png' className='large__image'></img>
                <p>After opting for direction 5, I proceeded to craft a high-fidelity design for the user flow within the right drawer. Collaborating closely with the Product Manager and the Engineering team, we collectively determined the forms and features to be supported in the initial release.</p>
                <img src='images/project-images/FI/FI-B13.png' className='large__image'></img>
                <p>When users encounter errors, there are 3 locations that indicate these issues:</p>
                <div className='list'>
                <ul>
                    <li>Error icons on the tree selector, pointing out the specific areas of errors</li>
                    <li>An error panel on the right side, providing detailed information about the errors</li>
                    <li>Error status displayed on the footer</li>
                </ul>
                </div>
                <img src='images/project-images/FI/FI-B14.png' className='large__image'></img>
                
                {/* <h3>Journey header</h3>
                <p>Additionally, I needed to design the journey header to display information related to the aggregated budget and flight range of the entire journey, as well as the budget and flight range specific to each channel.</p>
                <h4>Direction 1: Active channels icons</h4>
                <p>In addition to displaying the aggregated budget and flight range, users can hover over icons representing active channels to view the budget and flight range of each.</p>
                <img src='images/project-images/FI/FI-B15.png' className='medium__image'></img>
                <h4>Direction 2: Small panels of active channels</h4>
                <p>In addition to displaying the aggregated budget and flight range, small panels show the budget and flight range of each active channel.</p>
                <img src='images/project-images/FI/FI-B16.png' className='medium__image'></img> */}
            </div>
            
            <div id="section4">
                <div className='section__name'>
                    <h2>4. USER TESTING & ITERATION</h2>
                </div>
                <p className='space'>A</p>
                <p>I partnered with a UX Researcher to facilitate some rapid testing sessions, aimed at gathering user feedback. The participants consisted of campaign managers from our company, individuals who utilize the product daily to execute campaigns.</p>
                <p>We ran many testing sessions to get feedbacks from 2 main flows:</p>
                <div className='list'>
                <ul>
                    <li>Authorize (Especially the flows in canvas)</li>
                    <li>Configure Facebook & Instagram ads</li>
                </ul>
                </div>
                <h3>Testing results</h3>
                <h4>Authorization flow</h4>
                <p>Users appreciated the flexibility of being able to complete the authorization process from multiple locations, notably within the journey canvas where they operate daily. In terms of the authorization flow in the canvas, users preferred direction 2 as it was more intuitive.</p>
                <img src='images/project-images/FI/FI-C1.png' className='large__image'></img>
                <h4>Configuration flow</h4>
                <p>The familiarity of the configuration flow in the right drawer resonated with them, as they had prior experience with Facebook Ads Manager. This eliminated the need for them to learn a new system.</p>
                <p>However, the canvas interaction should be improved</p>
                {/* <div className='list'>
                <ul>
                    <li>The identification of the Meta logo</li>
                    <li>The interaction of the canvas element</li>
                </ul>
                </div> */}
                {/* <h4>The identification of the Meta logo</h4> */}
                {/* <h4>The interaction of the canvas element</h4> */}
                <p>I enhanced the interactivity of the canvas element by guiding users to distinct sections within the right drawer based on their click location.</p>
                <img src='images/project-images/FI/FI-C3.png' className='medium__image'></img>
                <p>{`After receiving feedback from stakeholders, it was noted that the Facebook and Instagram logos were more recognizable compared to the Meta logo. Given users' familiarity with the Facebook and Instagram logos, the Product Manager determined that transitioning from the Meta logo to the Facebook and Instagram logos would be more appropriate. Consequently, I introduced design adjustments to align with this decision.`}</p>
                <img src='images/project-images/FI/FI-C2.png' className='large__image'></img>
            </div>
            
            <div id="section5">
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <p className='space'>A</p>
                <p>{`After iterating on the design based on user and stakeholder feedback, I completed all the flows within this project. In total, there were over 20 flows. However, for the convenience of readers, I will present only the key flows in each part in this portfolio.`}</p>
                {/* <img src='images/project-images/FI/FI-D1.png' className='small__image'></img> */}
                <img src='images/project-images/FI/FI-D9.png' className='medium__image'></img>
                <h3>Authorize (Connect illumin to Facebook) in licensee settings</h3>
                <img src='images/project-images/FI/FI-D2.png' className='large__image'></img>
                <h3>Authorize (Connect illumin to Facebook) in journey settings</h3>
                <img src='images/project-images/FI/FI-D3.png' className='large__image'></img>
                <h3>Configure Facebook & Instagram ads</h3>
                <img src='images/project-images/FI/FI-D4.png' className='large__image'></img>
            </div>
            
            <div id="section6">
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The project marked a milestone in the history of illumin, as it enabled users to create and manage their first-ever social media ads on Facebook and Instagram through the platform. This feature generated about $2 million dollar in revenue in less than a year. Being the initial version of Facebook and Instagram integration, our primary focus was on implementing core features. Additional functionalities aimed at optimizing ads would be introduced in subsequent phases.</p>
                <img src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
		</div>
	)
}

export default FI;