import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FI.css';
import Sidebar from '../../Sidebar';


function FI() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Discovery & analysis' },
        { id: 'section3', title: '3. Ideation & concept development' },
        { id: 'section4', title: '4. User testing, gathering feedbacks & iterations' },
        { id: 'section5', title: '5. Final design' },
        { id: 'section6', title: '6. Outcome & impact' },
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
            const y = element.getBoundingClientRect().top + window.scrollY - 32;
            window.scrollTo({ top: y, behavior: 'instant' });
        }
    };

    return (
        <div className="project__container white__container FI" >
            <div>
                <img src='images/project-images/FI/FI-0.png' ></img>
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
                <p>The design phase for this project lasted for 12 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. DISCOVERY & ANALYSIS</h2>
                </div>
                <h3>Ad Hierarchy</h3>
                <p>Because our aim was to assist users in running Facebook and Instagram ads within the product, I initiated the project by conducting comprehensive research on the ad structure of Facebook.</p>
                <img src='images/project-images/FI/FI-A1.png' className='extra__small__image'></img>
                <p>Furthermore, considering our plans to integrate additional Social and Search channels in the future, comprehending the ad hierarchies of those platforms was imperative. This understanding equipped me with the knowledge needed to construct scalable solutions.</p>
                <img src='images/project-images/FI/FI-A2.png' className='large__image'></img>
                <p>In general, despite these platforms employing varying names for their ad structures, they adhere to a consistent 3-level hierarchy. Consequently, I held the belief that any component of this project showcasing the 3 levels of ads could be reused in future.</p>

                <h3>UX/UI Reference</h3>
                <p>After that, I conducted research to analyze the UX and UI of Facebook Ads Manager, as well as other social and search platforms that we might potentially integrate later.</p>
                <img src='images/project-images/FI/FI-A3.png' className='large__image'></img>
                <p>In terms of navigation, Facebook, Google Ads, and Snapchat offer users the flexibility to transition between different levels seamlessly thanks to the Auto Save feature. On the other hand, TikTok, LinkedIn, and Bing require users to follow a step-by-step progression, disallowing any advancement in case of errors.</p>
                <p>Engaging in discussions with the Product Manager and the Engineering team, we collectively decided to implement support for Auto Save. This strategic choice was driven by the conviction that it would significantly enhance the user experience.</p>
                <p>Shifting focus to UI considerations, a notable pattern emerged across these platforms, excluding Bing. Specifically, they all employed a 3-pane UI design: comprising left, middle, and right panes, each serving a distinct purpose.</p>
                <img src='images/project-images/FI/FI-A4.png' className='large__image'></img>
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

                <h3>Authorization process from Licensee Settings</h3>
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
                <p>Since a Campaign comprises multiple Ad Sets, I started with an idea that the canvas element presenting information for each Ad Set, including its name and the quantity of Ads it contained.</p>
                <img src='images/project-images/FI/FI-B3.png' className='large__image'></img>
                <p>I selected option 3 and created high-fidelity elements—one for a single ad set and another for multiple ad sets.</p>
                <img src='images/project-images/FI/FI-B4.png' className='large__image'></img>

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
                <p>To view and edit information of a Facebook & Instagram campaign, users needed to access a right drawer. (Why a right drawer? Because this was the original interaction in the journey canvas)</p>
                <p>Although I conducted research on the interfaces of Facebook Ads Manager, I actively explored various solutions to ensure the optimal decision.</p>
                {/* <h4>Direction 1: Breadcrumbs</h4>
                <p>To access level 3 (Ad), users are required to first select level 2 (Ad Set).</p >
                <img src='images/project-images/FI/FI-B8.png' className='large__image'></img> */}
                <h4>Direction 1: Breadcrumbs combine with selects</h4>
                <p>The breadcrumbs displayed the hierarchy of campaign, ad set, and ad. To access level 3 (Ad), users must first select level 2 (Ad Set).</p >
                <img src='images/project-images/FI/FI-B5.png' className='large__image'></img>
                {/* <h4>Direction 3: Putting the navigation bar into the left side</h4>
                <p>This operates similarly to direction 1, but placing the navigation section in the left column enhances its intuitiveness.</p >
                <img src='images/project-images/FI/FI-B10.png' className='large__image'></img>
                <h4>Direction 4: Columns</h4>
                <p>This solution visually represents campaign levels using columns.</p >
                <img src='images/project-images/FI/FI-B11.png' className='large__image'></img> */}
                <h4>Direction 2: Tree selector</h4>
                <p>I considered this to be the most optimal solution, as it allowed users to navigate directly from level 1 to level 3 without the need to access level 2. Additionally, this approach aligned with the user experience offered by Facebook Ads Manager.</p >
                <img src='images/project-images/FI/FI-B6.png' className='large__image'></img>
                <p>After choosing direction 2, I created a high-fidelity design for the user flow, integrating the canvas element with the right drawer. Collaborating closely with the Product Manager and Engineering team, we finalized the forms and features to be included in the initial release.</p>
                <img src='images/project-images/FI/FI-B7.png' className='large__image'></img>


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
                    <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATION</h2>
                </div>
                <p className='space'>A</p>
                <p>I partnered with a UX Researcher to facilitate some rapid testing sessions, aimed at gathering user feedback. The participants consisted of campaign managers from our company, individuals who utilize the product daily to execute campaigns.</p>
                <p>Additionally, I presented the design and collected feedback from other members of the Product team and the Engineering team.</p>

                <p>Some insights and feedback I gathered after the 1st iteration:</p>
                <div className='list'>
                    <ul>
                        <li>The authorization process from the Licensee Settings was effective. However, we needed to provide users with an easier touchpoint for authorization.</li>
                        <li>The canvas element was visually appealing but lacked key campaign information, such as the number of Ad sets and Ads.</li>
                        <li>Configuration was a complex task involving multiple smaller steps, so it should be placed in a larger space for better usability.</li>
                    </ul>
                </div>
                <p className='space'>A</p>
                <h3>The 2nd iteration</h3>
                <h3>Authorization process from Canvas</h3>
                <p>Based on feedback and insights from testing sessions, I extended the authorization process to different places like the Journey canvas and settings. Allowing users to authorize directly within these frequently accessed areas not only streamlined the process but also raised awareness of the Facebook and Instagram integration without needing direct communication from our company.</p>
                <img src='images/project-images/FI/FI-C11.png' className='large__image'></img>
                <h3>Canvas element</h3>
                <p>The new canvas element provided detailed information about each Ad Set, while also offering high-level insights about the overall Campaign, such as the number of Ad Sets and Ads. This enabled users to quickly access key information at a glance.</p>
                <img src='images/project-images/FI/FI-C12.png' className='large__image'></img>
                <p>I selected option 3 and created high-fidelity elements—one for a single ad set and another for multiple ad sets.</p>
                <img src='images/project-images/FI/FI-C13.png' className='large__image'></img>
                <h3>Right drawer</h3>
                <p>Based on feedback from users and stakeholders, setting up campaigns was identified as a complex task. To address this, the drawer should be larger, allowing users to better focus and configure their campaigns. I drafted some ideas featuring a larger drawer for improved usability.</p>
                <h4>Direction 1: Putting the navigation bar into the left side</h4>
                <p>This operated similarly to direction 1, but placing the navigation section in the left column enhances its intuitiveness.</p>
                <img src='images/project-images/FI/FI-C14.png' className='large__image'></img>
                <h4>Direction 2: Columns</h4>
                <p>This solution visually represented campaign levels using columns.</p>
                <img src='images/project-images/FI/FI-C15.png' className='large__image'></img>
                <h4>Direction 3: Tree selector</h4>
                <p>I still viewed this as the most suitable solution, because it enabled users to navigate quickly from level 1 to level 3 without going through level 2.</p>
                <img src='images/project-images/FI/FI-C16.png' className='large__image'></img>
                <p>I then created a high-fidelity design flow that combined the new canvas element with the redesigned drawer..</p>
                <img src='images/project-images/FI/FI-C17.png' className='large__image'></img>
                <p>Some insights and feedback I gathered after the 2nd iteration:</p>
                <div className='list'>
                    <ul>
                        <li>The Meta logo was less recognizable compared to the Facebook and Instagram logos. Using the Meta logo might hinder the recognition of this new social channel integration.</li>
                        <li>The authorization process from the canvas was not intuitive, as hovering over a disabled element and navigating to Journey settings for authorization was not a common pattern.</li>
                        <li>The updated canvas element was good, as it contained key information while maintaining visual appeal.</li>
                        <li>Users and stakeholders preferred large drawers for the configuration flow, as they helped users stay focused on their setups.</li>
                    </ul>
                </div>
                <p className='space'>A</p>
                <h3>The 3rd iteration</h3>
                <h3>Changing Meta logo to Facebook and Instagram logos</h3>
                <p>I began this iteration by replacing the Meta logo with the Facebook and Instagram logos to improve the recognition of the new social channel integrations.</p>
                <img src='images/project-images/FI/FI-C21.png' className='large__image'></img>
                <h3>Authorization process from Canvas</h3>
                <p>I tried a new approach that allowed users to drag and drop the toolbox element, enabling them to complete the authorization directly from there.</p>
                <img src='images/project-images/FI/FI-C22.png' className='large__image'></img>
                <h3>Canvas element</h3>
                <p>After receiving positive feedback on the canvas element, I created various design variants to cover all possible use cases.</p>
                <img src='images/project-images/FI/FI-C23.png' className='large__image'></img>
                <p>I also enhanced the interactivity of the canvas element by navigating users to different sections within the right drawer based on their click location.</p>
                <img src='images/project-images/FI/FI-C24.png' className='large__image'></img>
                <h3>Right drawer</h3>
                <p>After deciding to proceed with the large drawer version, I designed the error flow for the configuration in this iteration.</p>
                <p>When users encountered errors, there were 3 locations that indicate these issues:</p>
                <div className='list'>
                    <ul>
                        <li>Error icons on the tree selector, pointing out the specific areas of errors</li>
                        <li>An error panel on the right side, providing detailed information about the errors</li>
                        <li>Error status displayed on the footer</li>
                    </ul>
                </div>
                <img src='images/project-images/FI/FI-C25.png' className='large__image'></img>
                <p>Some insights and feedback I gathered after the 2nd iteration:</p>
                <div className='list'>
                    <ul>
                        <li>Users and stakeholders provided positive feedback on the new authorization process from the canvas, finding it more intuitive than the previous version.</li>
                        <li>The canvas elements and right drawers also received good feedback and were finalized.</li>
                    </ul>
                </div>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <p className='space'>A</p>
                <p>{`After iterating on the design based on user and stakeholder feedback, I completed all the flows within this project. In total, there were over 20 flows. However, for the convenience of readers, I will present only the key flows in each part in this portfolio.`}</p>
                {/* <img src='images/project-images/FI/FI-D1.png' className='small__image'></img> */}
                {/* <img src='images/project-images/FI/FI-D9.png' className='large__image'></img> */}
                <h3>Authorize (Connect illumin to Facebook) in licensee settings</h3>
                <img src='images/project-images/FI/FI-D2.png' className='large__image'></img>
                <h3>Authorize (Connect illumin to Facebook) in journey canvas</h3>
                <img src='images/project-images/FI/FI-D3.png' className='large__image'></img>
                <h3>Configure Facebook & Instagram ads</h3>
                <img src='images/project-images/FI/FI-D4.png' className='large__image'></img>
            </div>

            <div id="section6">
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The project marked a milestone in the history of illumin, enabling users to create and manage their first-ever social media ads on Facebook and Instagram directly through the platform. This capability quickly became a meaningful driver of business growth within its first year. <a id='success__story' href="https://illumin.com/case-study/mnco-open-web-to-social/" target="_blank">A notable success story</a> was the 40% increase in average click-through rate (CTR) for social campaigns when users executed connected campaigns across the Open Web, Facebook, and Instagram within illumin. This approach, as opposed to running siloed campaigns, proved to be significantly more effective.</p>
                <img src='images/project-images/FI/FI-E1.png' className='large__image'></img>
                {/* <img src='images/illumin-logo.svg' className='logo'></img> */}
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default FI;