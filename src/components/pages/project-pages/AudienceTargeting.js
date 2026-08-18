import React, { useState, useEffect } from 'react';
// import '../../../App.css';
import './ProjectPage.css'; // adjust path to wherever you put it
// import './AudienceRecommendation.css';
import Sidebar from '../../Sidebar';


function AudienceTargeting() {
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
      const y = element.getBoundingClientRect().top + window.scrollY + 32;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  };


  return (
    <div className="project-page__container project-page " >
      <div>
        <img src='images/project-images/AT/AT-00.png' className='lg__image'></img>
      </div>

      <div id="section1">
        <div className='section__name'>
          <h2>1. PROJECT OVERVIEW</h2>
        </div>
        <h3>Context & Problem</h3>
        <p>Criteo Commerce Max (CMax) was a platform that helped advertisers create and manage retail media campaigns. Ads could appear across different types of pages on retailer websites.</p>
        <img loading="lazy" src='images/project-images/AT/AT-A01.png' className='lg__image'></img>
        <p>Based on campaign data, advertisers mainly targeted Category and Search Keyword pages. This created high demand and drove up bid prices on these two page types. Meanwhile, other page types received fewer bids.</p>
        <p>As a result, advertisers missed opportunities to reach customers on less competitive pages, where lower bid prices could potentially lead to better Return on Ad Spend (ROAS).</p>
        <h3>Project objective</h3>
        <p>To address this problem, we introduced Audience Run-of-Site targeting. This allowed advertisers to target customers based on their audience rather than specific page types.</p>
        <p>Instead of choosing which pages to target, advertisers could reach their selected audience across different pages where their ads had the potential to perform well.</p>
        <h3>Project duration</h3>
        <p>The design phase for this project lasted for 4 weeks.</p>
        <p>I worked as the Product Designer on this project. This case study focused on my contributions to the project.</p>
      </div>

      <div id="section2">
        <div className='section__name'>
          <h2>2. DISCOVERY & ANALYSIS</h2>
        </div>
        <h3>Understand the big picture</h3>
        <p>To design Audience Run-of-Site targeting, I first needed to understand how other campaign types were created. This helped me make sure the new experience fit naturally into the existing campaign workflow.</p>
        <p>I reviewed the pages and workflows across all campaign types and mapped them out, from Onsite Display to Onsite Sponsored Products, including their different buy types.</p>
        <img loading="lazy" src='images/project-images/AT/AT-B01.png' className='lg__image'></img>
        <p>Because Audience Run-of-Site targeting was only supported for Onsite Display with the Auction buy type, I focused on the area highlighted by the dashed rectangle.</p>
        <img loading="lazy" src='images/project-images/AT/AT-B02.png' className='lg__image'></img>
        <h3>Understand the interdependencies</h3>
        <p>Next, I looked at how Targeting Strategy was connected to other parts of the campaign. I identified which fields controlled the targeting strategy and which fields were affected by it.</p>
        <img loading="lazy" src='images/project-images/AT/AT-B03.png' className='xs__image'></img>
        <p>I then applied the same exercise to all form fields in the Onsite Display — Auction campaign to understand their relationships and dependencies.</p>
        <img loading="lazy" src='images/project-images/AT/AT-B04.png' className='lg__image'></img>
        <h3>Two solutions for Targeting strategy</h3>
        <p>After understanding the interdependencies between the form fields, I explored two options for placing the Targeting Strategy field.</p>
        <h4>Option 1: Place Targeting Strategy in the General step, after the Retailer field</h4>
        <img loading="lazy" src='images/project-images/AT/AT-B05.png' className='lg__image'></img>
        <h4>Option 2: Place Targeting Strategy in the Product step, before the other fields</h4>
        <img loading="lazy" src='images/project-images/AT/AT-B06.png' className='lg__image'></img>
        <p>I chose Option 1 because it better fit the information architecture. Targeting Strategy defined how the campaign would target customers, so it belonged in the General step rather than the Product step.</p>
      </div>

      <div id="section3">
        <div className='section__name'>
          <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
        </div>
        <p className='space'>A</p>
        <h3>High-Level user flow</h3>
        <p>I started this phase by mapping the high-level user flow to understand the key differences between Contextual Targeting and Audience Targeting.</p>
        <img loading="lazy" src='images/project-images/AT/AT-C01.png' className='lg__image'></img>
        <h3>Detailed user flow and updates for Audience Run-of-site targeting</h3>
        <p>Because Contextual Targeting and Audience Targeting were part of the same campaign workflow, I wanted them to follow the same number of steps.</p>
        <p>In the existing experience, Contextual Targeting had 7 steps, while Audience Targeting only needed 6. To align the two experiences, I merged Page Types and Targeting into a single Targeting step.</p>
        <p>This also made sense from an information architecture perspective. Both page types and audiences defined where or who the ads were targeted to, so they belonged under the same step.</p>
        <img loading="lazy" src='images/project-images/AT/AT-C02.png' className='lg__image'></img>
        <h3>Wireframes</h3>
        <p>Based on the detailed user flows, I created wireframes for both Contextual Targeting and Audience Run-of-Site Targeting to explore how the new experience would work within the existing workflow.</p>
        <h4>Audience targeting</h4>
        <img loading="lazy" src='images/project-images/AT/AT-C03.png' className='lg__image'></img>
        <h4>Contextual targeting</h4>
        <img loading="lazy" src='images/project-images/AT/AT-C04.png' className='lg__image'></img>
      </div>

      <div id="section4">
        <div className='section__name'>
          <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
        </div>
        <h3>Usability testing</h3>
        <p>After completing the designs for Contextual Targeting and Audience Run-of-Site Targeting, I shared them with stakeholders and users to gather feedback.</p>
        <img loading="lazy" src='images/project-images/AT/AT-D00.png' className='lg__image'></img>
        <p>Several key insights came from the sessions:</p>
        <ul>
          <li>Stakeholders and users felt the Audience Run-of-Site experience fit well into the existing workflow and met the technical constraints.</li>
          <li>They agreed with merging Page Types and Targeting into one step because it matched their mental model and reduced the number of steps in the progress bar.</li>
          <li>They suggested considering a scenario where the selected retailer did not support Audience Run-of-Site Targeting.</li>
        </ul>
        <h3>Iterations</h3>
        <h4>When the Retailer Did Not Support Audience Run-of-Site Targeting</h4>
        <p>I started the iteration by designing the edge case where the selected retailer did not support Audience Run-of-Site Targeting. I explored two options:</p>
        <ul>
          <li>Option 1: Keep Audience Targeting visible in the Targeting Strategy field but disable it and show a message when users hovered over it.</li>
          <li>Option 2: Hide the Targeting Strategy field completely and keep the workflow limited to Contextual Targeting.</li>
        </ul>
        <img loading="lazy" src='images/project-images/AT/AT-D01.png' className='lg__image'></img>
        <p>I chose Option 1 because it made the limitation clearer. By seeing the disabled option, advertisers could also understand that Audience Targeting existed and potentially ask the retailer to support it.</p>
        <h4>Other touchpoints</h4>
        <p>After designing the workflow for creating an Audience Run-of-Site line item, I also designed other touchpoints where the Targeting Strategy needed to be displayed.</p>
        <ul>
          <li>Targeting Strategy at the Campaign level</li>
          <li>Targeting Strategy filter</li>
          <li>Column management</li>
          <li>Targeting Strategy at the Line item l</li>
        </ul>
        <h4>Targeting Strategy at the Campaign level</h4>
        <p>At the campaign level, users could see the targeting strategy for each line item directly in the Line Item table.</p>
        <img loading="lazy" src='images/project-images/AT/AT-D02.png' className='md__image'></img>
        <h4>Targeting Strategy filter</h4>
        <p>Users could filter line items based on their Targeting Strategy, making it easier to find specific types of line items.</p>
        <img loading="lazy" src='images/project-images/AT/AT-D03.png' className='lg__image'></img>
        <h4>Column management</h4>
        <p>Users could show, hide, or rearrange the Targeting Strategy column based on their needs.</p>
        <img loading="lazy" src='images/project-images/AT/AT-D04.png' className='lg__image'></img>
        <h4>Targeting Strategy at the Line item level</h4>
        <p>At the line item level, I displayed the Targeting Strategy so users could easily understand how the line item was set up.</p>
        <img loading="lazy" src='images/project-images/AT/AT-D05.png' className='md__image'></img>
      </div>

      <div id="section5">
        <div className='section__name'>
          <h2>5. FINAL DESIGN</h2>
        </div>
        <h3>Audience Run-of-site targeting</h3>
        <img loading="lazy" src='images/project-images/AT/AT-E01.png' className='lg__image'></img>
        <h3>Contextual targeting</h3>
        <img loading="lazy" src='images/project-images/AT/AT-E02.png' className='lg__image'></img>

      </div>

      <div id="section6">
        <div className='section__name'>
          <h2>6. OUTCOME & IMPACT</h2>
        </div>
        <p className='space'>A</p>
        <p>The project introduced Audience Run-of-Site Targeting to Criteo Commerce Max, giving advertisers more flexibility to reach audiences across different retailer pages. For advertisers, this opened access to less competitive inventory, giving them more opportunities to reach relevant customers at potentially lower bid prices and improve ROAS. For the business, the new targeting option helped unlock more retailer inventory, increase the value of available ad space, and create more opportunities for advertisers to spend across the platform.</p>
        <img loading="lazy" src='images/criteo-logo-orange.svg' className='logo'></img>
      </div>
      <div>
        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
      </div>
    </div>
  )
}

export default AudienceTargeting;