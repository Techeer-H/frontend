import { useState, useEffect } from 'react';
import CommentList from '../../components/teacher/commentList';
import * as S from './styles';
import axios from 'axios';
import TeacherRatingPage from '../../pages/teacher/modal/teacherrating';
import NewLogo from '../../assets/NewLogo.svg';
import Boxpencil from '../../assets/Boxpencil.svg';
import MinusLogo from '../../assets/MinusLogo.svg';
import Snow from '../../assets/Snow.svg';
import Account from '../../assets/Account.svg';
import Logout from '../../assets/Logout.svg';

interface Evaluate {
  id: number;
  student_rating: number;
  content: string;
}

const teacherevayarnluate = () => {
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
            <S.NameImg>
      <S.SnowImg src={Snow} alt="Snow" />
      <S.SnowImg src={NewLogo} alt="New Logo" />
    </S.NameImg>
    <S.ConsultantBox>
      <S.AccountImg src={Account} alt="Account" />
      <S.TeacherBox> 조준영 강사 </S.TeacherBox>
      <S.LogoutImg src={Logout} alt="Logout" />
    </S.ConsultantBox>
              <S.NamesContainer>
              
              </S.NamesContainer>
            </S.NameBox>
          </S.TextContainer>
        </S.Container>
      <S.ContentContainer>
        <S.SchoolBox>
          <S.Name>하재민(19)</S.Name>
          <S.Name>대박고등학교</S.Name>
          
        <S.CommentBox>
          
          <S.Explan>List</S.Explan> 
          
          <S.TitleBar>
          <S.LeftWrite>평가글</S.LeftWrite>
          <S.MiddleWrite>Rating 점수</S.MiddleWrite>
          <S.RightWrite>수정</S.RightWrite>
          <S.EndWrite>삭제</S.EndWrite>
         </S.TitleBar>


         <S.Behavior> 학생이 어제부터 수업태도가 좋습니다
         <S.Number>4</S.Number>
         <S.Boxpencil src={Boxpencil} alt="Boxpencil" />
         <S.MinusLogo src={MinusLogo} alt="MinusLogo" />
         </S.Behavior>
         <S.HorizontalLine />

         <S.BehaviorSecond>요즘 매일 지각을 합니다
        <S.BoxpencilSecond src={Boxpencil} alt="Boxpencil" />
        <S.MinusLogoSecond src={MinusLogo} alt="MinusLogo" />
        </S.BehaviorSecond>
         <S.HorizontalLine />

         <S.Behavior> 수학을 좋아하는 친구라 수업에 적극적으로 참여합니다
         <S.BoxpencilThird src={Boxpencil} alt="Boxpencil" />
         <S.MinusLogoThird src={MinusLogo} alt="MinusLogo" />
         </S.Behavior>
         <S.HorizontalLine />

        
    
            
          <S.BtnContainer>
            <S.WriteBtn onClick={openModal}>평가 작성하기</S.WriteBtn>
          </S.BtnContainer>
        </S.CommentBox>
        </S.SchoolBox>
        </S.ContentContainer>
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
export default teacherevayarnluate;
