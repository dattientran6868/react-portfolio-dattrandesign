import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './AudienceRecommendation.css';
import Sidebar from '../../Sidebar';


function AudienceRecommendation() {
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
    <div className="project__container audience__recommendation" >
      <div>
        <img src='images/project images/AR/AR-00.png' className='large__image'></img>
      </div>

      <div id="section1">
        <div className='section__name'>
          <h2>1. PROJECT OVERVIEW</h2>
        </div>
        <h3>Context</h3>
        <p>One of the biggest challenges in running ads was finding the right audience, especially when a campaign did not perform well. When results were poor, advertisers tried to reach more people to increase impressions. However, there were many audience options available in the third-party market. With so many choices, it was hard for advertisers to know which audiences were the best fit for their campaigns.</p>
        <h3>Project objective</h3>
        <p>To solve this problem, we used AI to recommend the most suitable and high-potential audiences and creative sizes. Our system analyzed campaign data and suggested audience segments and creative sizes that were more likely to improve performance and deliver better results.</p>
        <h3>Project duration</h3>
        <p>The design phase for this project lasted for 4 weeks.</p>
        <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>
      </div>

      <div id="section2">
        <div className='section__name'>
          <h2>2. DISCOVERY & ANALYSIS</h2>
        </div>
        <h3>How AI-powered audience insights work</h3>
        <img loading="lazy" src='images/project images/AR/AR-B01.png' className='large__image'></img>
        <h3>How AI-powered creative insights work</h3>
        <img loading="lazy" src='images/project images/AR/AR-B02.png' className='large__image'></img>
        <h3>UX/UI references</h3>
        <img loading="lazy" src='images/project images/AR/AR-B03.png' className='large__image'></img>
      </div>

      <div id="section3">
        <div className='section__name'>
          <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
        </div>
        <p className='space'>A</p>
        <h3>User flow</h3>
        {/* <p>I started building this flow by creating a user flow.</p> */}
        <img loading="lazy" src='images/project images/AR/AR-C01.png' className='large__image'></img>
        <h3>Lo-fi wireframes</h3>
        <img loading="lazy" src='images/project images/AR/AR-C02.png' className='large__image'></img>
        <h4>Concept 1: The audience panel is located on the right side</h4>
        <img loading="lazy" src='images/project images/AR/AR-C03.png' className='large__image'></img>
        <h4>Concept 2: The audience panel is located in the middle</h4>
        <img loading="lazy" src='images/project images/AR/AR-C04.png' className='large__image'></img>
        <h3>Hi-fi wireframes</h3>
        <h4>Concept 1: The audience panel is located on the right side</h4>
        <img loading="lazy" src='images/project images/AR/AR-C05.png' className='large__image'></img>
        <h4>Concept 2: The audience panel is located in the middle</h4>
        <img loading="lazy" src='images/project images/AR/AR-C06.png' className='large__image'></img>
      </div>

      <div id="section4">
        <div className='section__name'>
          <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
        </div>
        <p className='space'>A</p>
        <p>To gather feedback on the 1st iteration, the designs were shared with company stakeholders and users.</p>
        <img loading="lazy" src='images/project images/AR/AR-D00.png' className='large__image'></img>
        <p>Key feedback from the testing sessions:</p>
        <ul>
          <li>Users preferred the panel on the right side because it took up less space. They also felt that the right column was an appropriate place for recommendations, while the middle area should remain focused on the main features. </li>
          <li>Users found the information provided for each recommended audience to be sufficient.</li>
        </ul>
        <h3>The 2nd Iteration</h3>
        <p>After confirming the direction for the recommendation panel, I moved on to the second iteration and focused on how audience insights would be discovered. There were several possible entry points for these insights:</p>
        <ul>
          <li>The impression filter in the canvas: This was where users usually went to check the health of their campaigns.</li>
          <li>The tactic table at the campaign level: This was where users could view all tactics within a specific campaign.</li>
        </ul>
        <h4>Discover new AI-powered audience insights in the canvas</h4>
        <img loading="lazy" src='images/project images/AR/AR-D01.png' className='large__image'></img>
        <h4>Discover new AI-powered audience insights at the campaign level</h4>
        <img loading="lazy" src='images/project images/AR/AR-D02.png' className='large__image'></img>

        <p>Key feedback from the testing sessions:</p>
        <ul>
          <li>Users wanted a clear visual indicator showing how many audiences had been added and how many were remaining. This helped them better track their selections and stay aware of their progress.</li>
          <li>Stakeholders wanted users to quickly see the performance impact of the recommended audiences directly within the canvas, without needing to navigate to separate report or insights pages.</li>
        </ul>
        <h3>The 3rd Iteration</h3>
        <p>In this iteration, I made improvements to the audience panel based on user feedback. I also designed a flow that allowed users to quickly see the impact of the added recommended audiences on campaign performance.</p>
        <h4>Add a visual indicator to the audience panel</h4>
        <img loading="lazy" src='images/project images/AR/AR-D04.png' className='large__image'></img>
        <h4>See how AI-powered recommended audiences impact campaign performance</h4>
        <img loading="lazy" src='images/project images/AR/AR-D03.png' className='large__image'></img>
      </div>

      <div id="section5">
        <div className='section__name'>
          <h2>5. FINAL DESIGN</h2>
        </div>
        <p className='space'>A</p>
        <h2>Audience insights</h2>
        <h3>Add recommended audiences to the audience list</h3>
        <img loading="lazy" src='images/project images/AR/AR-E01.png' className='large__image'></img>
        <h3>Discover new AI-powered audience insights in the canvas</h3>
        <img loading="lazy" src='images/project images/AR/AR-E02.png' className='large__image'></img>
        <h3>Discover new AI-powered audience insights at the campaign level</h3>
        <img loading="lazy" src='images/project images/AR/AR-E03.png' className='large__image'></img>
        <h3>See how AI-powered recommended audiences impact campaign performance</h3>
        <img loading="lazy" src='images/project images/AR/AR-E04.png' className='large__image'></img>
        <h2>Creative insights</h2>
        <p>I applied the same design pattern for Creative insights, ensuring consistent experience for users.</p>
        <img loading="lazy" src='images/project images/AR/AR-E05.png' className='large__image'></img>

      </div>

      <div id="section6">
        <div className='section__name'>
          <h2>6. OUTCOME & IMPACT</h2>
        </div>
        <p className='space'>A</p>
        <p>As a result, advertisers identified the right audiences and creative sizes faster and with greater confidence. AI-powered insights cut down time spent searching through third-party segments, streamlining the targeting process and unlocking up to 48% more third-party reach, driving higher impressions and stronger overall campaign performance.</p>
        <img loading="lazy" src='images/project images/AR/AR-F01.png' className='large__image'></img>
        {/* <img loading="lazy" src='images/illumin-logo.svg' className='logo'></img> */}
      </div>
      <div>
        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
      </div>
    </div>
  )
}

export default AudienceRecommendation;