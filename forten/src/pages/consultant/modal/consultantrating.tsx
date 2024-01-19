import React from 'react';
import styled from 'styled-components';
import SubmitIcon from '../../../assets/checkIcon_gradient.svg';
import Rating from '../../../components/modal/rating';
import LogoAndLetter from '../../../assets/LogoAndLetter.svg';
const FullContainer = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #85a1ff;
  background: #ffffff;
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
// 로고
const ImgBox = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.81rem;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 6rem;
  height: 1.75rem;
  display: flex;
  margin-top: 0.87rem;
  border: 0.1rem solid #85a1ff;
  border-radius: 1rem; /* 원하는 값으로 조절 */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: row;
`;

const ConsultantRatingPage = (props) => {
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
        <TextContainer>학부모의 만족도는 어떤가요?</TextContainer>
        <Rating />
        <Button onClick={props.close}>
          <img src={SubmitIcon} alt="제출" />
        </Button>
      </Container>
    </FullContainer>
  );
};

export default ConsultantRatingPage;
