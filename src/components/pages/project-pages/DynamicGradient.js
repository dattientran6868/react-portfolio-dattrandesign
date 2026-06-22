import React, { useState, useEffect, useMemo } from 'react';
import '../../../App.css';
import './DynamicGradient.css';
import Sidebar from '../../Sidebar';
import { BentoRow } from "../../Grid";
import { BentoCell } from "../../Grid";


function DynamicGradient() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = useMemo(() => [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Mercury gradient' },
        { id: 'section3', title: '3. Wave gradient' },
        { id: 'section4', title: '4. Plasma gradient' },
        { id: 'section5', title: '5. Customizations and other features' },
        { id: 'section6', title: '6. Experience the tool on the wesbite' },
    ], [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
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
        handleScroll();
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
        <div className="project__container dynamic__gradient" >
            <div className="large__image__grid">
                <img src='images/project images/DG/DG-0.png' alt=""></img>
            </div>

            <div id="section1">
                <div className='section__name'>
                    <h2>1. Project overview</h2>
                </div>
                <div className="large__image__grid">
                    <p>When working on my designs, I often needed gradient images and videos to enhance the overall visual experience. However, I couldn’t find a tool that offered enough flexibility to create different gradient styles and export them as videos. So, I built a creative tool that lets anyone customize, generate, and export gradients as images or videos — completely free.</p>
                </div>
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. Mercury gradient</h2>
                </div>
                <p className='space'>A</p>
                <div className="large__image__grid">
                    <BentoRow type="full">
                        <BentoCell backgroundColor="#000000">
                            <div className="square-video-full-height">
                                <video playsInline autoPlay loop muted src="/images/project images/DG/dg-2.webm" />
                            </div>
                        </BentoCell>
                    </BentoRow>
                </div>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. Wave gradient</h2>
                </div>
                <p className='space'>A</p>
                <div className="large__image__grid">
                    <BentoRow type="full">
                        <BentoCell backgroundColor="#000000">
                            <div className="square-video-full-height">
                                <video playsInline autoPlay loop muted src="/images/project images/DG/dg-3.webm" />
                            </div>
                        </BentoCell>
                    </BentoRow>
                </div>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. Plasma gradient</h2>
                </div>
                <p className='space'>A</p>
                <div className="large__image__grid">
                    <BentoRow type="full">
                        <BentoCell backgroundColor="#000000">
                            <div className="square-video-full-height">
                                <video playsInline autoPlay loop muted src="/images/project images/DG/dg-4.webm" />
                            </div>
                        </BentoCell>
                    </BentoRow>
                </div>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. Customizations and other features</h2>
                </div>
                <p>Users could customize how their gradients look with many customization controls.</p>
                <div className="large__image__grid">
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/DG/dg-51.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/DG/dg-52.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                </div>
                <p className='space'>A</p>
                <div className="large__image__grid">
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/DG/dg-53.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/DG/dg-54.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                </div>
                <p>Users could easily preview other types of gradients by hovering over the tab and export the gradient as an image or video.</p>
                <div className="large__image__grid">
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/DG/dg-55.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/DG/dg-56.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                </div>
            </div>

            <div id="section6">
                <div className='section__name'>
                    <h2>6. Experience the tool on the website</h2>
                </div>
                <div className="large__image__grid">
                    <p>Everyone can customize, generate, and export gradients as images or videos at <a href="https://www.dynamicgradient.com/" target="_blank" rel="noreferrer" style={{ fontWeight: 'var(--font-weight-bold)' }}>www.dynamicgradient.com</a></p>
                </div>
            </div>

            <div className='side__bar'>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default DynamicGradient;