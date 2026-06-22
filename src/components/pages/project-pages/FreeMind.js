import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './FreeMind.css';
import Sidebar from '../../Sidebar';
import { BentoGrid } from "../../Grid";
import { BentoRow } from "../../Grid";
import { BentoCell } from "../../Grid";


function FreeMind() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: 'section1', title: '1. Project overview' },
        { id: 'section2', title: '2. Relax feature' },
        { id: 'section3', title: '3. Reflect feature' },
        { id: 'section4', title: '4. Other features' },
        { id: 'section5', title: '5. Experience the app on the App Store' },
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
        <div className="project__container free__mind" >
            <div className="large__image__grid">
                <img src='images/project-images/FRM/FR-00.png'></img>
            </div>

            <div id="section1">
                <div className='section__name'>
                    <h2>1. Project overview</h2>
                </div>
                <div className="large__image__grid">
                    <p>I designed and built FreeMind to help users relax through breathing exercises, natural soothing sounds, and reflective journaling. Leveraging AI, I built the app in Xcode and published it to the App Store.</p>
                </div>
            </div>

            <div id="section2">
                <div className='section__name'>
                    <h2>2. Relax feature</h2>
                </div>
                <div className="large__image__grid">
                    <p>The home screen was the Relax page, designed to help users quickly choose a way to unwind.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-home.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-home.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>Users could choose session duration, background sounds, or guided voice for breathing exercises.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-breathing.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-breathing.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>A variety of natural ambient sounds helped users relax and unwind.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-listen.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-listen.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>The timer feature allowed users to set a duration for sound playback. The sound gradually faded out and stopped when the time ran out.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-timer.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-timer.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>

                </div>
            </div>

            <div id="section3">
                <div className='section__name'>
                    <h2>3. Reflect feature</h2>
                </div>
                <div className="large__image__grid">
                    <p>The Reflect view was a calendar-based interface that allowed users to easily navigate to any day to create or edit a reflection.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-reflect.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-reflect.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>Users could add images to their reflections.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-reflect-image.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-reflect-image.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>Users could use emojis to express how their day felt.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-reflectemoji.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-reflectemoji.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>Over 200 emojis were available for users to choose from.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-emoji-picker.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-emoji-picker.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                </div>
            </div>

            <div id="section4">
                <div className='section__name'>
                    <h2>4. Other features</h2>
                </div>
                <div className="large__image__grid">
                    <p>A global playback bar at the bottom of the screen allowed users to control audio while using other features.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-globalbar.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-globalbar.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>The app included a range of settings to enhance user experience and accessibility.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-menu.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-menu.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>Users could set daily reminders to relax and reflect on their day.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-reminder.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-reminder.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                    <p>Users could send feedback to help improve the app.</p>
                    <BentoRow type="halves">
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-lm-feedback.png' loading="lazy" alt='' />
                        </BentoCell>
                        <BentoCell>
                            <img src='/images/Project images/FRM/f-dm-feedback.png' loading="lazy" alt='' />
                        </BentoCell>
                    </BentoRow>
                </div>
            </div>

            <div id="section5">
                <div className='section__name'>
                    <h2>5. Experience the app on the App Store</h2>
                </div>
                <div className="large__image__grid">
                    <p>Users could download and experience the app on the Apple App store</p><a href="https://apps.apple.com/ca/app/freemind-relax-and-reflect/id6761868559" target="_blank" rel="noreferrer"><p>Apple App store link</p></a>
                    <div className="large__image__grid">
                        <img src='images/project-images/FRM/FR-98.png'></img>
                    </div>
                </div>
            </div>

            <div className='side__bar'>
                <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
            </div>
        </div>
    )
}

export default FreeMind;