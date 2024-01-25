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

export const Full = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
`;
export const Bodysec = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(#2b1055, #7597de);
  overflow-x: hidden;
`;

export const Header = styled.div``;
export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
  }
`;

export const SectionImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;

  &.moon {
    mix-blend-mode: screen;
  }

  &.mountainFront {
    z-index: 10;
  }
`;
export const MoonImg = styled.img`
  mix-blend-mode: screen;
`;
export const Image = styled.img.attrs({ id: 'moon', mixBlendMode: 'screen' })`
  width: 100%; // 이미지가 부모의 크기를 가질 수 있도록 너비를 100%로 설정
  height: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  background: #fff;
  color: #2b1055;
  transform: translateY(100px);
  display: inline-block;
  position: fixed;
`;

export const ExplainText = styled.div`
  font-size: 3vw;
  color: #fff;
  white-space: nowrap;
  z-index: 9;
  left: -200rem;
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;
