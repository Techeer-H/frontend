import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid:
    'main' 100vh
    / auto;
  place-items: center;
  background: radial-gradient(220% 105% at top center, #4e6085 10%, #ffffff);
`;

const H1 = styled.h1`
  grid-area: main;
  font: 8vmin/1 'Libre Franklin';
  font-weight: 700;
  letter-spacing: 1rem;
  text-shadow: 0 0 1px #ffffff;
  mix-blend-mode: overlay;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  text-decoration: none;
  white-space: nowrap;
`;

const H3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-right: 0rem;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-shadow: 0 0 1px #000000;
    stop-color: 2px #000000;
    stroke: 2px #000000;
  }
`;

const Svg = styled.svg`
  grid-area: main;
  height: 100%;
  width: 100%;
`;

const Component = () => {
  return (
    <Container>
      <Svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="#ff0" />
            <stop offset="100%" stopColor="#ff00" />
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stop-color="#0ff" />
            <stop offset="100%" stop-color="#0ff0" />
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stop-color="#f0f" />
            <stop offset="100%" stop-color="#f0f0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="17s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
          <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="19s"
            repeatCount="indefinite"
          />
        </rect>
      </Svg>

      <H1>
        <Link to="/onboarding" className="project-name">
          For:TEN
          <br />
          <H3>- click -</H3>{' '}
        </Link>
      </H1>
    </Container>
  );
};

export default Component;
