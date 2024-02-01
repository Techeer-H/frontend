import styled from 'styled-components';
import LoginImg from '../../../assets/LoginImgV3.svg';

export const Section = styled.section`
  display: flex;
  background-image: url(${LoginImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 25rem;
  height: 32.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2.4rem;
  border-radius: 1rem;
  /* background: #fff;
  border-bottom: 2px solid #bcb1ff; */
`;

export const Form = styled.form`
  display: flex;
  width: 24rem;
  height: 32.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const LogoImage = styled.img`
  width: 12rem;
  height: 5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const TitleSecondary = styled.h2`
  font-size: 1.875rem;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const TextSecondary = styled.p`
  margin: 0rem 0 2rem -0.3rem;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 700;
  color: #ffffff;
`;

export const Link = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: #32fff8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  gap: 2.4rem;
  height: 3rem;

  .errorMessageWrap {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 18rem;
  height: 2.5rem;
  padding: 1rem 1rem;
  border-radius: 0.375rem;
  border-radius: 1.2rem;
  border: 1.328px solid #e3e3e3;
  background: #fff;
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
  &:focus {
    outline: none;
    border-color: #00ffc3;
    box-shadow: 0 0 0 4px rgba(0, 255, 217, 0.3);
  }
`;

export const Button = styled.div`
  .bottomButton {
    width: 18rem;
    height: 2.4rem;
    border-radius: 1.2em;
    border: none;
    background: #9590b6;
    color: #ffffff;
    margin-bottom: 1rem;
    margin-top: 1rem;

    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background: #e0baff;
      color: #292929;
    }
  }

  .bottomButton:disabled {
    background: #dadada;
    color: white;
  }
`;

export const RightColumn = styled.div`
  width: 25rem;
  height: 32.5rem;
  border-radius: 1rem;
  background-image: url(${LoginImg});
`;

export const ImageOverlay = styled.div`
  position: absolute;
  width: 24.9rem;
  height: 32.5rem;
  border-radius: 1rem;
  margin-left: 0.1rem;
  background-image: linear-gradient(to top, #222222, transparent);
`;

export const TextContent = styled.div`
  position: relative;
  max-width: 36rem;
  margin: auto;
  text-align: center;
`;

export const Title = styled.p`
  line-height: normal;
  font-weight: 800;
  color: #ffffff;
  position: absolute;
  left: 1.1rem;
  top: 27rem;
  @media (min-width: 400px) {
    font-size: 0.1rem;
  }
`;
export const Title2 = styled.p`
  line-height: normal;
  font-weight: 800;
  color: #ffffff;
  position: absolute;
  left: 2.8rem;
  top: 28rem;
  color: #dee58b;
  background-image: -webkit-linear-gradient(92deg, #a3a365, #f6ffbb);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 8s infinite linear;

  @keyframes hue {
    from {
      -webkit-filter: hue-rotate(120deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export const Icon = styled.svg`
  width: 0.875rem;
  height: 0.875rem;
  fill: #ffffff;
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
`;
