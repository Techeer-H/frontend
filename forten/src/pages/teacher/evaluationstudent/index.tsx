import { useState, useEffect } from 'react';
import CommentList from '../../../components/teacher/commentList';
import * as S from './styles';
import axios from 'axios';

import EvaluateImg from '../../../assets/evaluateImg.svg';
import TeacherRatingPage from '../modal/teacherrating';

interface Evaluate {
  id: number;
  student_rating: number;
  content: string;
}

const teacherevaluate = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const [evaluateList, setEvaluateList] = useState<Evaluate[]>([]);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const dataApi = () => {
      axios
        .get('http://3.37.41.244:8000/api/feedback/2/2/info')
        .then(function (res) {
          console.log(res);
          console.log(res.data.result);
          console.log('res.data', res.data);

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
                <S.Name>하재민</S.Name>
                <S.Name>양명고/19</S.Name>
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
          feedbackId={null}
          comment={null}
          studentRating={null}
        />
      )}
    </div>
  );
};
export default teacherevaluate;
