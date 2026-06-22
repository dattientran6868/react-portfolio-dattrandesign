import React, { useState, useEffect, useMemo } from 'react';
import '../../../App.css';
import './ProductPage.css';
import Sidebar from '../../Sidebar';


function ProductPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(() => [
    { id: 'section1', title: '1. Project overview' },
    { id: 'section2', title: '2. Discovery & analysis' },
    { id: 'section3', title: '3. Ideation & concept development' },
    { id: 'section4', title: '4. User testing, gathering feedbacks & iterations' },
    { id: 'section5', title: '5. Final design & Prototype' },
    { id: 'section6', title: '6. Outcome & impact' },
  ], [])

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
    <div className="project__container product__page" >
      <div>
        <img src='images/project images/PP/PP-00.png' className='large__image' alt=""></img>
      </div>

      <div id="section1">
        <div className='section__name'>
          <h2>1. PROJECT OVERVIEW</h2>
        </div>
        <h3>Context</h3>
        <p>Criteo Commerce Max (CMax) was a platform that helped advertisers create and manage retail media campaigns. One important step was selecting products to include in a line item.</p>
        <p>In the original product selection page, users had to already know exactly which products they wanted. There was little support for browsing or discovering products. Because of this, users usually selected only 1–2 products per line item.</p>
        <p>This created a problem. For better performance—especially when using Dynamic Match targeting—campaigns worked best when at least 10 products were selected.</p>
        <h3>Project objective</h3>
        <p>The goal of this project was to redesign the product selection experience to make it easier for users to discover and explore products.</p>
        <h3>Project duration</h3>
        <p>The design phase for this project lasted for 6 weeks.</p>
        <p>My role was Product Designer. What I show in this portfolio was my contribution to the project.</p>

      </div>

      <div id="section2">
        <div className='section__name'>
          <h2>2. DISCOVERY & ANALYSIS</h2>
        </div>
        <h3>Current product selection experience analysis</h3>
        <p>I analyzed the current product selection experience, combining it with feedback I got from user interviews about campaign creation improvements.</p>
        <img loading="lazy" src='images/project images/PP/PP-B01.png' className='medium__image' alt=""></img>
        <img loading="lazy" src='images/project images/PP/PP-B02.png' className='medium__image' alt=""></img>
        <img loading="lazy" src='images/project images/PP/PP-B03.png' className='medium__image' alt=""></img>
        <img loading="lazy" src='images/project images/PP/PP-B04.png' className='medium__image' alt=""></img>
        <img loading="lazy" src='images/project images/PP/PP-B05.png' className='medium__image' alt=""></img>
      </div>

      <div id="section3">
        <div className='section__name'>
          <h2>3. IDEATION & CONCEPT DEVELOPMENT</h2>
        </div>
        <h3>User flow</h3>
        <p>I started building this flow by creating a user flow.</p>
        <img loading="lazy" src='images/project images/PP/PP-C01.png' className='large__image' alt=""></img>
        <h3>High-level ideas</h3>
        <p>I explored two directions for the experience. Direction 1 kept users on the existing Products page, while Direction 2 introduced a large side drawer.</p>
        <h4>Direction 1: Stay within the Products step</h4>
        <img loading="lazy" src='images/project images/PP/PP-C02.png' className='medium__image' alt=""></img>
        <h4>Direction 2: Use a large side drawer</h4>
        <img loading="lazy" src='images/project images/PP/PP-C03.png' className='medium__image' alt=""></img>
        <p>I moved forward with Direction 2 because it provided more space and allowed users to focus on exploring and selecting products without distraction.</p>
        <h3>Ideation with AI</h3>
        <p>I used AI to quickly generate and explore multiple design concepts for the drawer experience.</p>
        <img loading="lazy" src='images/project images/PP/PP-C04.png' className='medium__image' alt=""></img>
        <h4>Added selection feedback and different view options</h4>
        <p>I added a progress indicator to show how many products users had selected. I also explored both tile and table views to support different browsing needs.</p>
        <img loading="lazy" src='images/project images/PP/PP-C05.png' className='medium__image' alt=""></img>
        <h4>Narrowed down to the strongest concepts which were option 1 and 3 and applied the Criteo UI style</h4>
        <p>I removed the option 2 because its vertical layout required too much scrolling, which made exploration harder.</p>
        <p>I instructed the AI to follow the Criteo Design System and continued refining the remaining concepts, expanding the filter options to enhance product discovery.</p>
        <img loading="lazy" src='images/project images/PP/PP-C06.png' className='medium__image' alt=""></img>
        <img loading="lazy" src='images/project images/PP/PP-C07.png' className='medium__image' alt=""></img>
        <h4>Moved forward with option 1 and placed it in the drawer</h4>
        <p>I moved forward with the option 1 where filters were always visible. This allowed users to quickly explore and adjust their selection without losing context.</p>
        <img loading="lazy" src='images/project images/PP/PP-C08.png' className='medium__image' alt=""></img>
        <h4>Defined the end-to-end flow</h4>
        <p>I developed the full user flow for the selected concept, covering product discovery, selection, and review.</p>
        <img loading="lazy" src='images/project images/PP/PP-C09.png' className='large__image' alt=""></img>

      </div>

      <div id="section4">
        <div className='section__name'>
          <h2>4. USER TESTING, GATHERING FEEDBACKS & ITERATIONS</h2>
        </div>
        <h3>Task-based usability testing</h3>
        <p>With an interactive Figma prototype, I conducted task-based usability testing. I gave participants access to the prototype and asked them to complete key tasks, focusing on how easily they could discover and select products.</p>
        <h4>Research plan</h4>
        <img loading="lazy" src='images/project images/PP/PP-D00.png' className='medium__image__shadow' alt=""></img>
        <h4>Testing sessions</h4>
        <img loading="lazy" src='images/project images/PP/PP-D01.png' className='medium__image__shadow' alt=""></img>
        <p className='space'>A</p>
        <p>Some insights and feedback I gathered after the testing sessions:</p>
        <ul>
          <li>Testers were able to complete core tasks, such as searching for products by name or ID, similar to the previous design.</li>
          <li>Testers responded positively to the ready-to-browse product catalog. They could explore products using category and brand filters without needing to search first.</li>
          <li>Filters were easy to use and supported product discovery effectively.</li>
          <li>Testers liked seeing selected products in the same view while browsing, which reduced the need to switch contexts.</li>
          <li>Some testers suggested clarifying the guidance copy to make it clear that the recommended number of products was not a strict requirement.</li>
          <li>Testers noted that category names could be longer in real scenarios, which should be considered in the design.</li>
          <li>Testers wanted the ability to remove selected products directly from the table in the Products step, without opening the drawer.</li>
        </ul>
        <h3>The 1st iteration</h3>
        <h4>Designed category filters based on real data</h4>
        <p>I used Glean AI to review internal data on category and brand name lengths. This helped ensure the filter design could handle real-world data and edge cases.</p>
        <img loading="lazy" src='images/project images/PP/PP-D02.png' className='large__image' alt=""></img>
        <h4>Updated layout to maximize content space</h4>
        <p>I also reworked the layout by moving filters and selected products out of side panels. This created more space for product browsing and improved overall visibility.</p>
        <img loading="lazy" src='images/project images/PP/PP-D03.png' className='large__image' alt=""></img>
        <h4>Made it easier to copy product IDs</h4>
        <p>I introduced a “Copy IDs” button to make it faster and easier for users to copy selected product IDs, reducing manual effort.</p>
        <img loading="lazy" src='images/project images/PP/PP-D04.png' className='large__image' alt=""></img>
        <h4>Made product removal more efficient</h4>
        <p>I added inline remove actions for each selected product, allowing users to quickly update their selection without opening a separate panel.</p>
        <img loading="lazy" src='images/project images/PP/PP-D05.png' className='large__image' alt=""></img>

        <h3>The 2nd iteration</h3>
        <h4>Added a quick way to reset search and filters</h4>
        <p>I added a “Clear search and filters” action in the empty state so users could quickly reset and continue exploring without friction.</p>
        <img loading="lazy" src='images/project images/PP/PP-D06.png' className='large__image' alt=""></img>
        <h4>Reminded users to select more products</h4>
        <p>I introduced a modal that prompted users to select more products if they hadn’t reached the recommended amount. This helped guide users toward better-performing setups but they could still continue if they chose to.</p>
        <img loading="lazy" src='images/project images/PP/PP-D07.png' className='large__image' alt=""></img>
      </div>

      <div id="section5">
        <div className='section__name'>
          <h2>5. FINAL DESIGN</h2>
        </div>
        <p className='space'>A</p>
        <p>While I used AI to support research and exploration, I delivered high-fidelity designs in Figma with clear specifications. This ensured a smooth handoff and made implementation easier for engineers.</p>
        <h3>Guided product discovery and selection</h3>
        <img loading="lazy" src='images/project images/PP/PP-E01.png' className='large__image' alt=""></img>
        <h3>Search products by IDs</h3>
        <img loading="lazy" src='images/project images/PP/PP-E02.png' className='large__image' alt=""></img>
        <h3>Quickly clear search and filters</h3>
        <img loading="lazy" src='images/project images/PP/PP-E03.png' className='large__image' alt=""></img>
        <h3>Prompt to select enough products</h3>
        <img loading="lazy" src='images/project images/PP/PP-E04.png' className='large__image' alt=""></img>
        <h3>Responsive drawer design</h3>
        <img loading="lazy" src='images/project images/PP/PP-E05.png' className='large__image' alt=""></img>
        <h3>Interactive prototype</h3>
        <a href="https://www.figma.com/make/zdJVZNe0Aus5CvLM7jxJqj/Product-Selection-Page-Redesign?p=f&fullscreen=1" target="_blank" rel="noreferrer"><p>Figma Make link</p></a>
      </div>

      <div id="section6">
        <div className='section__name'>
          <h2>6. OUTCOME & IMPACT</h2>
        </div>
        <p className='space'>A</p>
        <p>The redesign made it easier for users to explore and discover products, instead of relying on exact searches. Users could build selections faster and with more confidence. It also encouraged users to select more products per line item, better aligning with Dynamic Match best practices and improving overall campaign setup.</p>
        <img loading="lazy" src='images/criteo-logo-orange.svg' className='logo' alt=""></img>
      </div>
      <div>
        <Sidebar activeSection={activeSection} sections={sections} handleLinkClick={handleLinkClick} />
      </div>
    </div>
  )
}

export default ProductPage;