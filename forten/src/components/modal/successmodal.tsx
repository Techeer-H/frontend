import React from 'react';
import Checkicon from '../../assets/Checkicon.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 26.25rem;
  height: 15rem;
  border-radius: 1rem;
  background: #f4f4f4;
`;

const Text = styled.div`
  display: flex;
  width: 25rem;
  height: 2.15906rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #5a5252;
  margin-left: 0.8rem;
  margin-bottom: 1rem;

  text-align: center;
  font-family: Inter;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 525;
  line-height: normal;
`;
const Img = styled.div`
  width: 16rem;
  height: 5.75rem;
  maring-left: 10rem;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  display: flex;
  width: 10rem;
  height: 3.75rem;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #5a5252;
  background: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #ffffff; //
  border-radius: 1rem; //
  margin-left: 8rem;
  margin-top: 2.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  &:hover {
    background: linear-gradient(120deg, #e8cdff -15.93%, #fefeff 77.48%);
    color: black;
  }
`;

const successmodal = () => {
  return (
    <Container>
      <Img>
        <img src={Checkicon} alt="Checkicon" />
      </Img>
      <Text>회원가입 성공 !</Text>

      <Button>확인</Button>
    </Container>
  );
};

export default successmodal;
