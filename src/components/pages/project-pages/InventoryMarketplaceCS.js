import React, { useState, useEffect, useMemo } from 'react';
import '../../../App.css';
import './InventoryMarketplace.css';
import Sidebar from '../../Sidebar';


function InventoryMarketplaceCS() {
    const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(() => [
    { id: 'section1', title: '1. Project overview' },
    { id: 'section2', title: '2. Discovery & analysis' },
    { id: 'section3', title: '3. Ideation & concept development' },
    { id: 'section4', title: '4. User testing, gathering feedbacks & iterations' },
    { id: 'section5', title: '5. Final design' },
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
      element.scrollIntoView();
    }
  };


	return (
		<div className="project__container black__container first__party__audience" >
            <div>
                <img src='images/project images/IM/IM-00.png' alt=""></img>
            </div>
		</div>
	)
}

export default InventoryMarketplaceCS;