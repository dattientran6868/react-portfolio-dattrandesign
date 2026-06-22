import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './SupportCenter.css';
import Sidebar from '../../Sidebar';

function SupportCenter() {

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
        <div className="project__container support__center" >
            <div className='large__image'>
                <img src='images/project-images/SC/SC-0.png'></img>
            </div>
            <div id='section1'>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>Before this project, the illumin knowledge base suffered from poor UX and UI. It lacked a clear information architecture, making it difficult for users to navigate topics and find articles. The outdated and inconsistent UI further hindered the experience. Additionally, users had no option to submit support tickets independently, relying entirely on the CSM team for assistance.</p>
                <p>Below are screenshots showcasing the previous support center's design, highlighting its limitations in terms of usability, inconsistent UI, and lack of self-service support options.</p>
                <img loading="lazy" src='images/project-images/SC/SC-A1.png' className='large__image'></img>
                <h3>Project objective</h3>
                <p>The objective of this project was to build a comprehensive support center where users could:</p>
                <ul>
                    <li>Easily find and read tutorial articles</li>
                    <li>Access monthly product updates</li>
                    <li>Submit and track support cases independently</li>
                </ul>
                <h3>Project duration</h3>
                <p>The design phase for this project lasted for 3 weeks.</p>
                <p>My role was Product Designer.</p>
                {/* <h3>Table of content</h3>
                <ol>
                    <li>Project Overview</li>
                    <li>Requirement Analysis</li>
                    <li>Ideation & Concept Development</li>
                    <li>Final Design</li>
                    <li>Outcome & Impact</li>
                </ol> */}
            </div>

            <div id='section2'>
                <div className='section__name'>
                    <h2>2. DISCOVERY & ANALYSIS</h2>
                </div>
                <p>I conducted a competitive analysis to explore how other platforms structured their support centers, focusing on key design patterns and best practices to improve usability and functionality.</p>
                <img loading="lazy" src='images/project-images/SC/SC-B1.png' className='large__image'></img>
                <p>Key insights gathered from this phase of the project include:</p>
                <ul>
                    <li>A large search bar on the homepage allowed users to quickly start their search.</li>
                    <li>A search bar in the header ensured article accessibility from any page.</li>
                    <li>Mega menus in the navigation bar enabled quick access to various topics.</li>
                    <li>Articles were grouped by topics for better organization.</li>
                    <li>Relevant articles were linked at the end of each article for easier navigation.</li>
                    <li>The support center was accessible without requiring login.</li>
                    <li>A Yes/No question at the end of each article asked if it was helpful.</li>
                </ul>
            </div>

            <div id='section3'>
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                <h3>User flows</h3>
                <p>Based on the functions of the support center, there were 3 major user flows:</p>
                <ul>
                    <li>Searching for and reading a tutorial</li>
                    <li>Searching for and reading an announcement or product update</li>
                    <li>Opening and following up on a support case</li>
                </ul>
                <h3>Sitemap</h3>
                <img loading="lazy" src='images/project-images/SC/SC-C1.png' className='large__image'></img>
                <h3>Grid system</h3>
                <p>To ensure a seamless experience across different devices, I designed for 4 different screen sizes.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C1B.png' className='large__image'></img>
                <p>Because all Illumin users were desktop users, I presented the desktop version to users and stakeholders to gather feedback throughout the design process.</p>
                <h3>Flow 1: Searching for and reading a tutorial</h3>
                <p>On the homepage, users got a quick overview of what the support center offered and could easily explore various topics within the knowledge base. Keywords in articles were highlighted for easy scanning. In the desktop version, the 'On this page' feature allowed users to quickly navigate to specific sections. Related articles were displayed at the bottom for further reading.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C02.png' className='large__image'></img>
                <p>Users could search for any issues, with keywords highlighted in each search result for easier identification.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C04.png' className='large__image'></img>
                <p>Users could easily navigate to all sections and search for articles using the navigation bar.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C03.png' className='small__image'></img>
                <h3>Flow 2: Searching for and reading an announcement or product update</h3>
                <p>All monthly product updates were displayed on the announcements page, where users could view detailed information about new features and improvements in each release.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C05.png' className='large__image'></img>
                <h3>Flow 3: Opening and following up on a support case</h3>
                <p>To submit a case, users needed to log in and fill out form fields, providing the necessary information for the CSM team to assist them.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C06.png' className='large__image'></img>
                <p>Users could view the details and track the progress of the cases they had submitted.</p>
                <img loading="lazy" src='images/project-images/SC/SC-C07.png' className='large__image'></img>
            </div>

            <div id='section4'>
                <div className='section__name'>
                    <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
                </div>
                <p>To gather feedback, the designs were presented to company stakeholders, covering all three major user flows within the Support Center.</p>
                <img loading="lazy" src='images/project-images/SC/SC-D01.png' className='large__image'></img>
                <p>Some insights and feedback I gathered after the 1st iteration:</p>
                <div className='list'>
                    <ul>
                        <li>Stakeholders were satisfied with all flows, noting that the homepage and navigation clearly guided users on what they could do in the Support Center. </li>
                        <li>They liked the mega menu, which allowed users to quickly navigate to different topic pages.</li>
                        <li>It was suggested that the text color on the tutorial and product updates pages should be darker for improved readability.</li>
                        <li>Due to the vendor's technical limitations, the design required an extra page for users to select the type of support case before filling out the form to open a case.</li>
                    </ul>
                </div>
                <p className='space'>A</p>
                <h3>The 2rd iteration</h3>
                <h4>Improve the reading experience</h4>
                <p>Since reading tutorials was the primary task users did in the Support Center, the first priority in the 2nd iteration was enhancing the reading experience. Based on user feedback, I applied a darker color to the text on the tutorial and product updates pages. Additionally, I changed the navigation color to white to minimize visual distractions while users were reading.</p>
                <img loading="lazy" src='images/project-images/SC/SC-D02.png' className='large__image'></img>
                <h4>Improve the homepage interface</h4>
                <p>I added light grey backgrounds to certain sections on the homepage to improve scanability.</p>
                <img loading="lazy" src='images/project-images/SC/SC-D03.png' className='large__image'></img>
                <h4>Add a select support type page to accommodate technical limitations.</h4>
                <p>An extra page for users to select the type of support case before filling out the form to open a case.</p>
                <img loading="lazy" src='images/project-images/SC/SC-D04.png' className='large__image'></img>
            </div>

            <div id='section5'>
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <h3>Flow 1: Searching for and reading a tutorial</h3>
                <img loading="lazy" src='images/project-images/SC/SC-F01.png' className='large__image'></img>
                <p>Users could search for any issues, with keywords highlighted in each search result for easier identification.</p>
                <img loading="lazy" src='images/project-images/SC/SC-F02.png' className='large__image'></img>
                <p>Users could easily navigate to all sections and search for articles using the navigation bar.</p>
                <img loading="lazy" src='images/project-images/SC/SC-F03.png' className='small__image'></img>
                <h3>Flow 2: Searching for and reading an announcement or product update</h3>
                <img loading="lazy" src='images/project-images/SC/SC-F04.png' className='large__image'></img>
                <h3>Flow 3: Opening and following up on a support case</h3>
                <img loading="lazy" src='images/project-images/SC/SC-F05.png' className='large__image'></img>
                <p>Users could view the details and track the progress of the cases they had submitted.</p>
                <img loading="lazy" src='images/project-images/SC/SC-F06.png' className='large__image'></img>
                <h3>Responsive design of all pages</h3>
                <h3>Home page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E01.png' className='large__image'></img>
                <h3>Navigation</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E02.png' className='large__image'></img>
                <h3>Topic page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E03.png' className='large__image'></img>
                <h3>Article page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E04.png' className='large__image'></img>
                <h3>Search result page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E05.png' className='large__image'></img>
                <h3>Announcements page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E06.png' className='large__image'></img>
                <h3>Monthly product updates page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E07.png' className='large__image'></img>
                <h3>Support page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E08.png' className='large__image'></img>
                <h3>Choose the type of support page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E09.png' className='large__image'></img>
                <h3>Open a support case page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E10.png' className='large__image'></img>
                <h3>Case detail page</h3>
                <img loading="lazy" src='images/project-images/SC/SC-E11.png' className='large__image'></img>
            </div>

            <div id='section6'>
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The new Support Center significantly enhanced the overall user experience. Users can now easily find and read tutorials, stay informed about new features and product improvements, and submit cases independently for additional support. With over 7,300 total impressions across all articles within just a few weeks of launch, the Support Center demonstrated a strong adoption rate.</p>
                <img loading="lazy" src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default SupportCenter;