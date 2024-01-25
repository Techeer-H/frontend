import styled from 'styled-components';
import LoginImg2 from '../../../assets/LoginImg2.svg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  background: linear-gradient(237deg, #709d77 34.05%, #d9c9c9 100%);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 25rem;
  height: 32.5rem;
  padding: 2.8em 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 1rem;
  background: #fff;
  border-bottom: 2px solid #347914;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  /* 
  @media (min-width: 640px) {
    padding: 4rem 1rem 8rem;
  }
  @media (min-width: 1024px) {
    padding: 6rem 2rem 10rem;
  } */
`;
export const Form = styled.form`
  margin: 4rem 3.98rem 2.78rem 3.98rem;
  display: flex;
  flex-direction: column;
`;
export const LogoImage = styled.img`
  width: 20rem;
  height: 1.6rem;
  margin-bottom: 0.8rem;
`;

export const InputWrapper = styled.div`
  height: 4rem;
  .errorMessageWrap {
    margin-left: 0.5rem;
    color: #ef0000;
    font-size: 0.7rem;
    margin-top: 0.4rem;
  }
`;

export const Input = styled.input`
  width: 16rem;
  height: 2rem;
  padding: 1rem 1rem;
  border-radius: 0.375rem;
  border-radius: 1.2rem;
  border: 1.328px solid #e3e3e3;
  background: #fff;
  font-size: 0.8rem;
  color: #1f2937;
  margin-top: 1rem;
  &:focus {
    outline: none;
    border-color: #1eb550;
    box-shadow: 0 0 0 3px rgba(26, 179, 67, 0.3);
  }
`;

export const RoleContainer = styled.div`
  margin: 0.8rem 0 0.8rem 0;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  .bottomButton {
    width: 16rem;
    height: 2.4rem;

    border-radius: 1.2em;
    border: none;
    background: #78978c;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background: #89ffac;
      color: #9a9a9a;
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
  position: relative;
  background-image: url(${LoginImg2});
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
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #d2a6ff, #bbf4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 3s infinite linear;

  @-webkit-keyframes hue {
    from {
      -webkit-filter: hue-rotate(15deg);
    }
    to {
      -webkit-filter: hue-rotate(200deg);
    }
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  color: #0d673b;
  top: 1rem;
  left: 1rem;

  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #62cee8;
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
