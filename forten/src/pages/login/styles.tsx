import React from 'react';
import styled from 'styled-components';
import LoginImg from '../../assets/LoginImg.svg';
import LoginImg2 from '../../assets/loginimg2.svg';

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

export const TitleSecondary = styled.h2`
  font-size: 1.875rem;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const LogoImage = styled.img`
  width: 24rem;
  height: 2.8rem;
  margin-top: 4rem;
`;

export const TextSecondary = styled.p`
  margin: 1rem 0 2.45rem -0.3rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #d2d5db;
`;

export const Link = styled.a`
  margin-top: 1rem;

  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  margin: 2.78rem 3.98rem 2.78rem 3.98rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  gap: 2.4rem;
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
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 16rem;
  height: 2rem;
  border-radius: 1.2em;
  border: none;
  background: linear-gradient(105deg, #73a6ff 15.97%, #efc2ff 85.11%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.9s ease;
  &:hover {
    background: #e0baff;
    color: #292929;
  }
`;

export const RightColumn = styled.div`
  width: 25rem;
  height: 32.5rem;
  border-radius: 1rem;
  margin-top: 9.75rem;
  margin-right: 15rem;

  /* box-shadow: 0px px 4px 0px rgba(0, 0, 0, 0.25); */
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
