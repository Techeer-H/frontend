import React from 'react';
import styled from 'styled-components';
import Rating from '../../../components/modal/rating';
import LogoAndLetter from '../../../assets/LogoAndLetter.svg';
import ColseBtn from '../../../assets/closeBtn.png';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`

const Modal = styled.div`
  position: fixed;
  border: 1px solid #000000;
  border-radius: 40px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 62.5rem;
  height: 45rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Close = styled.img`
  margin-left: 95%;
  margin-top: 3%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
`;

const Explan = styled.div`
  margin: 5% 0 3% 3%;
  width: 10rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #415FFF;
  border-radius: 10px;
  color: #fff;
  font-size: 1.25rem;
`

const Line = styled.div`
  width: 100%;
  border: solid 1px #6936F2;
`

const Form = styled.form`
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
`

const InputText = styled.textarea`
  width: 32.875rem;
  height: 28.875rem;
  padding: 2%;
  border: 1px solid #6F99FA;
  border-radius: 10px;
  outline: none;
`

const FullContainer = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #85a1ff;
  background: #ffffff;  
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    outline: none;
    border-color: #0800ff;
    border: 0.5rem;
    box-shadow: 0 0 0 3px rgba(0, 21, 255, 0.3);
  }
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

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
`
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
    <div>
      <Backdrop />
      <Modal>
        <Close src={ColseBtn} alt='닫기' />
        <Explan>
          학생 평가
        </Explan>
        <Line />
        <Form>
          <InputText placeholder='학생의 평가를 작성해주세요' />
          <FullContainer>
            <Container>
              <ImgBox>
                <img src={LogoAndLetter} alt="로고" />
              </ImgBox>
              <TextContainer>학생의 만족도는 어떤가요?</TextContainer>
              <Rating />
            </Container>
            <BtnContainer>
              <Button>
                저장하기
              </Button>
            </BtnContainer>
          </FullContainer>
        </Form>
      </Modal>
    </div>
  );
};

export default TeacherRatingPage;
