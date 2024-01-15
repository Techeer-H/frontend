import React from 'react';
import * as S from './styles';
import Evaluation from '../../../assets/Evaluation.svg';
import Check from '../../../assets/Check.svg';
import EvaluateImg from '../../../assets/evaluateImg.svg';

import TeacherRating from '../../../pages/teacher/modal/teacherrating';
import { styled } from 'styled-components';
import Lottie from 'react-lottie';
import TsubmitButton from '../../../components/teacher/TsubmitButton';

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
          <S.TitleBox>
            <S.Img>
              <img src={Evaluation} alt="Evaluation" />
            </S.Img>
          </S.TitleBox>
          <S.TitleBar></S.TitleBar>
          <div style={{ display: 'flex' }}>
            <S.LeftContainer placeholder="학생의 평가를 적어주세요"></S.LeftContainer>
            <S.RightContainer>
              <TeacherRating />
              <TsubmitButton />
            </S.RightContainer>
          </div>
        </S.CommentBox>
      </S.Fullcontainer>
    </div>
  );
};
export default teacherevaluate;
