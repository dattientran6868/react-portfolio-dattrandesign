
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLazyVideo } from "../useLazyVideo";
import { BentoGrid } from "../Grid";
import { BentoRow } from "../Grid";
import { BentoCell } from "../Grid";
import './HomePage.css';
import ReactCompareImage from "react-compare-image";
import Modal from "../Modal";



export default function HomePage() {
  const [productSelectionModalOpen, setproductSelectionModalOpen] = useState(false);
  const [freeMindModalOpen, setfreeMindModalOpen] = useState(false);
  const [logoModalOpen, setlogoModalOpen] = useState(false);
  const [logoFreemindModalOpen, setlogoFreemindModalOpen] = useState(false);
  const [chartModalOpen, setChartModalOpen] = useState(false);
  const [audienceModalOpen, setaudienceModalOpen] = useState(false);
  const [previewGradientModalOpen, setpreviewGradientModalOpen] = useState(false);
  const [waveGradientModalOpen, setwaveGradientModalOpen] = useState(false);
  const [mercuryGradientModalOpen, setmercuryGradientModalOpen] = useState(false);
  const [measurementCardModalOpen, setmeasurementCardModalOpen] = useState(false);
  const [stockAppModalOpen, setstockAppModalOpen] = useState(false);
  const chartVideoRef = useLazyVideo();
  const breathingVideoRef = useLazyVideo();
  const logoVideoRef = useLazyVideo();
  const logoFreemindVideoRef = useLazyVideo();
  const productSelectionVideoRef = useLazyVideo();
  const audienceVideoRef = useLazyVideo();
  const previewGradientVideoRef = useLazyVideo();
  const waveGradientVideoRef = useLazyVideo();
  const mercuryGradientVideoRef = useLazyVideo();
  const navigate = useNavigate();

  return (
    <div className="Home-page">
      <BentoGrid>

        {/* Row 1 – Type full */}
        <BentoRow type="full">
          <BentoCell>
            <div className="hero-cell">
              <video
                playsInline autoPlay loop muted src="/images/home-images/gradient3.webm"
              />
              <div className="hero-content">
                <h1>Hi, I'm Dat Tran,</h1>
                <h1>A product designer & builder</h1>
                <p>Welcome to my portfolio</p>
              </div>
            </div>
          </BentoCell>
        </BentoRow>

        {/* Row 2 – Type full */}
        <BentoRow type="full">
          <BentoCell
            hoverable
            label="Inventory marketplace"
            href="/nvntrmrktplc">
            <img src='/images/home-images/i-im.webp' loading="lazy" alt='' />
          </BentoCell>
        </BentoRow>

        {/* Row 3 – Type 1: two equal halves */}
        <BentoRow type="halves">
          <BentoCell
            hoverable
            label="Product selection page"
            href="/prdctpg">
            <img src='/images/home-images/c-pp.webp' loading="lazy" alt='' />
          </BentoCell>
          <BentoCell
            hoverable
            label="AI-powered Audience & Creative insights"
            href="/dncrcmmndtn">
            <img src='/images/home-images/i-ai.webp' loading="lazy" alt='' />
          </BentoCell>
        </BentoRow>
        {/* Row 3 – Type 1: two equal halves */}


        <BentoRow type="halves">

          <BentoCell
            hoverable
            label="Facebook & Instagram integration"
            href="/fcbknstgrmntgrtn">
            <img src='/images/home-images/i-fi.webp' loading="lazy" alt='' />
          </BentoCell>

          <BentoCell
            hoverable
            label="Footfall measurement"
            href="/ftfllmsrmnt">
            <img src='/images/home-images/i-fm.webp' loading="lazy" alt='' />
          </BentoCell>

        </BentoRow>

        {/* Row 4 – Type 2: three equal squares */}



        <BentoRow type="thirds">

          <BentoCell span={1}
            hoverable
            label="3D personal logo">
            <div className="square-video-full-height" onClick={() => setlogoModalOpen(true)} style={{ cursor: "pointer" }}>
              <video ref={logoVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/d-lg8.webm" />
            </div>
          </BentoCell>

          <BentoCell span={1}
            hoverable
            label="Preview gradient styles">
            <div className="square-video" onClick={() => setpreviewGradientModalOpen(true)} style={{ cursor: "pointer" }}>
              <video playsInline autoPlay loop muted src="/images/home-images/g-6.webm" />
            </div>
          </BentoCell>

          <BentoCell span={1}
            hoverable
            label="AI-powered Cost guidance tool">
            <div className="square-video" onClick={() => setChartModalOpen(true)} style={{ cursor: "pointer" }}>
              <video ref={chartVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/i-im-c.webm" />
            </div>
          </BentoCell>



        </BentoRow>



        {/* Row 5 – Type 1: two equal halves */}
        <BentoRow type="halves">
          {/* <BentoCell
            hoverable
            label="Dynamic gradient studio"
            href="/dnmcgrdnt"
          >
            <div className="square-video-full-height">
              <video playsInline autoPlay loop muted src="/images/home-images/dg-1.webm" />
            </div>
          </BentoCell> */}

          <BentoCell
            span={1}
            hoverable
            label="Fairshare: Insider Trading App"
            href="/frshr">
            <img src='/images/home-images/s.png' loading="lazy" alt='' />
          </BentoCell>


          <BentoCell
            span={1}
            hoverable
            className="bento-cell--no-scale"
            label="FreeMind iOS app"
            onView={() => navigate('/frmnd')}    // ← button navigates
            showButton={true}
          >
            <div style={{ cursor: "pointer", width: "100%", height: "100%" }}>
              <ReactCompareImage
                leftImage="/images/home-images/f-dm2.png"
                rightImage="/images/home-images/f-lm2.png"
              />
            </div>
          </BentoCell>
        </BentoRow>

        <BentoRow type="thirds">
          <BentoCell
            hoverable
            label="Breathing exercise"
            onClick={() => setfreeMindModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full-height" >
              <video ref={breathingVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/f-br2.webm" />
            </div>
          </BentoCell>

          <BentoCell span={2}
            hoverable
            label="Wave gradient"
            onClick={() => setwaveGradientModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full-width" >
              <video ref={waveGradientVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/g-4.webm" />
            </div>
          </BentoCell>
        </BentoRow>

        {/* Row 5 – Type 1: two equal halves */}
        <BentoRow type="halves">
          <BentoCell
            hoverable
            label="Support center"
            href="/spprtcntr">
            <img src='/images/home-images/i-sc.webp' loading="lazy" alt='' />
          </BentoCell>
          <BentoCell
            hoverable
            label="Design System: Component Library"
            href="/dsgnsstm">
            <img src='/images/home-images/i-ds.webp' loading="lazy" alt='' />
          </BentoCell>
        </BentoRow>

        {/* <BentoRow type="halves">
          <BentoCell
            hoverable
            label="First-party audience onboarding"
            href="/frstprtdncnbrdng">
            <img src='/images/home-images/i-fpa.webp' loading="lazy" alt='' />
          </BentoCell>
          <BentoCell
            hoverable
            label="Dynamic gradient studio"
            href="/dnmcgrdnt"
          >
            <div className="square-video-full-height">
              <video playsInline autoPlay loop muted src="/images/home-images/dg-1.webm" />
            </div>
          </BentoCell>
        </BentoRow> */}

        <BentoRow type="thirds">
          <BentoCell span={2}
            hoverable
            label="Mercury gradient"
            onClick={() => setmercuryGradientModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full-width" >
              <video ref={mercuryGradientVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/g-5.webm" />
            </div>
          </BentoCell>

          <BentoCell span={1}
            hoverable
            label="Product cards"
            onClick={() => setproductSelectionModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full-height" >
              <video ref={productSelectionVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/p-s3.webm" />
            </div>
          </BentoCell>


        </BentoRow>

        {/* Row 7 – Type 2: three equal squares */}
        <BentoRow type="thirds">

          <BentoCell span={1}
            hoverable
            label="3D FreeMind logo"
            onClick={() => setlogoFreemindModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full-height">
              <video ref={logoFreemindVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/f-lg3.webm" />
            </div>
          </BentoCell>
          <BentoCell span={1}
            hoverable
            label="AI-powered insights panel"
            onClick={() => setaudienceModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <div className="square-video-full-height" >
              <video ref={audienceVideoRef} playsInline autoPlay loop muted data-src="/images/home-images/i-ai-panel.webm" />
            </div>
          </BentoCell>

          <BentoCell
            hoverable
            label="Measurement card"
            onClick={() => setmeasurementCardModalOpen(true)}
            style={{ cursor: "pointer" }}>
            <img src="images/home-images/Illumin-footfall-card.png"></img>
          </BentoCell>
        </BentoRow>

        {/* Row 7 – Type 2: three equal squares */}
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

      {/* Modals — outside BentoRow */}

      <Modal
        isOpen={productSelectionModalOpen}
        onClose={() => setproductSelectionModalOpen(false)}
        size="md"
        buttonLabel="View Production selection page"
        onButtonClick={() => navigate('/prdctpg')}
      >
        {productSelectionModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home-images/p-s3.webm" />
          </div>
        )}
        <p>Product cards in the tile view that I explored during the design process of the product selection page redesign.</p>
      </Modal>

      <Modal
        isOpen={freeMindModalOpen}
        onClose={() => setfreeMindModalOpen(false)}
        size="md"
        buttonLabel="View FreeMind app"
        onButtonClick={() => navigate('/frmnd')}
      >
        {freeMindModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home-images/f-br2.webm" />
          </div>
        )}
        <p>The box breathing exercise helped users relax in the FreeMind app.</p>
      </Modal>

      <Modal
        isOpen={logoModalOpen}
        onClose={() => setlogoModalOpen(false)}
        size="md"
        onButtonClick={() => navigate('/freemind')}
      >
        {logoModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home-images/d-lg8.webm" />
          </div>
        )}
        <p>3D metallic version of my logo</p>
      </Modal>

      <Modal
        isOpen={logoFreemindModalOpen}
        onClose={() => setlogoFreemindModalOpen(false)}
        size="md"
        onButtonClick={() => navigate('/freemind')}
      >
        {logoFreemindModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home-images/f-lg3.webm" />
          </div>
        )}
        <p>Freemind logo with a glassmorphism design.</p>
      </Modal>

      <Modal
        isOpen={chartModalOpen}
        onClose={() => setChartModalOpen(false)}
        size="md"
        buttonLabel="View Inventory marketplace"
        onButtonClick={() => navigate('/nvntrmrktplc')}
      >
        {chartModalOpen && (
          <div>
            <video playsInline autoPlay loop muted src="/images/home-images/i-im-c.webm" />
          </div>
        )}
        <p>The cost guidance chart showed users how bid price affected win rate in the Inventory Marketplace.</p>
      </Modal>

      <Modal
        isOpen={audienceModalOpen}
        onClose={() => setaudienceModalOpen(false)}
        size="md"
        buttonLabel="View AI-powered Audience & Creative insights"
        onButtonClick={() => navigate('/nvntrmrktplc')}
      >
        {audienceModalOpen && (
          <div>
            <video className="square-video" playsInline autoPlay loop muted src="/images/home-images/i-ai-panel.webm" />
          </div>
        )}
        <p>The insights panel where users can view the potential reach of their tactic and easily add audiences to achieve that reach.</p>
      </Modal>
      <Modal
        isOpen={previewGradientModalOpen}
        onClose={() => setpreviewGradientModalOpen(false)}
        size="md"
        buttonLabel="View Dynamic gradient studio"
        onButtonClick={() => navigate('/dnmcgrdnt')}
      >
        {previewGradientModalOpen && (
          <div>
            <video className="square-video" playsInline autoPlay loop muted src="/images/home-images/g-6.webm" />
          </div>
        )}
        <p>Hovering over the tab displays a preview of the gradient in the Dynamic gradient studio.</p>
      </Modal>

      <Modal
        isOpen={waveGradientModalOpen}
        onClose={() => setwaveGradientModalOpen(false)}
        size="lg"
        buttonLabel="View Dynamic gradient studio"
        onButtonClick={() => navigate('/dnmcgrdnt')}
      >
        {waveGradientModalOpen && (
          <div>
            <video className="square-video" playsInline autoPlay loop muted src="/images/home-images/g-4.webm" />
          </div>
        )}
        <div className="text-in-modal">
          <p>The wave gradient that I created in the Dynamic gradient studio.</p>
        </div>
      </Modal>

      <Modal
        isOpen={mercuryGradientModalOpen}
        onClose={() => setmercuryGradientModalOpen(false)}
        size="lg"
        buttonLabel="View Dynamic gradient studio"
        onButtonClick={() => navigate('/dnmcgrdnt')}
      >
        {mercuryGradientModalOpen && (
          <div>
            <video className="square-video" playsInline autoPlay loop muted src="/images/home-images/g-5.webm" />
          </div>
        )}
        <div className="text-in-modal">
          <p>The mercury gradient that I created in the Dynamic gradient studio.</p>
        </div>
      </Modal>

      <Modal
        isOpen={measurementCardModalOpen}
        onClose={() => setmeasurementCardModalOpen(false)}
        size="md"
        buttonLabel="View Footfall measurement"
        onButtonClick={() => navigate('/ftfllmsrmnt')}
      >
        {measurementCardModalOpen && (
          <div>
            <img src="/images/home-images/Illumin-footfall-card.png" />
          </div>
        )}
        <p>I designed the measurement card for the Measurement Marketplace, and it was later reused in the Footfall Measurement feature.
        </p>
      </Modal>

      <Modal
        isOpen={stockAppModalOpen}
        onClose={() => setstockAppModalOpen(false)}
        size="lg"
      // buttonLabel="View Footfall measurement"
      // onButtonClick={() => navigate('/ftfllmsrmnt')}
      >
        {stockAppModalOpen && (
          <div>
            <img src="/images/home-images/s2.png" />
          </div>
        )}
        <p>(Coming soon) I designed and developed an iOS app that helps retail investors track insider trading activity in public companies, making investment research more transparent and accessible.
        </p>
      </Modal>

    </div>
  );
}