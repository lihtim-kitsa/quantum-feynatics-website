import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => (
  <section className="hero-section">
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
        <filter id="feynman-brand-blue" colorInterpolationFilters="sRGB">
          {/* Map blue ink to #3634b8 and retain white highlights and grain. */}
          <feColorMatrix type="matrix" values="0 0.7882352941 0 0 0.2117647059  0 0.7960784314 0 0 0.2039215686  0 0.2784313725 0 0 0.7215686275  0 0 0 1 0" />
        </filter>
      </defs>
    </svg>
    <div className="container">
      <div className="hero-top mono"><span>THE QUANTUM COLLECTIVE / BITS PILANI HYDERABAD</span><span>EST. IN CURIOSITY</span></div>
      <div className="hero-stage">
        <p className="hero-eyebrow mono">INSPIRED BY RICHARD FEYNMAN</p>
        <h1 className="hero-title"><span>QUANTUM</span><span>FEYNATICS</span></h1>
        <div className="hero-title hero-title-outline" aria-hidden="true"><span>QUANTUM</span><span>FEYNATICS</span></div>
        <svg className="hero-outline-overlay" aria-hidden="true" width="100%" height="100%">
          <defs>
            <filter id="portrait-highlights" colorInterpolationFilters="sRGB">
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer><feFuncR type="discrete" tableValues="0 1" /><feFuncG type="discrete" tableValues="0 1" /><feFuncB type="discrete" tableValues="0 1" /></feComponentTransfer>
            </filter>
            <mask id="hero-white-areas" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" style={{ maskType: 'luminance' }}>
              <image className="hero-highlight-mask" href="/images/feynman-poster.png" preserveAspectRatio="xMidYMax meet" filter="url(#portrait-highlights)" />
            </mask>
          </defs>
          <foreignObject width="100%" height="100%" mask="url(#hero-white-areas)">
            <div className="hero-title hero-title-outline hero-title-outline-blue"><span>QUANTUM</span><span>FEYNATICS</span></div>
          </foreignObject>
        </svg>
        <img className="feynman-portrait" src="/images/feynman-poster.png" alt="Richard Feynman seated before a chalkboard, in a blue and white poster treatment" width="2000" height="2500" fetchPriority="high" />
        <span className="hero-rail mono">QUESTION EVERYTHING</span>
        <span className="hero-rail hero-rail-right mono">EXPLORE THE POSSIBLE</span>
        <span className="hero-caption mono">RICHARD FEYNMAN / A SPIRIT OF CURIOSITY</span>
      </div>
      <div className="hero-bottom"><p>Demystifying quantum computing through projects, workshops, and collaborative research.</p><Link to="/#about" className="btn-minimal">Enter the quantum world ↓</Link></div>
    </div>
    <div className="hero-facts">
      <div className="quantum-emblem" aria-hidden="true">✳</div>
      <div><span className="mono">OUR HOME</span><strong>BITS PILANI<br />HYDERABAD CAMPUS</strong></div>
      <div><span className="mono">OUR APPROACH</span><strong>QUESTION. BUILD.<br />DISCOVER.</strong></div>
      <div><span className="mono">OUR UNIVERSE</span><strong>SMALL PARTICLES.<br />BIG POSSIBILITIES.</strong></div>
    </div>
  </section>
);
export default Hero;
