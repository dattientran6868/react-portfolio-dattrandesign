import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './InventoryMarketplace.css';
import Sidebar from '../../Sidebar';


function InventoryMarketplace() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'section1', title: '1. Project overview' },
    { id: 'section2', title: '2. Discovery & analysis' },
    { id: 'section3', title: '3. Ideation & concept development' },
    { id: 'section4', title: '4. User testing, gathering feedbacks & iterations' },
    { id: 'section5', title: '5. Final design & Prototype' },
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
    <div className="project__container inventory__marketplace" >
      <div>
        <img src='images/project-images/IM/IM-00.png' className='large__image'></img>
      </div>

      <div id="section1">
        <div className='section__name'>
          <h2>1. PROJECT OVERVIEW</h2>
        </div>
        <h3>Context</h3>
        <p>Before this project, the experience of browsing and selecting deals was poor. Users had to search through a small modal with limited filters and not enough information to make informed decisions.</p>
        <img loading="lazy" src='images/project-images/IM/IM-A02.png' className='large__image'></img>
        <h3>Project objective</h3>
        <p>The objective of this project was designing an inventory marketplace where users could easily browse deals, view details, and add them to a journey to run their ad campaigns.</p>
        <h3>Project duration</h3>
        <p>The dicovery and design phases for this project lasted for 16 weeks.</p>
        <p>My role was Product Designer, the only product designer for this project. What I show in this portfolio was my contribution to the project.</p>

      </div>

      <div id="section2">
        <div className='section__name'>
          <h2>2. DISCOVERY & ANALYSIS</h2>
        </div>
        <h3>Competitve analysis</h3>
        <p> I start the phase by collaborating with the Product Manager and User Researcher to analyze the inventory marketplace of competing platforms, identifying key strengths and uncovering opportunities for improvement to inform our design strategy. </p>
        <img loading="lazy" src='images/project-images/IM/IM-B01.png' className='large__image'></img>
        <img loading="lazy" src='images/project-images/IM/IM-B02.png' className='large__image'></img>
        <h3>User Story Mapping</h3>
        <p>Then I partnered with the Product Manager and User Researcher to conduct in-depth interviews with diverse user types, gaining a deep understanding of their needs, pain points, and behaviors to inform feature design.</p>
        <img loading="lazy" src='images/project-images/IM/IM-B03.png' className='large__image'></img>
      </div>

      <div id="section3">
        <div className='section__name'>
          <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
        </div>
        <p className='space'>A</p>
        <h3>User flow</h3>
        <p>Initiated this phase by creating user flows based on insights from competitive analysis and user story mapping</p>
        <img loading="lazy" src='images/project-images/IM/IM-C01.png' className='large__image'></img>
        <h3>Sketching idea</h3>
        <h4>Concept 1: No navigation bar</h4>
        <img loading="lazy" src='images/project-images/IM/IM-C02.png' className='large__image'></img>
        <h4>Concept 2: Left-side navigation bar</h4>
        <img loading="lazy" src='images/project-images/IM/IM-C03.png' className='large__image'></img>
        <h3>Lo-fi wireframes</h3>
        <h4>Concept 1: No navigation bar</h4>
        <img loading="lazy" src='images/project-images/IM/IM-C04.png' className='large__image'></img>
        <h4>Concept 2: Left-side navigation bar</h4>
        <img loading="lazy" src='images/project-images/IM/IM-C05.png' className='large__image'></img>
        <h3>Hi-fi wireframes</h3>
        <h4>Concept 1: No navigation bar</h4>
        <img loading="lazy" src='images/project-images/IM/IM-C06.png' className='large__image'></img>
        <h4>Concept 2: Left-side navigation bar</h4>
        <img loading="lazy" src='images/project-images/IM/IM-C07.png' className='large__image'></img>
      </div>

      <div id="section4">
        <div className='section__name'>
          <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
        </div>
        <p className='space'>A</p>
        <p>To gather feedback on the 1st iteration, the designs were shared with company stakeholders and users.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D00.png' className='medium__image'></img>
        <p>Key feedback from the testing sessions:</p>
        <ul>
          <li>Stakeholders found Concept 1 (no navigation bar) more suitable, as the inventory marketplace wasn't complex enough to require a dedicated navigation bar.</li>
          <li>The main flow—from browsing deals to viewing details and adding them to a journey—felt easy and intuitive.</li>
          <li>Stakeholders liked how we grouped deals into sections like premium publishers, event calendar, and seasonal highlights.</li>
          <li>Users found the deal detail drawer helpful for making decisions.</li>
          <li>Some users suggested new ways to organize deals on the homepage.</li>
          <li>Users recommended adding a "Clear filter" button for each filter.</li>
        </ul>
        <h3>The 2nd Iteration</h3>
        <p>I designed different widgets to cover all the ways deals could be grouped on the homepage.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D01.png' className='large__image'></img>
        <p>I made UI updates based on feedback from the product team and other stakeholders.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D02.png' className='large__image'></img>
        <p>I also updated the empty state of the right column to make it more user-friendly and visually appealing.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D03.png' className='large__image'></img>
        <p>At the end of the 2nd iteration, we shared the design with users and company stakeholders to gather feedback. Key feedback:</p>
        <ul>
          <li>Users wanted to see the expected bid price range, since bids are often higher than the floor price in real situations.</li>
          <li>Some stakeholders suggested showing publisher logos in the deal detail drawer for better clarity and trust.</li>
        </ul>
        <h3>The 3rd Iteration</h3>
        <p>Based on feedback from user testing sessions, I added an 'Expected Bid Price' section to the right column so users could see the typical price range for their selected deals.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D04.png' className='large__image'></img>
        <p>The publisher's logo was important for building user trust, so I added it to the deal detail drawer.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D05.png' className='large__image'></img>
        <h3>Action drawer</h3>
        <p>In earlier iterations, we decided that after selecting deals, users could either add them to a journey or save them to My Deals using a side drawer. Once the main flow and design were mostly finalized, I focused on designing the form fields users needed to fill out to complete their tasks.</p>
        <h4>User flows in Action drawer</h4>
        <img loading="lazy" src='images/project-images/IM/IM-Action-flow.png' className='large__image'></img>
        <h4>Add deals to My deals</h4>
        <p>Users could save deals to "My Deals" so they could easily find and use them later without searching again.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D06.png' className='large__image'></img>
        <h4>Add deals to a journey</h4>
        <p>Users could add deals to a new or existing journey to run their advertising campaign.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D07.png' className='large__image'></img>
        <img loading="lazy" src='images/project-images/IM/IM-D08.png' className='large__image'></img>
        <p>To gather feedback on the 3rd iteration, we shared the designs with users and company stakeholders. Key feedback:</p>
        <ul>
          <li>The flows in the action drawer were clear and helped guide users step by step to complete their tasks.</li>
          <li>The language in the action drawer didn’t feel user-friendly. It should sound more like a conversation between the platform and the user.</li>
        </ul>
        <h3>The 4th Iteration</h3>
        <p>The updated drawer provided more working space, allowing users to add multiple tactics without needing to scroll too much.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D09.png' className='large__image'></img>
        <p>I added an animation to the deal detail drawer so that the publisher's logo and deal name always stayed visible.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D10.png' className='large__image'></img>
        <p>I explored different types of graphs to present cost guidance in a clear and useful way.</p>
        <img loading="lazy" src='images/project-images/IM/IM-D11.png' className='large__image'></img>
        <p>To gather feedback on the 4th iteration, we shared the designs with users and company stakeholders. </p>
        <ul>
          <li>Testers preferred Concept 2 for the cost guidance, as it displayed the highest, lowest, and average prices needed to win the deal based on the past seven days of data.</li>
        </ul>

        <h3>The 5th Iteration</h3>
        <p>In this iteration, I focused on Concept 2 of the cost guidance chart. Rather than showing static data, I introduced the idea for users to input values such as win rate or custom CPM and see the impact. Other than that, we used AI to predict the price for the next 7 days instead of relying on the past data.</p>
        <h4>AI-powered cost guidance with win rate</h4>
        <img loading="lazy" src='images/project-images/IM/IM-D12.png' className='large__image'></img>
        <h4>AI-powered cost guidance with custom CPM</h4>
        <img loading="lazy" src='images/project-images/IM/IM-D13.png' className='large__image'></img>
      </div>

      <div id="section5">
        <div className='section__name'>
          <h2>5. FINAL DESIGN</h2>
        </div>
        <p className='space'>A</p>
        <h3>Inventory marketplace page</h3>
        <img loading="lazy" src='images/project-images/IM/IM-E01.png' className='large__image'></img>
        <h3>Inventory marketplace in the Campaign setup drawer</h3>
        <img loading="lazy" src='images/project-images/IM/IM-E02.png' className='large__image'></img>
        <h3>Interactive prototype</h3>
        <p>Please select 'Fit width and height' for the best experience.</p>
        <a href="https://www.figma.com/proto/TDium992Hrmi8B5y0xqk4o/IM?node-id=1-265877&viewport=17%2C-21%2C0.09&t=vRvJiiqOgo9N2Njn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A265877&page-id=1%3A262925" target="_blank" rel="noreferrer"><p>Figma link</p></a>
      </div>

      <div id="section6">
        <div className='section__name'>
          <h2>6. OUTCOME & IMPACT</h2>
        </div>
        <p className='space'>A</p>
        {/* <p>As a result of this project, we successfully implemented a feature that not only empowers users to independently upload and utilize first-party data but also streamlines operations, reducing the manual workload for the client success team. In terms of business outcomes, we successfully met the success metric for this feature by managing 15,000,000 first-party data entries per month by the end of the first year.</p> */}
        <p>The new inventory marketplace significantly improved the user experience of browsing and selecting deals. Users could now easily explore deals, view key details like expected bid price, and organize them into journeys to plan ad campaigns more efficiently. Feedback from users and stakeholders was positive, highlighting the intuitive flow, improved visual design, and helpful deal packaging. These changes led to increased engagement and greater confidence in selecting the right deals.</p>
        <img loading="lazy" src='images/illumin-logo.svg' className='logo'></img>
      </div>
      <div>
        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
      </div>
    </div>
  )
}

export default InventoryMarketplace;