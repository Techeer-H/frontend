import { useState, useEffect } from 'react';
import CommentList from '../../../components/teacher/commentList';
import * as S from './styles';
import axios from 'axios';
import StudentTable from '../../../components/modal/studentTable';
import TeacherRatingPage from '../modal/teacherrating';
import { useLocation } from 'react-router-dom';
import TNavbar from '../../../components/teacher/Tnavbar';

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
  //첫번째방법
  const location = useLocation();
  // 학생 아이디 가져오기 성공
  // 통신하는 자식 컴포넌트에게 props 값을 넘겨주면 됨.
  console.log('ai 프롬트 학생 아이디 가져오기', location.state.studentId);
  const studentId = location.state.studentId;

  //2번쨰방법
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
      <S.Background>
        <TNavbar />

        <S.fullcontainer>
          <S.LeftFullContainer>
            <S.TextContainer>
              <S.NamesContainer>
                <StudentTable studentId={studentId} />

                {/* 2번째 방법 */}
                {/* <S.Name>{studentInfo.studentName}</S.Name>
                  <S.Name>
                    {studentInfo.school}/{studentInfo.birth}
                  </S.Name> */}
              </S.NamesContainer>
            </S.TextContainer>
          </S.LeftFullContainer>

          <S.RightFullContainer>
            <S.Explan>내 평가 목록</S.Explan>

            <S.TitleBar>
              <S.Write>평가글</S.Write>
              <S.Rating>Rating 점수</S.Rating>
              <S.IconContainer>
                <S.Upgrade>수정</S.Upgrade>
                <S.Delete>삭제</S.Delete>
              </S.IconContainer>
            </S.TitleBar>
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
          </S.RightFullContainer>
        </S.fullcontainer>
        <S.BtnContainer>
          <S.WriteBtn onClick={openModal}>평가 작성하기</S.WriteBtn>
        </S.BtnContainer>
      </S.Background>

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
