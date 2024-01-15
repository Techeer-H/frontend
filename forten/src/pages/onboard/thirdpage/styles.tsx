// styles.tsx

import styled from 'styled-components';
import logo from '../../../assets/LogoAndLetter.svg';

export const Body = styled.div`
  background-color: #0e0d0c;
  font-family: 'Titan one', cursive;
  color: linear-gradient(93deg, #46a6ff -11.56%, rgba(251, 70, 255, 0.21) 117.52%);
`;

export const MainContent = styled.div`
  width: 100%;
  height: 500vh;
  margin: 100vh 0;
  border: 1px solid red;
`;

export const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardFrame = styled.div`
  position: absolute;
  width: 95vw;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-align: center;
  transform-style: preserve-3d;
  position: relative;
  transform: perspective(100vw) translateX(100vw) rotateY(180deg);
  transition: transform 0.1s;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1vw;
  overflow: hidden;
  backface-visibility: hidden;
  background: linear-gradient(to bottom, #9e9bf7 -50.35%, #ffeded 60.89%);
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
// #94c7f6 5%, rgba(251, 70, 255, 0.21) 117.52%
export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1vw;
  overflow: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background:
    linear-gradient(to bottom, #94c7f6 5%, rgba(251, 70, 255, 0.21) 117.52%),
    url(${logo}) center/contain no-repeat;
`;

export const Logo = styled.img`
  background-image: url(${logo});
`;
