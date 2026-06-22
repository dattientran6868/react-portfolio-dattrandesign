import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FirstPartyAudience.css';
import Sidebar from '../../Sidebar';


function FirstPartyAudience() {
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
        <div className="project__container first__party__audience" >
            <div className='large__image'>
                <img src='images/project-images/FPA/FPA-00.png'></img>
            </div>

            <div id="section1">
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context</h3>
                <p>illumin was a platform that empowered marketers to create meaningful cross-channel advertising campaigns. Prior to this project, illumin did not support self-serve uploading of first-party data, such as email addresses and phone numbers. To use first-party data, users had to provide this information to the customer success team, who would manually process and upload it for users to utilize.</p>
                <h3>Project objective</h3>
                <p>The goal of this project was to develop a feature that allows users to self-serve upload first-party data and then use this data to run ads in illumin.</p>
                <h3>Project duration</h3>
                <p>The design phase for this project lasted for 6 weeks.</p>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
                {/* <h3>Table of content</h3>
                <ol>
                    <li>Project Overview</li>
                    <li>Research & Analysis</li>
                    <li>Ideation & Concept Development</li>
                    <li>User Testing & Iteration</li>
                    <li>Final Design</li>
                    <li>Outcome & Impact</li>
                </ol> */}
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. DISCOVERY & ANALYSIS</h2>
                </div>
                <h3>How LiveRamp works</h3>
                <p>In regard to first-party data, we did not store it directly within Illumin. Instead, we leveraged LiveRamp, a professional data storage and distribution service with a wide range of pre-existing features, including data storage, updates, and distribution to various destinations such as Facebook, TikTok, Google Ads, MailChimp, and more. Thus, I needed to conduct research to understand how LiveRamp operates.</p>
                <p>After uploading data to LiveRamp, the user had to wait for LiveRamp to process their data. The processing time varied from a few minutes to a few days.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-B1.png' className='small__image'></img>
                <p>LiveRamp provided users with important information, including Date Transferred, Total Rows, and Unique Records. Notably, LiveRamp was planning to charge users based on their average Records under management (RUMs).</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-B2.png' className='medium__image'></img>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
                </div>
                <p className='space'>A</p>
                <p>After gaining a thorough understanding of how LiveRamp worked, I initiated this phase by creating the user flows. According to the product requirement document for this project, there were 3 main flows within this feature:</p>
                <ul>
                    <li>Upload</li>
                    <li>Update or Edit</li>
                    <li>Delete</li>
                </ul>
                {/* <p>Among these 4 flows, I concentrated on two primary ones during this phase: the Upload flow and the Update flow.</p> */}
                <h3>3.1. Upload flow</h3>
                <p>I started building this flow by creating a user flow.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-C-Userflow1.png' className='large__image'></img>
                <h3>Upload</h3>
                <p>This was the main flow for uploading audience files. It began in the Audience Library, where users could create and manage their audiences.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-C1.png' className='large__image'></img>
                <h3>Retry upload when the file is rejected</h3>
                <p>If the audience file was rejected, the user could upload a new file and try again.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-C2.png' className='large__image'></img>


                <h3>3.2 Update flow</h3>
                <p>In addition to the uploading flow, the updating process was crucial due to the dynamic nature of the data, which continuously changed to meet users' needs.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-C3.png' className='large__image'></img>

                <h3>3.3 Delete flow</h3>
                <p>To delete a first-party audience, it must not be included in any published journeys. This prevents users from disrupting ongoing journeys. Therefore, when the user wanted to delete a first-party audience, the user needed to delete it in the ongoing journeys first. </p>
                <img loading="lazy" src='images/project-images/FPA/FPA-C4.png' className='large__image'></img>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
                </div>
                <p className='space'>A</p>
                <p>I collaborated with a UX researcher to conduct rapid testing sessions to gather user feedback. We held sessions with the Customer Success Team, which supports self-serve customers, and the Managed Team, which runs campaigns for managed clients.</p>
                <p>Additionally, I presented the design and collected feedback from other members of the Product team and the Engineering team.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-user-testing.png' className='large__image'></img>
                <p className='space'>A</p>
                <p>Some insights and feedback I gathered after the 1st iteration:</p>
                <ul>
                    <li>People understood the purpose of this feature based on the description in the audience type selection tile.</li>
                    <li>People understood the various user flows, such as upload, retry upload, update, and delete.</li>
                    <li>Since the upload and update processes didn’t require any information from the table, using a drawer on top of the table might not have been the ideal solution.</li>
                </ul>
                <h3>The 2nd iteration</h3>
                <p>There was an additional requirement in the second iteration: recommending users to generate a suggested audience based on their data. This feature aimed to increase the company's revenue by providing third-party audiences for users. Therefore, I had to add a step in the upload flow.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D-Userflow1.png' className='large__image'></img>
                <p>The upload flow was moved from a drawer interface to a full-page view, allowing users to fully focus on the process.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D1.png' className='large__image'></img>
                <p className='space'>A</p>
                <p>Users could retry upload the rejected audience file in the full page.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D2.png' className='large__image'></img>
                <p className='space'>A</p>
                <p>Users could edit or update the audience file in the full page.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D3.png' className='large__image'></img>
                <p className='space'>A</p>
                <p>Some insights and feedback I gathered for the 2nd iteration:</p>
                <ul>
                    <li>Using a full-page view for the upload and update processes helped users concentrate better on their tasks.</li>
                    <li>Stakeholders wanted users to read and at least scan through the Terms and Conditions due to its importance for data privacy. I needed to find an alternative to using the Terms and Conditions checkbox.</li>
                    <li>People found it hard to understand the two update methods because they were complicated. Therefore, I needed to find a way to help users make the choice more easily.</li>
                </ul>
                <h3>The 3rd iteration</h3>
                <p>Based on feedback that users were easily skipping the Suggesting Audience modal, I integrated the suggesting audience step into the same section as file upload and form completion to ensure it wouldn’t be missed.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D-Userflow2.png' className='large__image'></img>
                <p className='space'>A</p>
                <p>I placed the Suggesting Audience toggle on the upload page, ensuring users wouldn't overlook it and had time to consider the option.</p>
                <p>Additionally, the Terms and Conditions were displayed in a modal when users uploaded their audience file, requiring them to read or scan and explicitly accept the terms.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D4.png' className='large__image'></img>
                <p className='space'>A</p>
                <p>Based on feedback that the update methods were difficult to understand due to lengthy, complex text, I incorporated illustrations to help users make the right update method.</p>
                <img loading="lazy" src='images/project-images/FPA/FPA-D5.png' className='large__image'></img>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. FINAL DESIGN</h2>
                </div>
                <p className='space'>A</p>
                <p>After many design iterations, I organized the designs for all flows, including both major and minor ones.</p>
                <ul>
                    <li>Upload</li>
                    <li>Update or Edit</li>
                    <li>Post-Upload or Post-Update</li>
                    <li>Delete</li>
                </ul>
                <h3>5.1 Upload flow</h3>
                <img loading="lazy" src='images/project-images/FPA/FPA-E1.png' className='large__image'></img>

                <h3>5.2 Update (Edit) flow </h3>
                <img loading="lazy" src='images/project-images/FPA/FPA-E5.png' className='large__image'></img>

                <h3>5.3 Post-Upload or Post-Update flow</h3>
                <h4>Case 1: If the user chose to generate Suggested audiences</h4>
                <img loading="lazy" src='images/project-images/FPA/FPA-E2.png' className='large__image'></img>
                <h4>Case 2: If the user didn't choose to generate Suggested audiences</h4>
                <img loading="lazy" src='images/project-images/FPA/FPA-E3.png' className='large__image'></img>
                <h4>Case 3: If LiveRamp rejected the file, the user could retry uploading another file</h4>
                <img loading="lazy" src='images/project-images/FPA/FPA-E4.png' className='large__image'></img>

                <h3>5.4 Delete flow</h3>
                <img loading="lazy" src='images/project-images/FPA/FPA-E6.png' className='large__image'></img>

            </div>

            <div id="section6">
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>As a result of this project, we successfully implemented a feature that not only empowers users to independently upload and utilize first-party data but also streamlines operations, reducing the manual workload for the client success team. In terms of business outcomes, we successfully met the success metric for this feature by managing 15,000,000 first-party data entries per month by the end of the first year.</p>
                <img loading="lazy" src='images/illumin-logo.svg' className='logo'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default FirstPartyAudience;