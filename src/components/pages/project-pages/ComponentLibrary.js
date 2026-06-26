import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './ComponentLibrary.css';
import Sidebar from '../../Sidebar';


function ComponentLibrary() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Foundation' },
        { id: 'section3', title: '3. Data entry' },
        { id: 'section4', title: '4. Data display' },
        { id: 'section5', title: '5. Navigation' },
        { id: 'section6', title: '6. Feedback' },
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
        <div className="project__container component__library" >
            <div>
                <img src='images/project-images/DS/DS-00.png' className='large__image'></img>
            </div>

            <div id="section1">
                <div className='section__name'>
                    <h2>1. PROJECT OVERVIEW</h2>
                </div>
                <h3>Project objective</h3>
                <p>The objective of this project was to establish a design system, starting with a component library. This system enabled the product design team to deliver consistent UX and UI across the platform, ensure accessibility standards were met, and reduce design-to-development handoff time.</p>
                <h3>My role</h3>
                <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. FOUNDATION</h2>
                </div>
                <img loading="lazy" src='images/project-images/DS/DS-A01.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-A02.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-A03.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-A04.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-A05.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-A06.png' className='large__image'></img>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. DATA ENTRY</h2>
                </div>
                <img loading="lazy" src='images/project-images/DS/DS-B01.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-B02.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-B03.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-B04.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-B05.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-B06.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-B07.png' className='large__image'></img>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. DATA DISPLAY</h2>
                </div>
                <img loading="lazy" src='images/project-images/DS/DS-C01.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-C02.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-C03.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-C04.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-C05.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-C06.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-C07.png' className='large__image'></img>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. NAVIGATION</h2>
                </div>
                <img loading="lazy" src='images/project-images/DS/DS-D01.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-D02.png' className='large__image'></img>
            </div>

            <div id="section6">
                <div className='section__name'>
                    <h2>6. FEEDBACK</h2>
                </div>
                <img loading="lazy" src='images/project-images/DS/DS-E01.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-E02.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-E03.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-E04.png' className='large__image'></img>
                <img loading="lazy" src='images/project-images/DS/DS-E05.png' className='large__image'></img>
            </div>

            <div>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default ComponentLibrary;