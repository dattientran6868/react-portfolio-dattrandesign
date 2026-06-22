
import React from "react";
import { BentoGrid } from "../Grid";
import { BentoRow } from "../Grid";
import { BentoCell } from "../Grid";
import './AboutPage.css';


export default function AboutPage() {
    return (
        <div className="about-page">
            <BentoGrid>
                {/* Row 6 – Type 2: wide rectangle (2/3) + square (1/3) */}
                <BentoRow type="thirds">
                    <BentoCell span={2}>
                        <div className="copy">
                            <p>"I'm a Product Designer experienced in leveraging AI across the design process. I bring together interaction design, visual design, and research to shape intuitive digital products — reducing complexity, building trust, and driving real business outcomes."</p>
                        </div>
                    </BentoCell>
                    <BentoCell span={1}>
                        <img src='/images/home-images/avatar.webp' alt='' />
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