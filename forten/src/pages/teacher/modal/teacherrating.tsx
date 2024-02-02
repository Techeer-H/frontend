import Rating from '../../../components/modal/rating';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckIcon from '../../../assets/checkIconWhite.svg';
import CloseWhite from '../../../assets/closeWhite.svg';

// 평가 모달
const NewTeacherRating: React.FC<{
  closeModal: React.MouseEventHandler;
  feedbackId?: number | undefined;
  comment?: string | undefined;
  studentRating?: number | undefined;
}> = ({ closeModal, feedbackId, comment, studentRating }) => {
  const [content, setContent] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);

  const handleSliderChange = (value: number) => {
    setRating(value);
  };

  useEffect(() => {
    if (comment !== undefined && studentRating !== undefined) {
      setContent(comment);
      setRating(studentRating);
    }
  }, []);

  const user_id = localStorage.getItem('user_Id');

  const location = useLocation();
  const student_id = location.state.studentId;

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    const data = {
      student_id: student_id,
      student_rating: rating,
      content: content,
    };

    try {
      if (feedbackId) {
        //이미 있는 글일 경우(수정)
        console.log('Updating feedback:', data);
        const response = await axios.put(
          `http://3.37.41.244:8000/api/feedback/${user_id}/${feedbackId}/`,
          data,
        );
        console.log('Successfully updated:', response.data);
      } else {
        // 새로 작성하는 글일 경우(등록)
        console.log('Creating new feedback:', data);

        const response = await axios.post(`http://3.37.41.244:8000/api/feedback/${user_id}/`, data);
        console.log('성공적으로 저장되었습니다', response.data);
      }
    } catch (error) {
      console.error('평가 저장 중 오류 발생', error);
    }
    closeModal(event);
  };

  return (
    <>
      <BackDrop />
      <Modal>
        <Upper>
          <Explan>학생평가</Explan>
          <Close src={CloseWhite} alt="닫기" onClick={closeModal} />
        </Upper>

        <Form>
          <InputText
            placeholder="학생의 평가를 작성해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* 위에 inputText를 props.text로 전달하게 하면 inputType이 수정에서도 input가능할 수 ㅇ */}
          <FullContainer>
            <Container>
              <TextContainer
                style={{
                  marginBottom: '3rem',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ededed',
                }}
              >
                만족도 등록
              </TextContainer>

              <TextContainer>학생의 만족도는 어떤가요?</TextContainer>
              <Rating onSliderChange={handleSliderChange} rating={studentRating} />
            </Container>
            <BtnContainer>
              <Button type="submit" onClick={handleSubmit}>
                <ImgBox>
                  <img src={CheckIcon} alt="닫기" style={{ fill: '#fff' }} />
                </ImgBox>
              </Button>
            </BtnContainer>
          </FullContainer>
        </Form>
      </Modal>
    </>
  );
};

const BackDrop = styled.div`
position: fixed;
width: 100%;
height: 100vh;
z-index: 12;
background: rgba(0, 0, 0, 0.45);
`;

const Modal = styled.div`
  position: fixed;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  z-index: 13;
  display: flex;
  flex-direction: column;
  background: rgba(72, 76, 92, 0.8);
  backdrop-filter: blur(20px);
  border: 0.1rem solid #cacaca;
  width: 62.5rem;
  height: 40rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;
const Upper = styled.div`
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  background: rgba(16, 18, 27, 0.8);
  width: 62.3125rem;
  height: 4rem;
  display: flex;
`;
const Close = styled.img`
  margin-top: 1rem;
  margin-left: 51rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

const Explan = styled.div`
  display: flex;
  width: 8rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
`;

const Form = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
`;

const InputText = styled.textarea`
  width: 34rem;
  height: 28.875rem;
  padding: 2.44rem;
  border: 1px solid #ededed;
  border-radius: 10px;
  outline: none;
  background: transparent;
  color: #ededed;
  resize: none;

  &:hover {
    outline: none;
    box-shadow: 0 0 0 2px rgba(91, 126, 255, 0.8);
  }
`;

const FullContainer = styled.div`
  width: 21rem;
  height: 20rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #d8d8d8;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 55, 255, 0.8);
  }
`;

const TextContainer = styled.p`
  font-size: 1rem;
  font-style: normal;
  text-align: center;
  color: #ededed;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  margin-top: 7rem;
  border-radius: 0.4rem; /* 원하는 값으로 조절 */
  align-items: center;
  justify-content: center;
  background: rgba(58, 61, 74, 0.8);
  cursor: pointer;
  flex-direction: row;

  &:hover {
    outline: none;
    background: rgba(0, 0, 0, 0.8);
    border-color: rgba(5, 5, 5, 0.847);
    border: 0.5rem;
    box-shadow: 0 0 0 3px rgba(68, 68, 73, 0.3);
  }
`;

export default NewTeacherRating;
