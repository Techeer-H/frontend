import React from 'react';
import * as S from './styles'
import Commentname from '../../assets/Commentname.svg';
import Rectangle from '../../assets/Rectangle.svg';
import { NavBar, NamesContainer, Name, Divider, Age } from './styles'; // styles.tsx
import Evaluation from '../../assets/Evaluation.svg';
import Check from '../../assets/Check.svg';
const teacherevaluate = () => {
  return (
    <div>
      <S.Fullcontainer>
        <S.Container>
          <S.TextContainer>
            <NavBar>
              <NamesContainer>
                <Name>하재민</Name>
                <Divider></Divider>
                <Name>양명고/19</Name>
              </NamesContainer>
            </NavBar>
          </S.TextContainer>
        </S.Container>
        <S.CommentBox>
          <S.TitleBox>
            <S.Img> <img src={Commentname} alt="Comment" /> </S.Img>
            <S.Img>
              <a href="학생평가 링크주소 혹은 액션">
                <img src={Evaluation} alt="Evaluation" />
                <button> </button>
              </a>
            </S.Img>
          </S.TitleBox>
          <S.TitleBar></S.TitleBar>
          <S.CommentContainer>
          </S.CommentContainer>
        </S.CommentBox>
        <S.CheckBoxContainer>
          <S.CheckBox>
            <img src={Check} alt='Check' />
          </S.CheckBox>
        </S.CheckBoxContainer>
      </S.Fullcontainer>
    </div>
  );
};
export default teacherevaluate;