import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FairShare.css';
import Sidebar from '../../Sidebar';
import { BentoGrid } from "../../Grid";
import { BentoRow } from "../../Grid";
import { BentoCell } from "../../Grid";


function FairShare() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Insider feed' },
        { id: 'section3', title: '3. Search stocks' },
        { id: 'section4', title: '4. Stock details' },
        { id: 'section5', title: '5. Watchlist' },
        { id: 'section6', title: '6. Customize watchlist' },
        { id: 'section7', title: '7. Experience the app on the App Store' },
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
        <div className="project__container fair__share" >
            <div className="large__image__grid">
                <img src='images/project-images/FS/fs-0.png'></img>
            </div>

            <div id="section1">
                <div className='section__name'>
                    <h2>1. Project overview</h2>
                </div>
                <div className="large__image__grid">
                    <p>I designed and developed a mobile app that helps users track insider trading activity in US public companies, making investment research more transparent and easier for everyday investors.</p>
                </div>
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. Insider feed</h2>
                </div>
                <div className="large__image__grid">
                    <p>The homepage features an insider activity feed where users can view the latest insider trades from S&P 500 companies. Users can tap any row to view detailed trade information.</p>
                    <img loading="lazy" src='/images/Project images/FS/fs-1.png' className='large__image'></img>
                </div>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. Search stocks</h2>
                </div>
                <div className="large__image__grid">
                    <p>Users can search for any public company listed on US stock exchanges, making it easy to quickly find and explore insider trading activity for specific stocks they are interested in researching.</p>
                    <img loading="lazy" src='/images/Project images/FS/fs-2.png' className='large__image'></img>
                </div>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. Stock details</h2>
                </div>
                <div className="large__image__grid">
                    <p>Each stock page shows insider trading activity from the past 30 days, including charts and key stats that help users quickly understand buying and selling trends. Users can also tap any trade to see more details.</p>
                    <img loading="lazy" src='/images/Project images/FS/fs-3.png' className='large__image'></img>
                </div>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. Watchlist</h2>
                </div>
                <div className="large__image__grid">
                    <p>The Watchlist page allows users to keep track of the stocks they want to follow most closely. From this page, users can easily tap on any stock to view detailed insider trading activity, charts, and key statistics.</p>
                    <img loading="lazy" src='/images/Project images/FS/fs-4.png' className='large__image'></img>
                </div>
            </div>

            <div id="section6">
                <div className='section__name'>
                    <h2>6. Customize watchlist</h2>
                </div>
                <div className="large__image__grid">
                    <p>Users can fully customize their watchlist by rearranging the order of stocks or removing stocks they no longer want to track, creating a more personalized and organized experience.</p>
                    <img loading="lazy" src='/images/Project images/FS/fs-5.png' className='large__image'></img>
                </div>
            </div>

            <div id="section7">
                <div className='section__name'>
                    <h2>7. Experience the app on the App Store</h2>
                </div>
                <div className="large__image__grid">
                    <p>(Coming soon) The app is currently in review and in the final stages before being officially published on the App Store, with the core features completed and ready for launch.</p>
                </div>
            </div>

            <div className='side__bar'>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default FairShare;