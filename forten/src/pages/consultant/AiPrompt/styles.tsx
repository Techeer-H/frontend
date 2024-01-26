import styled from 'styled-components';

export const background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;
  background: linear-gradient(to bottom left, #8d8ab4, #d9c9c9);
`;

export const fullcontainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 49rem;
  padding-top: 2rem;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftFullContainer = styled.div`
  width: 21.25rem;
  height: 43.375rem;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1%;
  border-top-left-radius: 20px;
  color: #fff;
`;

export const RightFullContainer = styled.div`
  width: 59.155rem;
  height: 43.375rem;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PurpleCircle = styled.div`
  background-color: #f1e4ff;
  width: 8.25rem;
  height: 1.75rem;
  flex-shrink: 0;
  margin: 2.13rem 2.12rem 0 1.62rem;
  display: flex;
  border-radius: 1rem;
  text-align: center;
  align-items: center;
  color: #5f6868;
  font-size: 0.5rem;
`;
