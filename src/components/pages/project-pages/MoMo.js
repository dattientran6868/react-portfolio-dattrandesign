import React, { useState, useEffect } from 'react';
// import '../../../App.css';
import './ProjectPage.css'; // adjust path to wherever you put it
// import './AudienceRecommendation.css';
import Sidebar from '../../Sidebar';


function MoMo() {
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
    <div className="project-page__container project-page audience__recommendation" >
      <div>
        <img src='images/project-images/MM/MM-00.png' className='lg__image'></img>
      </div>

      <div id="section1">
        <div className='section__name'>
          <h2>1. PROJECT OVERVIEW</h2>
        </div>
        <h3>Context & Problem</h3>
        <p>MoMo was one of the most popular financial payment apps in Vietnam. It offered a mini financial app called Golden Pocket, which allowed users to save money and earn interest daily.</p>
        <p>In 2021, Golden Pocket was still fairly new, and many users did not fully understand its benefits. Unlike traditional bank savings, which typically paid interest over months or years, Golden Pocket allowed users to earn interest daily.</p>
        <h3>Project objective</h3>
        <p>Our goal was to grow deposits by making Golden Pocket's benefits easy to understand. We built an interest calculator showing users how their money would grow through daily compounding interest.</p>
        <h3>Project duration</h3>
        <p>I worked as the Growth Designer on this project. What I show in this portfolio was my contribution to the project.</p>
      </div>

      <div id="section2">
        <div className='section__name'>
          <h2>2. DISCOVERY & ANALYSIS</h2>
        </div>
        <h3>How Golden Pocket calculated interest</h3>
        <p>To build the interest calculator, I first needed to understand how Golden Pocket calculated interest, especially when users started earning interest after making a deposit.</p>
        <img loading="lazy" src='images/project-images/MM/MM-B01.png' className='md__image'></img>
        <p>To calculate their interest, users needed to provide three pieces of information:</p>
        <ul>
          <li>Deposit amount </li>
          <li>Start date</li>
          <li>End date</li>
        </ul>
      </div>

      <div id="section3">
        <div className='section__name'>
          <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
        </div>
        <p className='space'>A</p>
        <h3>Information architecture</h3>
        <p>I started by creating the information architecture to identify all the information that needed to be displayed.</p>
        <img loading="lazy" src='images/project-images/MM/MM-C01.png' className='sm__image'></img>
        <h3>User flow</h3>
        <p>I then created a user flow to understand how users would navigate through the feature.</p>
        <img loading="lazy" src='images/project-images/MM/MM-C02.png' className='lg__image'></img>
        <h3>Lo-fi wireframes</h3>
        <p>Based on the user flow, I explored two potential approaches. The first approach required users to enter their information before seeing the result. The second approach showed users an example first, so they could understand how the calculator worked before entering their own information.</p>
        <img loading="lazy" src='images/project-images/MM/MM-C03.png' className='md__image'></img>
        <p>I chose Option 2 because it allowed users to quickly explore the calculation without having to fill out the form first.</p>
        <h3>Hi-fi wireframes</h3>
        <p>I then created high-fidelity wireframes for the selected flow.</p>
        <img loading="lazy" src='images/project-images/MM/MM-C04.png' className='lg__image'></img>
      </div>

      <div id="section4">
        <div className='section__name'>
          <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
        </div>
        <p className='space'>A</p>
        <p>I shared the designs with company stakeholders and users to gather feedback.</p>
        <p>Key feedback from the sessions:</p>
        <ul>
          <li>Stakeholders and users were generally happy with the overall experience.</li>
          <li>They liked the detailed payout breakdown, which allowed them to see when and how much interest they would receive.</li>
          <li>Some participants felt that showing a large table of data could increase cognitive load, especially when users first landed on the page.</li>
        </ul>
        <h3>The 1st Iteration</h3>
        <p>In the first iteration, I explored several ways to apply progressive disclosure to the detailed payout table. This allowed users to view the details only when they wanted to.</p>
        <h4>Lo-fi wireframes</h4>
        <p>I created lo-fi wireframes to explore different approaches for the updated detailed payout section.</p>
        <img loading="lazy" src='images/project-images/MM/MM-D01.png' className='md__image'></img>
        <h4>Hi-fi wireframes</h4>
        <p>I then created high-fidelity wireframes for both options</p>
        <h4>Option 1: Accordion</h4>
        <p>Users could expand and collapse the accordion to view the detailed payout.</p>
        <img loading="lazy" src='images/project-images/MM/MM-D02.png' className='lg__image'></img>
        <h4>Option 2: Tabs</h4>
        <p>Users could switch between tabs to view the detailed payout.</p>
        <img loading="lazy" src='images/project-images/MM/MM-D03.png' className='lg__image'></img>

        <p>I shared the designs with stakeholders, and we chose the Accordion option because users did not have to switch back and forth between the summary and detailed payout. The Accordion also kept the same state when users changed the deposit amount or dates, making it easier to compare the results.</p>
        <p>We also received feedback about the days held. Since Golden Pocket allowed users to earn interest daily, having only a few preset options for the number of days could limit the usability of the calculator.</p>
        <h3>The 2rd Iteration</h3>
        <p>I replaced the Days Held field with an End Date picker, allowing users to select any end date they wanted.</p>
        <img loading="lazy" src='images/project-images/MM/MM-D04.png' className='sm__image'></img>
        <h4>Hi-fi wireframes with the updates</h4>
        <img loading="lazy" src='images/project-images/MM/MM-D05.png' className='lg__image'></img>
        <p>After the final design review, I made a few updates to refine the experience and interface.</p>
        <p>I added the first payout date to the summary panel so users could clearly see when their balance would first change.</p>
        <p>I also added the calculation details at the bottom of the screen to make the interest calculation more transparent.</p>
        <img loading="lazy" src='images/project-images/MM/MM-D06.png' className='sm__image'></img>
      </div>

      <div id="section5">
        <div className='section__name'>
          <h2>5. FINAL DESIGN</h2>
        </div>
        <p className='space'>A</p>
        <img loading="lazy" src='images/project-images/MM/MM-E01.png' className='lg__image'></img>

      </div>

      <div id="section6">
        <div className='section__name'>
          <h2>6. OUTCOME & IMPACT</h2>
        </div>
        <p className='space'>A</p>
        <p>The interest calculator gave users a simple way to understand how Golden Pocket worked and how much interest they could earn over time. By making the calculation and payout details more transparent, the feature helped users better understand the value of saving with Golden Pocket and make more informed decisions about their deposits.</p>
        <img loading="lazy" src='images/momo-logo.svg' className='logo'></img>
      </div>
      <div>
        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
      </div>
    </div>
  )
}

export default MoMo;