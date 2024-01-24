import styled from 'styled-components';
import SubmitIcon from '../../../assets/Checkicon_gradient.svg';
import Rating from '../../../components/modal/rating';
import LogoAndLetter from '../../../assets/LogoAndLetter.svg';
import { useState } from 'react';
import axios from 'axios';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`


const FullContainer = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #85a1ff;
  background: #ffffff;
  position: fixed;
  z-index: 12;
  display: flex;
  flex-direction: column;
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

const user_Id = localStorage.getItem('user_Id');

function ConsultantRatingPage(props: any) {
  const [studentRating, setStudentRating] = useState(0);
  const [parentRating, setParentRating] = useState(0);

  const studentSliderHandler = (value: number) => {
    setStudentRating(value);
  }

  const parentSliderHandler = (value: number) => {
    setParentRating(value);
  }

  console.log('컨설턴트 레이팅 모달, 학생 점수: ', studentRating);
  console.log('컨설턴트 레이팅 모달, 부모 점수:', parentRating);

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = {
      student_id: props.studentId,
      student_rating: studentRating,
      parent_rating: parentRating,
    };

    axios.post(`http://3.37.41.244:8000/api/feedback/${user_Id}/`, data)
      .then((response) => {
        console.log(response);
        props.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <>
      <Backdrop />

      <FullContainer>
        <Container>
          <ImgBox>
            <img src={LogoAndLetter} alt="로고" />
          </ImgBox>
          <TextContainer>학생의 만족도는 어떤가요?</TextContainer>
          <Rating onSliderChange={studentSliderHandler} rating={undefined} />
        </Container>
        <Container>
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
};

export default ConsultantRatingPage;
