// styles.tsx

import styled from 'styled-components';
import logo from '../../../assets/LogoAndLetter.svg';

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 달 나오는 두 번째 페이지

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
  overflow-y: hidden;
  scroll-behavior: smooth;
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
  padding: 0.5rem 3rem;
  border-radius: 3rem;
  background: #000000;
  color: #fff;
  /* transform: translateY(10rem); */
  display: inline-block;
  position: absolute;
  margin-top: 2rem;
  z-index: 11;
  top: 30rem;
  height: 3rem;
`;

export const ExplainText = styled.div`
  font-size: 2.5vw;
  color: #fff;
  white-space: nowrap;
  z-index: 13;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  justify-content: center;
  display: flex;
  top: 25rem;
  /* transform: translateY(5rem); */
`;

//=========================+++++++====================================++++++++++++=====================
// 카드 flip

export const Body = styled.div`
  background-color: #0e0d0c;
  color: linear-gradient(93deg, #46a6ff -11.56%, rgba(251, 70, 255, 0.21) 117.52%);
`;

export const MainContent = styled.div`
  width: 100%;
  height: 500vh;
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
  font-size: 1rem;
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
  font-size: 1.5rem;
  flex-direction: column;
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
