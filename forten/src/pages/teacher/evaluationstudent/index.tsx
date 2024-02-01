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

  // 수정 모달 나타내기 ///
  const [isModifyModalOpen, setModifyModalOpen] = useState(false);
  const [modalFeedbackId, setModalFeedbackId] = useState<number | undefined>(undefined);
  const [modalContent, setModalContent] = useState('');
  const [modalRating, setModalRating] = useState(0);

  const closeModifyModal = () => {
    setModifyModalOpen(false);
  };

  const handleModifyClick = (feedbackId: number, content: string, rating: number) => {
    // feedbackId를 사용하여 모달 열기 등의 동작 수행
    setModalFeedbackId(feedbackId);
    setModifyModalOpen(true);
    setModalContent(content);
    setModalRating(rating);
  };

  return (
    <>
      {ModalOpen && (
        <TeacherRatingPage
          closeModal={closeModal}
          feedbackId={undefined}
          comment={undefined}
          studentRating={undefined}
        />
      )}

      {/* 코멘트 리스트 내부에 있는 모달 */}
      {isModifyModalOpen && (
        <TeacherRatingPage
          closeModal={closeModifyModal}
          feedbackId={modalFeedbackId}
          comment={modalContent}
          studentRating={modalRating}
        />
      )}

      <S.Background>
        <TNavbar />
        <S.TopFullContainer>
          <div style={{ marginLeft: '2rem' }}></div>
          <button
            onClick={() => {
              window.history.back();
            }}
            style={{
              marginTop: '1rem',
              width: '15px',
              height: '15px',
              backgroundColor: '#f96057',
              borderRadius: '50%',
              boxShadow: '24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65',
              marginRight: '13.1rem',
            }}
          ></button>
          <S.StudentListExplan>EvaluateList</S.StudentListExplan>
          <S.BtnContainer>
            <S.WriteBtn onClick={openModal}>평가 작성하기</S.WriteBtn>
          </S.BtnContainer>
        </S.TopFullContainer>

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
            <S.TitleBar>
              <S.Write>평가글</S.Write>
              <S.Rating>평가 점수</S.Rating>
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
                  onModifyClick={handleModifyClick} // 수정 버튼 클릭 시 호출될 함수 전달
                />
              ))}
            </S.CommentWrapper>
          </S.RightFullContainer>
        </S.fullcontainer>
      </S.Background>
    </>
  );
};
export default Teacherevaluate;
