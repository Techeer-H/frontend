import React from 'react';
import styled from 'styled-components';
import LoginImg from '../../assets/LoginImg.svg';
import LoginImg2 from '../../../assets/loginimg2.svg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  background: linear-gradient(118deg, #f1e1ff -10.93%, #eefffa 77.48%);
  display: flex;
  width: 80rem;
  height: 52rem;

  /* background: black; */
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 25rem;
  height: 32.5rem;
  padding: 2.8em 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15rem;
  margin-top: 9.75rem;
  position: relative;
  gap: 2.4rem;
  border-radius: 1rem;
  background: #fff;
  border-bottom: 2px solid #bcb1ff;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  /* 
  @media (min-width: 640px) {
    padding: 4rem 1rem 8rem;
  }
  @media (min-width: 1024px) {
    padding: 6rem 2rem 10rem;
  } */
`;

export const LogoImage = styled.img`
  width: 24rem;
  height: 2.5rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin: 4rem 3.98rem 2.78rem 3.98rem;
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled.form``;

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
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`;

export const Button = styled.button`
  width: 16rem;
  height: 2.4rem;
  margin-top: 2rem;
  border-radius: 1.2em;
  border: none;
  background: linear-gradient(105deg, #73fdff 15.97%, #efc2ff 85.11%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.9s ease;
  &:hover {
    background: #7df6ff;
    color: #c6c6c6;
    border: 1px solid #671845;
  }
`;

export const RightColumn = styled.div`
  width: 25rem;
  height: 32.5rem;
  border-radius: 1rem;
  margin-top: 9.75rem;
  margin-right: 15rem;

  /* box-shadow: 0px px 4px 0px rgba(0, 0, 0, 0.25); */
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
`;

export const StyledLink = styled(Link)`
  position: absolute;
  color: #ffffff;
  top: 1rem;
  left: 1rem;
  width: 3.6rem;
  height: 2rem;
  font-size: 01rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: #c9c2ff;
  padding: 0.36rem 0rem 0rem 0.9em;
  border-radius: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #5fd9e2;
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
