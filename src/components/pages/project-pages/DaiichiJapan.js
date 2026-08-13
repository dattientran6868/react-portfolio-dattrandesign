import React, { useState, useEffect } from 'react';
// import '../../../App.css';
import './ProjectPage.css';
// import './SupportCenter.css';
import Sidebar from '../../Sidebar';

function DaiichiJapan() {

    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Research & analysis' },
        { id: 'section3', title: '3. Design' },
        { id: 'section4', title: '4. Responsive design' },
        { id: 'section5', title: '5. Content management system' },
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
            const y = element.getBoundingClientRect().top + window.scrollY + 32;
            window.scrollTo({ top: y, behavior: 'instant' });
        }
    };

    return (
        <div className="project-page__container project-page daiichjapan" >
            <div className='lg__image'>
                <img src='images/project-images/DJ/DJ-00.png'></img>
            </div>
            <div id='section1'>
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Context & Problem</h3>
                <p>Dai-ichi Japan was a dedicated importer and distributor of premium food products, specializing in Southeast Asian groceries. The company provided a curated selection of fresh and authentic ingredients to businesses across Japan.</p>
                <p>However, they did not have a website to showcase their products or receive customer inquiries and orders online. Customers had to contact the company through traditional channels, which made the ordering process less efficient.</p>
                <h3>Project objective</h3>
                <p>The goal of the project was to build a website where customers could:</p>
                <ul>
                    <li>Browse the company’s products in three languages</li>
                    <li>Submit inquiries and place orders directly through the website</li>
                    <li>Send messages to the company</li>
                </ul>
                <p>The project also included building a content management system (CMS) that allowed the company to:</p>
                <ul>
                    <li>Manage and update hundreds of products</li>
                    <li>Receive customer inquiries and orders</li>
                    <li>Reply to customer messages</li>
                </ul>
                <h3>My role</h3>
                <p>I worked as a UX/UI Designer on this project. This page highlights my design contributions and the work I completed throughout the project.</p>
            </div>

            <div id='section2'>
                <div className='section__name'>
                    <h2>2. RESEARCH & ANALYSIS</h2>
                </div>
                <h3>Understanding the existing product catalog</h3>
                <p>I reviewed the existing product catalog to understand the types of information available for each product and identify the key details needed to build the website.</p>
                <img loading="lazy" src='images/project-images/DJ/DJ-B01.png' className='sm__image'></img>
                <h3>Competitive analysis</h3>
                <p>I conducted a competitive analysis to explore how other wholesale companies structured their websites and presented their products online.</p>
                <img loading="lazy" src='images/project-images/DJ/DJ-B02.png' className='lg__image'></img>
                <h3>Persona</h3>
                <p>I interviewed senior employees at Dai-ichi Japan to develop personas for the website’s target users and gain a deeper understanding of their goals, pain points, motivations, and buying behaviours.</p>
                <img loading="lazy" src='images/project-images/DJ/DJ-B03.png' className='lg__image'></img>
            </div>

            <div id='section3'>
                <div className='section__name'>
                    <h2>3. DESIGN</h2>
                </div>
                <h3>Information architecture</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-C01.png' className='lg__image'></img>
                <h3>Typography</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-C02.png' className='lg__image'></img>
                <h3>Colour palette</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-C03.png' className='lg__image'></img>
                <h3>Grid system</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-C04.png' className='lg__image'></img>
                <h3>Flow 1: Browse products and request a quote</h3>
                <p>Customers could explore the product catalog, view product details, and submit a quote request.</p>
                <h4>User flow</h4>
                <img loading="lazy" src='images/project-images/DJ/DJ-C05.png' className='lg__image'></img>
                <h4>Wireframes</h4>
                <img loading="lazy" src='images/project-images/DJ/DJ-C06.png' className='lg__image'></img>
                <h3>Flow 2: Search for a product and request a quote</h3>
                <p>Customers could quickly find a specific product through search and request a quote directly.</p>
                <h4>User flow</h4>
                <img loading="lazy" src='images/project-images/DJ/DJ-C07.png' className='lg__image'></img>
                <h4>Wireframes</h4>
                <img loading="lazy" src='images/project-images/DJ/DJ-C08.png' className='lg__image'></img>
                <h3>Flow 3: Learn about the company and contact</h3>
                <p>Customers could learn more about the company, its products, its business operations, and reach out to the company.</p>
                <h4>User flow</h4>
                <img loading="lazy" src='images/project-images/DJ/DJ-C09.png' className='lg__image'></img>
                <h4>Wireframes</h4>
                <img loading="lazy" src='images/project-images/DJ/DJ-C10.png' className='lg__image'></img>
            </div>

            <div id='section4'>
                <div className='section__name'>
                    <h2>4. RESPONSIVE DESIGN</h2>
                </div>
                <h3>Homepage</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D01.png' className='lg__image'></img>
                <h3>Product categories page</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D02.png' className='lg__image'></img>
                <h3>Products page</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D03.png' className='lg__image'></img>
                <h3>Product details page</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D04.png' className='lg__image'></img>
                <h3>Search results page</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D05.png' className='lg__image'></img>
                <h3>About page</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D06.png' className='lg__image'></img>
                <h3>Contact page</h3>
                <img loading="lazy" src='images/project-images/DJ/DJ-D07.png' className='lg__image'></img>

            </div>

            <div id='section5'>
                <div className='section__name'>
                    <h2>5. CONTENT MANAGEMENT SYSTEM</h2>
                </div>
                <p className='space'>A</p>
                <p>To help the company manage products at scale, I created product categories and built a product catalog using WordPress and WooCommerce.</p>
                <img loading="lazy" src='images/project-images/DJ/DJ-E01.png' className='lg__image'></img>
            </div>

            <div id='section6'>
                <div className='section__name'>
                    <h2>6. OUTCOME & IMPACT</h2>
                </div>
                <p className='space'>A</p>
                <p>The website dai-ichijapan.com helped the company establish a more professional digital presence and build trust with potential customers. It allowed the company to manage hundreds of products efficiently while making it easier for customers to browse products, learn about the company, and submit quote requests online. As a result, the website became a valuable channel for generating leads and connecting the company with potential customers.</p>
                <img loading="lazy" src='images/project-images/DJ/DJ-F01.png' className='md__image'></img>
            </div>
            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default DaiichiJapan;