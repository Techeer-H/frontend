import React from 'react';
import CommentList from '../../../components/teacher/commentList';
import * as S from './styles';
import Evaluation from '../../../assets/Evaluation.svg';
import Check from '../../../assets/Check.svg';
import EvaluateImg from '../../../assets/evaluateImg.svg';


const teacherevaluate = () => {
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
          <S.Explan>
            해당 학생의 평가 목록을 볼 수 있습니다
          </S.Explan>
          <S.TitleBar></S.TitleBar>

          <S.CommentWrapper>
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
            <CommentList />
          </S.CommentWrapper>
          <S.BtnContainer>
            <S.WriteBtn>
              평가 작성하기
            </S.WriteBtn>
          </S.BtnContainer>

        </S.CommentBox>
      </S.Fullcontainer>
    </div>
  );
};
export default teacherevaluate;
