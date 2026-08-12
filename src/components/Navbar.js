import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const workProjects = [
	{ label: 'Product Selection Page', href: '/prdctpg', img: '/images/criteo-icon.svg' },
	{ label: 'Inventory Marketplace', href: '/nvntrmrktplc', img: '/images/illumin-icon.svg' },
	{ label: 'Facebook & Instagram Integration', href: '/fcbknstgrmntgrtn', img: '/images/illumin-icon.svg' },
	{ label: 'AI-powered Insights', href: '/dncrcmmndtn', img: '/images/illumin-icon.svg' },
	{ label: 'Footfall Measurement', href: '/ftfllmsrmnt', img: '/images/illumin-icon.svg' },
	{ label: 'Support Center', href: '/spprtcntr', img: '/images/illumin-icon.svg' },
	{ label: 'First Party Audience Onboarding', href: '/frstprtdncnbrdng', img: '/images/illumin-icon.svg' },
	{ label: 'Design System: Component Library', href: '/dsgnsstm', img: '/images/illumin-icon.svg' },
	{ label: 'Wholesale Ecommerce Website', href: '/dchjpn', img: '/images/dj-text-icon.svg' },
	{ label: 'Golden Pocket Interest Calculator', href: '/mm', img: '/images/momo-logo.svg' },
];

const personalProjects = [
	{ label: 'FreeMind', href: '/frmnd', img: '/images/freemind-icon.svg' },
	{ label: 'FairShare', href: '/frshr', img: '/images/fairshare-icon.svg' },
	{ label: 'Dynamic Gradient Studio', href: '/dnmcgrdnt', img: '/images/dynamicgradient-icon.svg' },
];

function Navbar() {
	const [click, setClick] = useState(false);
	const [workOpen, setWorkOpen] = useState(false);
	const [personalOpen, setPersonalOpen] = useState(false);
	const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
	const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => {
		setClick(false);
		setMobileWorkOpen(false);
		setMobilePersonalOpen(false);
	};

	const renderProjectItem = (p, closeFn) => (
		<NavLink
			key={p.href}
			to={p.href}
			className='dropdown-item'
			onClick={closeFn}
		>
			<img
				src={p.img}
				alt=''
				className='dropdown-thumb'
			/>
			<span className='dropdown-label'>{p.label}</span>
		</NavLink>
	);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>

					<NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<img src='/images/logo.png' alt='logo' />
					</NavLink>

					{/* ── Desktop menu ── */}
					<div>
						<ul className='desktop-menu'>

							{/* Work dropdown */}
							<li
								className='nav-item nav-item--dropdown'
								onMouseEnter={() => setWorkOpen(true)}
								onMouseLeave={() => setWorkOpen(false)}
							>
								<button className='nav-links nav-links--dropdown-trigger'>
									Work <i className='fas fa-chevron-down' style={{ fontSize: '0.65rem' }} />
								</button>

								{workOpen && (
									<div className='dropdown-panel'>
										{workProjects.map((p) => renderProjectItem(p, () => setWorkOpen(false)))}
									</div>
								)}
							</li>

							{/* Personal dropdown */}
							<li
								className='nav-item nav-item--dropdown'
								onMouseEnter={() => setPersonalOpen(true)}
								onMouseLeave={() => setPersonalOpen(false)}
							>
								<button className='nav-links nav-links--dropdown-trigger'>
									Personal <i className='fas fa-chevron-down' style={{ fontSize: '0.65rem' }} />
								</button>

								{personalOpen && (
									<div className='dropdown-panel'>
										{personalProjects.map((p) => renderProjectItem(p, () => setPersonalOpen(false)))}
									</div>
								)}
							</li>

							<li className='nav-item'>
								<NavLink to='/about' className='nav-links'>About</NavLink>
							</li>

						</ul>
					</div>

					{/* ── Mobile hamburger ── */}
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>

						{/* Work accordion */}
						<li className='nav-item nav-item--accordion'>
							<button
								className='nav-links nav-links--accordion-trigger'
								onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
							>
								Work
								<i
									className='fas fa-chevron-down accordion-chevron'
									style={{ transform: mobileWorkOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
								/>
							</button>
							<ul className={mobileWorkOpen ? 'accordion-panel accordion-panel--open' : 'accordion-panel'}>
								{workProjects.map((p) => (
									<li key={p.href}>
										<NavLink to={p.href} className='accordion-link' onClick={closeMobileMenu}>
											{p.label}
										</NavLink>
									</li>
								))}
							</ul>
						</li>

						{/* Personal accordion */}
						<li className='nav-item nav-item--accordion'>
							<button
								className='nav-links nav-links--accordion-trigger'
								onClick={() => setMobilePersonalOpen(!mobilePersonalOpen)}
							>
								Personal
								<i
									className='fas fa-chevron-down accordion-chevron'
									style={{ transform: mobilePersonalOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
								/>
							</button>
							<ul className={mobilePersonalOpen ? 'accordion-panel accordion-panel--open' : 'accordion-panel'}>
								{personalProjects.map((p) => (
									<li key={p.href}>
										<NavLink to={p.href} className='accordion-link' onClick={closeMobileMenu}>
											{p.label}
										</NavLink>
									</li>
								))}
							</ul>
						</li>

						<li className='nav-item'>
							<NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>About</NavLink>
						</li>
					</ul>

				</div>
			</nav>
		</>
	);
}

export default Navbar;