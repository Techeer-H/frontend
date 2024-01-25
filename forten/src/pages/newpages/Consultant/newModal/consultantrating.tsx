import styled from 'styled-components';
import SubmitIcon from '../../../../assets/checkIconPurple.svg';
import Rating from '../../../../components/modal/rating';
import { useState } from 'react';
import axios from 'axios';
import CloseWhite from '../../../../assets/closeWhite.svg';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`;

const FullContainer = styled.div`
  width: 25rem;
  height: 24rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #85a1ff;
  background: #ffffff;
  position: fixed;
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
const Button = styled.button`
  width: 9rem;
  height: 2.25rem;
  display: flex;
  margin-top: 0.87rem;
  border: 0.15rem solid #8e8bb5;
  border-radius: 0.5rem; /* 원하는 값으로 조절 */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: row;
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
`;
const user_Id = localStorage.getItem('user_Id');

function ConsultantRatingPage(props: any) {
  const [studentRating, setStudentRating] = useState(0);
  const [parentRating, setParentRating] = useState(0);

  const studentSliderHandler = (value: number) => {
    setStudentRating(value);
  };

  const parentSliderHandler = (value: number) => {
    setParentRating(value);
  };

  console.log('컨설턴트 레이팅 모달, 학생 점수: ', studentRating);
  console.log('컨설턴트 레이팅 모달, 부모 점수:', parentRating);

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = {
      student_id: props.studentId,
      student_rating: studentRating,
      parent_rating: parentRating,
    };

    axios
      .post(`http://3.37.41.244:8000/api/feedback/${user_Id}/`, data)
      .then((response) => {
        console.log(response);
        props.close();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Backdrop />

      <FullContainer>
        <Container>
          <Upper>
            <TextContainer
              style={{
                color: '#242424',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginLeft: '1rem',
              }}
              className="title"
            >
              만족도 등록
            </TextContainer>
            <img
              src={CloseWhite}
              alt="닫기"
              style={{ marginRight: '2rem', height: '1.5rem', width: '1.5rem' }}
            />
          </Upper>
        </Container>
        <Container style={{ marginBottom: '1rem' }}>
          <TextContainer>학생의 만족도는 어떤가요?</TextContainer>
          <Rating onSliderChange={studentSliderHandler} rating={undefined} />
        </Container>
        <Container style={{ marginBottom: '2rem' }}>
          <TextContainer>학부모의 만족도는 어떤가요?</TextContainer>
          {/* <Rating /> */}

          <Rating onSliderChange={parentSliderHandler} rating={undefined} />
          <Button onClick={submitHandler}>
            <img src={SubmitIcon} alt="제출" />
          </Button>
        </Container>
      </FullContainer>
    </>
  );
}

export default ConsultantRatingPage;
