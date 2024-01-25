import styled from 'styled-components';

export const Full = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
`;
export const Body = styled.div`
  min-height: 100vh;
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
