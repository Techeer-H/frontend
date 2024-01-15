import React from 'react';
import styled from 'styled-components';
import SubmitIcon from '../../../assets/checkIcon_gradient.svg';
import Rating from '../../../components/modal/rating';
import LogoAndLetter from '../../../assets/LogoAndLetter.svg';
const FullContainer = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #85a1ff;
  background: #ffffff;
  &:hover {
    outline: none;
    border-color: #0800ff;
    border: 0.5rem;
    box-shadow: 0 0 0 3px rgba(0, 21, 255, 0.3);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.p`
  color: #737b7b;
  font-size: 1rem;
  font-style: normal;
  text-align: center;
`;

const ImgBox = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 3.36rem;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 6rem;
  height: 1.75rem;
  display: flex;
  margin-top: 4rem;
  border: 0.1rem solid #85a1ff;
  border-radius: 1rem; /* 원하는 값으로 조절 */
  align-items: center;
  justify-content: center;

  cursor: pointer;
  flex-direction: row;
`;

const TeacherRatingPage = () => {
  return (
    <FullContainer>
      <Container>
        <ImgBox>
          <img src={LogoAndLetter} alt="로고" />
        </ImgBox>
        <TextContainer>학생의 만족도는 어떤가요?</TextContainer>
        <Rating />
      </Container>
      <Container>
        <Button>
          <img src={SubmitIcon} alt="제출" />
        </Button>
      </Container>
    </FullContainer>
  );
};

export default TeacherRatingPage;
