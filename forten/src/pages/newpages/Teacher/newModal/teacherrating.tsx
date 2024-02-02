import Rating from '../../../../components/modal/rating';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckIcon from '../../../../assets/checkIconWhite.svg';
import CloseWhite from '../../../../assets/closeWhite.svg';
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
    <Full>
      <Backdrop />

      <Modal>
        <Upper>
          <Close src={CloseWhite} alt="닫기" onClick={closeModal} />
          <Explan>학생평가</Explan>
          <Line />
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
                style={{ marginBottom: '3rem', fontSize: '1.2rem', fontWeight: '600' }}
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
    </Full>
  );
};

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`;

const Upper = styled.div`
  background: #485248;
  border-radius: 40px 40px 0 0;
`;
const Full = styled.form``;

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
`;

const Close = styled.img`
  margin-left: 95%;
  margin-top: 3%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
`;

const Explan = styled.div`
  margin: 4% 0 3%;
  width: 10rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 1.875rem;
`;

const Line = styled.div`
  width: 100%;
  border: solid 1px #305948;
`;

const Form = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
`;

const InputText = styled.textarea`
  width: 32.875rem;
  height: 28.875rem;
  padding: 2%;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  outline: none;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

const FullContainer = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #d8d8d8;
  background: #ffffff;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    outline: none;
    border-color: #305948;
    border: 0.5rem;
    box-shadow: 0 0 0 3px rgba(0, 21, 255, 0.3);
  }
`;

const TextContainer = styled.p`
  font-size: 1rem;
  font-style: normal;
  text-align: center;
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
  border-radius: 1rem; /* 원하는 값으로 조절 */
  align-items: center;
  justify-content: center;
  background: #7593757d;
  cursor: pointer;
  flex-direction: row;
`;

export default NewTeacherRating;
