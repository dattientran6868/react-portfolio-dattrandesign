import React from "react";
import { BentoGrid } from "../Grid";
import { BentoRow } from "../Grid";
import { BentoCell } from "../Grid";
import './AboutPage.css';

const education = [
    {
        title: 'Diploma of Interactive Media Design',
        org: 'Seneca College',
        logo: '/images/about-seneca.png',
    },
    {
        title: 'Bachelor of Marketing',
        org: 'University of Economics Ho Chi Minh City',
        logo: '/images/about-ueh.png',
    },
    {
        title: 'AI Fluency for Creative Work',
        org: 'Claude Academy',
        logo: '/images/about-claude.png',
        url: 'https://academy.claude.com/verify/692857da3756b85527401f4e983fc90b',
    },
    {
        title: 'Building Effective Human-Agent Teams',
        org: 'Claude Academy',
        logo: '/images/about-claude.png',
        url: 'https://academy.claude.com/verify/f65e0995b4b2fef5325fc4908cff7d25',
    },
    {
        title: 'Team Essentials for Designing AI Solutions',
        org: 'IBM',
        logo: '/images/about-ibm.svg',
        url: 'https://www.credly.com/badges/09680b23-007f-4e81-a7ed-65b4acfb7dc1',
    },
    {
        title: 'Enterprise Design Thinking Practitioner',
        org: 'IBM',
        logo: '/images/about-ibm.svg',
        url: 'https://www.credly.com/badges/4957dd90-44d9-427d-9d02-d2a7aeb09320',
    },
];

export default function AboutPage() {
    return (
        <div className="about-page">
            <BentoGrid>
                {/* Row 6 – Type 2: wide rectangle (2/3) + square (1/3) */}
                <BentoRow type="thirds">
                    <BentoCell span={2}>
                        <div className="copy">
                            <h3 className="about__title">About me</h3>
                            <p>"I'm a Product Designer experienced in leveraging AI across the design process. I bring together interaction design, visual design, and research to shape intuitive digital products — reducing complexity, building trust, and driving real business outcomes."</p>
                        </div>
                    </BentoCell>
                    <BentoCell span={1}>
                        <img src='/images/home-images/avatar.webp' alt='' />
                    </BentoCell>
                </BentoRow>

                {/* Full width: Education and Certifications */}
                <BentoRow type="full" className="bento-row--auto">
                    <BentoCell span={1} className="bento-cell--auto">
                        <div className="education">
                            <h3 className="about__title">Education and Certifications</h3>
                            <ul className="education__list">
                                {education.map(({ title, org, logo, url }) => {
                                    const content = (
                                        <>
                                            <img
                                                className="education__logo"
                                                src={logo}
                                                loading="lazy"
                                                alt=""
                                            />
                                            <p className="education__text">
                                                <span className="education__name">{title}</span>
                                                <span className="education__org">{org}</span>
                                            </p>
                                        </>
                                    );

                                    return (
                                        <li className="education__item" key={title}>
                                            {url ? (
                                                <a
                                                    className="education__link"
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${title}, ${org} (opens in a new tab)`}
                                                >
                                                    {content}
                                                </a>
                                            ) : (
                                                <div className="education__row">{content}</div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </BentoCell>
                </BentoRow>

                {/* Row 4 – Type 2: three equal squares */}
                <BentoRow type="thirds">

                    <BentoCell span={1}>
                        <div className="contact-content">
                            <img src='/images/home-images/contact-text.webp' loading="lazy" alt='' />
                        </div>
                    </BentoCell>

                    <BentoCell
                        span={1}
                        hoverable
                        label="View my LinkedIn"
                        onView={() => window.open('https://www.linkedin.com/in/dattran6868/', '_blank')}
                    >
                        <div className="contact-content">
                            <img src='/images/home-images/linkedin.webp' loading="lazy" alt='' />
                            <p>LinkedIn</p>
                        </div>
                    </BentoCell>

                    <BentoCell
                        span={1}
                        hoverable
                        label="Copy email address"
                        onView={() => navigator.clipboard.writeText('dattientran6868@gmail.com')}
                    >
                        <div className="contact-content">
                            <img src='/images/home-images/mail.webp' loading="lazy" alt='' />
                            <p>dattientran6868@gmail.com</p>
                        </div>
                    </BentoCell>

                </BentoRow>
            </BentoGrid>
        </div>
    );
}