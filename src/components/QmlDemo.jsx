import { useState } from 'react';
import './QmlDemo.css';

const initialPoints = [
  { x: -.8, y: .18, label: 0 }, { x: -.4, y: .28, label: 0 },
  { x: 0, y: .16, label: 0 }, { x: .4, y: .24, label: 0 }, { x: .8, y: .12, label: 0 },
  { x: -.75, y: .8, label: 1 }, { x: -.35, y: .68, label: 1 },
  { x: .05, y: .75, label: 1 }, { x: .45, y: .85, label: 1 }, { x: .8, y: .7, label: 1 },
];
const initialParameters = [-.6, 1, .5];
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
// |0> → Ry(πy) → Ry(θ₀ + θ₁x + θ₂x²) → <Z> = cos(total angle).
const angle = (point, parameters) => Math.PI * point.y + parameters[0] + parameters[1] * point.x + parameters[2] * point.x ** 2;
const predict = (point, parameters) => Math.cos(angle(point, parameters)) >= 0 ? 0 : 1;

export default function QmlDemo() {
  const [points, setPoints] = useState(initialPoints);
  const [parameters, setParameters] = useState(initialParameters);
  const [steps, setSteps] = useState(0);
  const movePoint = (index, x, y) => setPoints(current => current.map((point, i) => i === index ? { ...point, x: clamp(x, -1, 1), y: clamp(y, 0, 1) } : point));
  const drag = (event, index) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const svg = event.currentTarget.ownerSVGElement;
    const cursor = svg.createSVGPoint();
    cursor.x = event.clientX; cursor.y = event.clientY;
    const local = cursor.matrixTransform(svg.getScreenCTM().inverse());
    movePoint(index, (local.x - 30) / 220 - 1, (270 - local.y) / 240);
  };
  const train = () => {
    let next = [...parameters];
    for (let step = 0; step < 200; step++) {
      const gradient = [0, 0, 0];
      points.forEach(point => {
        const phase = angle(point, next);
        const residual = Math.cos(phase) - (point.label === 0 ? 1 : -1);
        [1, point.x, point.x ** 2].forEach((feature, i) => { gradient[i] += -2 * residual * Math.sin(phase) * feature / points.length; });
      });
      next = next.map((value, i) => value - .08 * gradient[i]);
    }
    setParameters(next); setSteps(current => current + 200);
  };
  const accuracy = Math.round(100 * points.filter(point => predict(point, parameters) === point.label).length / points.length);
  // Render every zero of cos(angle) in the displayed domain, not just one branch.
  const boundaries = [-1, 0, 1].map(branch => Array.from({ length: 101 }, (_, i) => {
    const x = i / 50 - 1;
    const y = (.5 + branch) - (parameters[0] + parameters[1] * x + parameters[2] * x * x) / Math.PI;
    return `${i === 0 ? 'M' : 'L'} ${30 + (x + 1) * 220} ${270 - y * 240}`;
  }).join(' '));

  return (
    <div className="qml-demo">
      <div className="qml-copy">
        <span className="mono">QUANTUM MACHINE LEARNING / PLAYGROUND</span>
        <h3>Teach a qubit.<br />Move the boundary.</h3>
        <p>Drag a point, then train the circuit to fit its class. Keyboard: focus a point and use the arrow keys.</p>
        <div className="qml-circuit mono" aria-label="Zero state, Y rotation encoding y, trainable Y rotation using x, then Z measurement">|0⟩ → Rᵧ(πy) → Rᵧ(θ₀ + θ₁x + θ₂x²) → ⟨Z⟩</div>
        <div className="qml-actions"><button type="button" className="btn-minimal" onClick={train}>Train +200 steps ↗</button><button type="button" className="btn-minimal" onClick={() => { setPoints(initialPoints); setParameters(initialParameters); setSteps(0); }}>Reset</button></div>
        <p className="mono" role="status">Training accuracy {accuracy}% · {steps} steps</p>
        <p className="qml-model-note">Ideal one-qubit toy model, evaluated in your browser with no hardware or noise. Accuracy is on these points only. No quantum advantage implied.</p>
        <a className="qml-reference" href="https://doi.org/10.1103/PhysRevA.101.032308" target="_blank" rel="noreferrer">Explore circuit-based classifiers: Schuld et al., Phys. Rev. A (2020) ↗</a>
      </div>
      <div className="qml-plot">
        <svg viewBox="0 0 500 300" role="group" aria-label="Interactive classification plot; circles are class zero, squares are class one">
          <defs><clipPath id="qml-plot-clip"><rect x="20" y="20" width="460" height="260" /></clipPath></defs>
          <path d="M30 30 V270 H470" className="qml-axis" />
          <g clipPath="url(#qml-plot-clip)">{boundaries.map((path, index) => <path key={index} d={path} className="qml-boundary" />)}</g>
          {points.map((point, index) => <g key={index} role="button" tabIndex={0} aria-label={`Point ${index + 1}, class ${point.label}, x ${point.x.toFixed(2)}, y ${point.y.toFixed(2)}`} className={`qml-point qml-class-${point.label} ${predict(point, parameters) !== point.label ? 'qml-mismatch' : ''}`} transform={`translate(${30 + (point.x + 1) * 220}, ${270 - point.y * 240})`}
            onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.focus(); }} onPointerMove={event => drag(event, index)} onPointerUp={event => event.currentTarget.releasePointerCapture(event.pointerId)}
            onKeyDown={event => { const direction = { ArrowLeft: [-.04, 0], ArrowRight: [.04, 0], ArrowUp: [0, .04], ArrowDown: [0, -.04] }[event.key]; if (direction) { event.preventDefault(); movePoint(index, point.x + direction[0], point.y + direction[1]); } }}>
            <circle r="18" className="qml-hit" />{point.label === 0 ? <circle r="8" /> : <rect x="-8" y="-8" width="16" height="16" />}
          </g>)}
          <text x="460" y="295" className="qml-axis-label">x</text><text x="8" y="35" className="qml-axis-label">y</text>
        </svg>
        <p className="mono qml-legend">● CLASS 0 · ■ CLASS 1 · DASHED LINE: DECISION BOUNDARY</p>
      </div>
    </div>
  );
}
