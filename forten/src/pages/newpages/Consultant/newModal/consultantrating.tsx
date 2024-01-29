import styled from 'styled-components';
import SubmitIcon from '../../../../assets/checkIconPurple.svg';
import Rating from '../../../../components/modal/rating';
import { useState } from 'react';
import axios from 'axios';
import CloseBtn from '../../../../assets/Xicon.svg';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 12;
  background: rgba(0, 0, 0, 0.45);
`;

const FullContainer = styled.div`
  width: 25rem;
  height: 24rem;
  border-radius: 15px;
  border: 1px solid #D8D8D8;
  background: rgba(16, 18, 27, 0.80);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 13;
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
  backdrop-filter: blur(20px);
`;

const TextContainer = styled.p`
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: 800;
  text-align: center;
`;

const RatingExplan = styled.div`
  font-size: 1rem;
  color: #66656A;
  font-weight: 600;
  text-align: center;
`

const ImgWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    border-radius: 2rem;
  }
  
`
// 로고
const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  margin-top: 0.87rem;
  border: 1px solid #8E8BB5;
  border-radius: 0.5rem; /* 원하는 값으로 조절 */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: row;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #CCBFC6;
  }
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
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
            <TextContainer>
              만족도 등록
            </TextContainer>
            <ImgWrapper onClick={props.close}>
              <img src={CloseBtn} alt='닫기' />
            </ImgWrapper>
          </Upper>
        </Container>
        <Container style={{ marginBottom: '1rem' }}>
          <RatingExplan>학생의 만족도는 어떤가요?</RatingExplan>
          <Rating onSliderChange={studentSliderHandler} rating={undefined} />
        </Container>
        <Container style={{ marginBottom: '2rem' }}>
          <RatingExplan>학부모의 만족도는 어떤가요?</RatingExplan>
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
