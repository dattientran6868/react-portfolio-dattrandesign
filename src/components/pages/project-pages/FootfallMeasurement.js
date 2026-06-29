import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FootfallMeasurement.css';
import Sidebar from '../../Sidebar';

function FootfallMeasurement() {

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
        <div className="project__container footfall__measurement" >
            <div className='large__image'>
                <img src='images/project-images/FM/FM-00.png'></img>
            </div>
            <div id='section1'>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>illumin was a platform that empowered marketers to create meaningful cross-channel advertising campaigns. There was a need for users to measure how their ads influenced visits to specific locations, such as shops or restaurants. Adsquare offered a reliable solution for tracking and understanding this impact. To meet users' needs, we decided to integrate Adsquare's Footfall measurement feature into our product.</p>
                <h3>Project objective</h3>
                <p>The objective of this project was to design a feature that enabled users to measure how their advertising journeys influenced the number of visitors to specific locations.</p>
                <h3>Project duration</h3>
                <p>The discovery and design phases for this project lasted for 8 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
            </div>

            <div id='section2'>
                <div className='section__name'>
                    <h2>2. DISCOVERY & ANALYSIS</h2>
                </div>
                <h4>How Footfall measurement works</h4>
                <p>Adsquare offers a Footfall Measurement solution that allows advertisers to measure and optimise the offline impact of their advertising campaigns. The results can be made available in real time across all media and channels – so mobile, desktop.</p>
                <img loading="lazy" src='images/project-images/FM/FM-B01.png' className='large__image'></img>
                <p>Users could select multiple locations and define a radius around each location to measure the impact of their ads.</p>
                <img loading="lazy" src='images/project-images/FM/FM-B02.png' className='large__image'></img>
            </div>

            <div id='section3'>
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                {/* <p className='space'>A</p> */}
                <h4>User flow</h4>
                <p>After gaining a thorough understanding of how Footfall measurement worked, I initiated this phase by creating the main user flow.</p>
                <img loading="lazy" src='images/project-images/FM/FM-C01.png' className='large__image'></img>
                <h4>Lo-fi wireframes</h4>
                {/* <p>I created low-fidelity wireframes to outline the basic design of this feature.</p> */}
                <img loading="lazy" src='images/project-images/FM/FM-C02.png' className='large__image'></img>
                <h4>Hi-fi wireframes</h4>
                {/* <p>After that, I created high-fidelity wireframes to refine the feature's design.</p> */}
                <img loading="lazy" src='images/project-images/FM/FM-C03.png' className='large__image'></img>
            </div>

            <div id='section4'>
                <div className='section__name'>
                    <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
                </div>
                <p className='space'>A</p>
                <p>To gather feedback on the 1st iteration, the designs were shared with company stakeholders and users.</p>
                <img loading="lazy" src='images/project-images/FM/FM-D00.png' className='large__image'></img>
                <p>Key insights from the testing sessions:</p>
                <ul>
                    <li>The configuration process had too many steps and needed a larger space instead of a modal.</li>
                    <li>The map was placed at the top of the modal, forcing users to scroll down to view and select locations.</li>
                </ul>
                <h3>The 2nd iteration</h3>
                <p>Based on feedback from stakeholders, I changed the configuration interface from a modal to a full-screen drawer in the second iteration.</p>
                <h4>Ideate configuration drawer layout</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D01.png' className='large__image'></img>
                <p>I placed the vertical map on the right side of the location list so users could view both the list and the map without scrolling.</p>
                <h4>Lo-fi wireframes with the new layout</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D02.png' className='large__image'></img>
                <h4>Hi-fi wireframes of the main flow: Users enabled and set up Footfall Measurement</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D03.png' className='large__image'></img>
                <h4>Edge case: Users were notified if they hadn't completed the setup</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D04.png' className='large__image'></img>
                <p>After the first iteration, I shared the design with stakeholders and users to gather feedback. Key insights included:</p>
                <ul>
                    <li>The full-screen drawer provided more space, making it easier for users to view information and interact.</li>
                    <li>The empty state of the drawer should inform users that uploaded locations would be saved at the advertiser level.</li>
                    <li>In the "validate new locations" step, users should be able to edit and remove locations.</li>
                    <li>In the "validate new locations" step, users should be able to see which locations are invalid.</li>
                </ul>
                <h3>The 3rd iteration</h3>
                <p>Based on feedback from stakeholders, I updated the user flow to allow users to edit and remove locations during the validation step.</p>
                <h4>Updated user flow</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D05.png' className='large__image'></img>
                <h4>Users could edit or delete locations during the location upload process</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D07.png' className='large__image'></img>
                <h4>When users uploaded invalid locations, they could edit them and search for valid addresses</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D08.png' className='large__image'></img>
                <h4>Users could edit or delete multiple locations at once</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D09.png' className='large__image'></img>
                <h4>The hover state for selected locations</h4>
                <p>I added a hover state for selected locations to improve visibility and interaction.</p>
                <img loading="lazy" src='images/project-images/FM/FM-D06.png' className='large__image'></img>
                <p>After the second iteration, I shared the design with stakeholders and users to gather feedback. Key insights included:</p>
                <ul>
                    <li>Allowing users to edit and correct invalid locations during the upload process made the experience more convenient.</li>
                    <li>The new hover state for selected locations improved the UI's cleanliness and made interactions more intuitive.</li>
                </ul>
                <p>In the second iteration, we tested the feature and discovered that some addresses didn’t lead to the correct locations, especially when the stores were inside a mall.</p>
                <img loading="lazy" src='images/project-images/FM/FM-D10.png' className='large__image'></img>
                <p>In the example above, the address of the McDonald's store didn’t pinpoint the store’s accurate location. Therefore, we needed to address this issue in the next iteration.</p>
                <h3>The 4th iteration</h3>
                <p>To solve the issue of inaccurate store locations, we explored several solutions. We allowed users to upload and edit locations using latitude and longitude, ensuring precise location tracking down to specific points.</p>
                <h4>When users uploaded locations, they could edit the latitude, longitude, or addresses to specify highly accurate locations</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D11.png' className='large__image'></img>
                <p>Additionally, we explored a feature that allowed users to drag and drop a pin to their desired location, making it more intuitive for users to pinpoint store locations.</p>
                <h4>Users could use the map to intuitively edit a location by dragging the pin to the desired spot</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D12.png' className='large__image'></img>
                <h4>Users could delete any unused locations</h4>
                <img loading="lazy" src='images/project-images/FM/FM-D13.png' className='large__image'></img>
            </div>

            <div id='section5'>
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <div>
                    <h4>The main flow: Users enabled and set up Footfall Measurement</h4>
                    <img loading="lazy" src='images/project-images/FM/FM-E01.png' className='large__image'></img>
                    <h4>Users could intuitively edit a location with the map or form fields</h4>
                    <img loading="lazy" src='images/project-images/FM/FM-E02.png' className='large__image'></img>
                    <h4>Users could delete any unused locations</h4>
                    <img loading="lazy" src='images/project-images/FM/FM-E03.png' className='large__image'></img>
                    <h4>Users could edit or delete multiple locations at once</h4>
                    <img loading="lazy" src='images/project-images/FM/FM-E04.png' className='large__image'></img>
                    <h4>Edge case: Users were notified if they hadn't completed the setup</h4>
                    <img loading="lazy" src='images/project-images/FM/FM-E05.png' className='large__image'></img>
                    {/* <h4>Interactive prototype</h4>
                    <p>Please select 'Fit width and height' for the best experience.</p>
                    <a href="https://www.figma.com/proto/TLOedEQNzvR8tGp3n3U6ly/FF-Measurement?node-id=420-57102&t=dRkbbka9wgFMn8k0-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A6&starting-point-node-id=420%3A57102" target="_blank" rel="noreferrer"><p>Figma link</p></a> */}
                </div>
            </div>

            <div id='section6'>
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>With Adsquare's footfall measurement, users could see how their campaigns drove real-world store visits, helping them optimize offline campaign performance. The partnership included a fixed monthly cost and a revenue-sharing model. Within two months of launch, the feature covered its costs and started generating positive revenue, making it a valuable addition to the business.</p>
                <img loading="lazy" src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default FootfallMeasurement;