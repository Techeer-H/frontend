import { useState, useEffect } from 'react';
import CommentList from '../../../components/teacher/commentList';
import * as S from './styles';
import axios from 'axios';

import EvaluateImg from '../../../assets/evaluateImg.svg';
import TeacherRatingPage from '../modal/teacherrating';
import { useLocation } from 'react-router-dom';

interface Evaluate {
  id: number;
  student_rating: number;
  content: string;
}

interface StudentInfoType {
  studentId: number;
  studentName: string;
  school: string;
  birth: string;
}

const Teacherevaluate = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [evaluateList, setEvaluateList] = useState<Evaluate[]>([]);

  //location 인자를 받아온것 -> studentInfo가져옴
  const location = useLocation();
  const [studentInfo] = useState<StudentInfoType>({
    studentId: location.state.studentId,
    studentName: location.state.studentName,
    school: location.state.school,
    birth: location.state.birth,
  });

  const user_id = localStorage.getItem('user_Id');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const dataApi = () => {
      axios

        .get(`http://3.37.41.244:8000/api/feedback/${user_id}/${studentInfo.studentId}/info`)
        .then(function (res) {
          console.log('res', res);

          setEvaluateList(res.data.result);
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    dataApi();
  }, []);
  return (
    <div>
      <S.Fullcontainer>
        <S.Container>
          <S.TextContainer>
            <S.NameBox>
              <S.NameImg src={EvaluateImg} />
              <S.NamesContainer>
                <S.Name>{studentInfo.studentName}</S.Name>
                <S.Name>
                  {studentInfo.school}/{studentInfo.birth}
                </S.Name>
              </S.NamesContainer>
            </S.NameBox>
          </S.TextContainer>
        </S.Container>
        <S.CommentBox>
          <S.Explan>해당 학생의 평가 목록을 볼 수 있습니다</S.Explan>
          <S.TitleBar></S.TitleBar>

          <S.CommentWrapper>
            {evaluateList.map((evaluate) => (
              <CommentList
                key={evaluate.id}
                feedbackId={evaluate.id}
                content={evaluate.content}
                rating={evaluate.student_rating}
              />
            ))}
          </S.CommentWrapper>
          <S.BtnContainer>
            <S.WriteBtn onClick={openModal}>평가 작성하기</S.WriteBtn>
          </S.BtnContainer>
        </S.CommentBox>
      </S.Fullcontainer>
      {ModalOpen && (
        <TeacherRatingPage
          closeModal={closeModal}
          feedbackId={undefined}
          comment={undefined}
          studentRating={undefined}
        />
      )}
    </div>
  );
};
export default Teacherevaluate;
