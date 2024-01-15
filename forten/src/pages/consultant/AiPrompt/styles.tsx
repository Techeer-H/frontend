import styled from 'styled-components';

export const background = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(107deg, #fff7f8 7.23%, #e5e4fe 99.24%);
  height: 100vh;
  width: 100%;
  display: block;
  overflow: auto;
`;

export const fullcontainer = styled.div`
  display: flex;
  flex-direction: row;
  // marginRight: '8.75rem',
  // marginLeft: '8.75rem',
  width: 62.5rem;
  height: 45rem;
  border-radius: 1.78569rem;
  justify-content: center;
  margin: 2rem auto 1.63rem auto;
  background: linear-gradient(90deg, #e7e6ff 4.39%, #ffeded 32.89%);
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 49rem;
  padding-top: 2.5rem;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftFullContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 45rem;
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
