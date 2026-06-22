import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './AppStyle.css';
import React from 'react';
import ScrollToTop from './ScrollToTop';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Unknown from './components/pages/project-pages/Unknown';
import FI from './components/pages/project-pages/FI';
import FirstPartyAudience from './components/pages/project-pages/FirstPartyAudience';
import FootfallMeasurement from './components/pages/project-pages/FootfallMeasurement';
import InventoryMarketplace from './components/pages/project-pages/InventoryMarketplace';
import AudienceRecommendation from './components/pages/project-pages/AudienceRecommendation';
import ProductPage from './components/pages/project-pages/ProductPage';
import SupportCenter from './components/pages/project-pages/SupportCenter';
import ComponentLibrary from './components/pages/project-pages/ComponentLibrary';
import FreeMind from './components/pages/project-pages/FreeMind';
import DynamicGradient from './components/pages/project-pages/DynamicGradient';
import FairShare from './components/pages/project-pages/FairShare';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';




function AppContent() {
	const location = useLocation();
	const hideNavbar = location.pathname === '/';
	return (
		<>
			{!hideNavbar && <Navbar />}
			<Routes>
				<Route path='/' element={<Unknown />} />
				<Route path='/portfolio0' element={<Home />} />
				<Route path='/portfolio/about0' element={<About />} />
				<Route path='/portfolio/projects' element={<Projects />} />
				<Route path='/portfolio' element={<HomePage />} />
				<Route path='/portfolio/about' element={<AboutPage />} />
				{/* <Route path='/1368' element={ <ProtectedRoute> <Home /> </ProtectedRoute>} /> */}
				<Route path='/fcbknstgrmntgrtn' element={<FI />} />
				<Route path='/frstprtdncnbrdng' element={<FirstPartyAudience />} />
				<Route path='/ftfllmsrmnt' element={<FootfallMeasurement />} />
				<Route path='/nvntrmrktplc' element={<InventoryMarketplace />} />
				<Route path='/dncrcmmndtn' element={<AudienceRecommendation />} />
				<Route path='/spprtcntr' element={<SupportCenter />} />
				<Route path='/1' element={<ComponentLibrary />} />
				<Route path='/prdctpg' element={<ProductPage />} />
				<Route path='/frmnd' element={<FreeMind />} />
				<Route path='/dnmcgrdnt' element={<DynamicGradient />} />
				<Route path='/frshr' element={<FairShare />} />
				<Route path="*" element={<Navigate to="/" replace />} />

			</Routes>
		</>
	);
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Analytics />
			<AppContent />
		</Router>
	);
}

export default App;
