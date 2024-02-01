import styled from 'styled-components';
import LoginImg2 from '../../../assets/LoginImg2.svg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;

  background: url(${LoginImg2}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LeftColumn = styled.div`
  display: flex;
  background: #ffffff;
  width: 31rem;
  height: 45rem;
  padding: 2.8em 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 1rem;

  @media (min-width: 640px) {
    padding: 4rem 1rem 8rem;
  }
  @media (min-width: 1024px) {
    padding: 6rem 2rem 10rem;
  }
`;
export const Form = styled.form`
  margin: 9rem 3.98rem 2.78rem 3.98rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const LogoImage = styled.div`
  height: 4rem;
  margin-bottom: 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;

  color: #dee58b;
  background-image: -webkit-linear-gradient(92deg, #a3a365, #f6ffbb);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 8s infinite linear;

  keyframes hue {
    from {
      filter: hue-rotate(120deg);
    }
    to {
      filter: hue-rotate(-360deg);
    }
  }
`;

export const InputWrapper = styled.div`
  height: 5rem;
  .errorMessageWrap {
    margin-left: 0.5rem;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: 0.6rem;
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
  color: #1f2937;
  margin-top: 1rem;
  &:focus {
    outline: none;
    border-color: #00ffc3;
    box-shadow: 0 0 0 4px rgba(0, 255, 217, 0.3);
  }
`;

export const RoleContainer = styled.div`
  margin: 0.8rem 0 2rem 0;
  display: flex;
`;

export const Button = styled.div`
  .bottomButton {
    width: 16rem;
    height: 2.4rem;

    border-radius: 1.2em;
    border: none;
    background: #4665ff;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background: #ff2e85;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }

  .bottomButton:disabled {
    background: #dadada;
    color: white;
  }
`;

export const RightColumn = styled.div``;

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
  @media (min-width: 1024px) {
    font-size: 1rem;
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

  keyframes hue {
    from {
      filter: hue-rotate(120deg);
    }
    to {
      filter: hue-rotate(-360deg);
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: underline;

  &:hover {
    color: #b2b8ff;
    text-decoration: underline;
  }
`;
export const InfoBirthContainer = styled.div`
  height: 2rem;
  border-radius: 0.375rem;
  border-radius: 1.2rem;
  border: 1.328px solid #e3e3e3;
  background: #fff;
  font-size: 0.8rem;
  color: #1f2937;
  padding: 0.3rem 0 0 0.8rem;
  margin-bottom: 1rem;
`;

// Styled component for the select element
export const Select = styled.select`
  margin-left: 7px;

  &:first-child {
    margin-left: 0;
  }
`;
