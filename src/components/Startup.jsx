import { useEffect, useRef } from 'react';
import './Startup.css';

const sessionKey = 'qf-startup-bb84-v2';
const transmissions = [
  { alice: '+', bob: '+', bit: '1' },
  { alice: '×', bob: '+', bit: '0' },
  { alice: '×', bob: '×', bit: '0' },
  { alice: '+', bob: '×', bit: '1' },
];

export default function Startup({ onComplete }) {
  const skipRef = useRef(null);
  const wordmarkRef = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const button = skipRef.current;
    const finish = () => {
      try { sessionStorage.setItem(sessionKey, 'true'); } catch { /* Storage may be disabled. */ }
      const returnFocus = document.activeElement === button;
      onComplete();
      if (returnFocus) requestAnimationFrame(() => document.querySelector('header a')?.focus());
    };
    const keydown = event => { if (event.key === 'Escape') finish(); };
    const preferenceChanged = event => { if (event.matches) finish(); };
    let titleAnimation;
    const growTitle = () => {
      const title = document.querySelector('main .hero-title');
      const wordmark = wordmarkRef.current;
      if (!title || !wordmark) return;
      const from = wordmark.getBoundingClientRect();
      const to = title.getBoundingClientRect();
      const fromStyle = getComputedStyle(wordmark);
      const toStyle = getComputedStyle(title);
      titleAnimation?.cancel();
      titleAnimation = wordmark.animate([
        { left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, fontSize: fromStyle.fontSize, transform: 'none' },
        { left: `${to.left}px`, top: `${to.top}px`, width: `${to.width}px`, fontSize: toStyle.fontSize, transform: 'none' },
      ], { duration: 700, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' });
    };
    const growTimer = window.setTimeout(growTitle, 2700);
    const timer = window.setTimeout(finish, 3650);
    button.addEventListener('click', finish);
    window.addEventListener('keydown', keydown);
    preference.addEventListener('change', preferenceChanged);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(growTimer);
      titleAnimation?.cancel();
      button.removeEventListener('click', finish);
      window.removeEventListener('keydown', keydown);
      preference.removeEventListener('change', preferenceChanged);
    };
  }, [onComplete]);
  return (
    <div className="quantum-startup" aria-label="BB84 inspired introduction: Alice sends qubits to Bob; they compare bases and retain matching-basis results as sifted bits.">
      <div className="tf-scene" aria-hidden="true">
        <p className="tf-heading mono">BB84 / QUANTUM KEY DISTRIBUTION</p>
        <div className="tf-channel">
          <div className="tf-node tf-alice"><span className="tf-node-icon">A</span><strong>ALICE</strong><span className="mono">PREPARE & SEND</span></div>
          <div className="tf-node tf-bob"><span className="tf-node-icon">B</span><strong>BOB</strong><span className="mono">CHOOSE BASIS & MEASURE</span></div>
          {transmissions.map((item, index) => <span key={index} className="bb-qubit" style={{ '--pulse-delay': `${index * .16}s` }}>{item.alice}</span>)}
        </div>
        <div className="bb-sifting mono">
          <span className="bb-row-label">ALICE / BOB</span>
          {transmissions.map((item, index) => <span key={index} className={`bb-basis ${item.alice === item.bob ? 'bb-keep' : 'bb-discard'}`}><span>{item.alice} / {item.bob}</span><strong>{item.alice === item.bob ? item.bit : '—'}</strong></span>)}
        </div>
        <p className="tf-note bb-note mono">COMPARE BASES → SIFTED BITS: 10</p>
      </div>
      <div ref={wordmarkRef} className="startup-wordmark" aria-hidden="true"><span>QUANTUM</span><span>FEYNATICS</span></div>
      <span className="startup-caption mono">CONNECTED BY CURIOSITY.</span>
      <button ref={skipRef} type="button" className="startup-skip mono">SKIP INTRO ↗</button>
    </div>
  );
}
