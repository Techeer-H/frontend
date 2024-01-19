import { useState, useEffect } from 'react';
import CommentList from '../../../components/teacher/commentList';
import * as S from './styles';
import axios from 'axios';

import EvaluateImg from '../../../assets/evaluateImg.svg';
import TeacherRatingPage from '../modal/teacherrating';

const teacherevaluate = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  // const [isModifyModalOpen, setModifyModalOpen] = useState(false);
  // const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  // const [feedback, setFeedBack] = useState('');
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
          setContent(res.data.result[0].content);
          setRating(res.data.result[0].student_rating);
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
            <CommentList feedbackId="1" content={content} rating={rating} />
            <CommentList feedbackId="2" content={content} rating={rating} />
            <CommentList feedbackId="3" content="3" rating={rating} />
            <CommentList feedbackId="4" content="4" rating={rating} />
          </S.CommentWrapper>
          <S.BtnContainer>
            <S.WriteBtn onClick={openModal}>평가 작성하기</S.WriteBtn>
          </S.BtnContainer>
        </S.CommentBox>
      </S.Fullcontainer>
      {ModalOpen && <TeacherRatingPage closeModal={closeModal} />}
    </div>
  );
};
export default teacherevaluate;
