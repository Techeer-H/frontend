import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/consultant/navBar';
import StudentAvergy from '../../../components/modal/studentAvergy';
import ParentAvergy from '../../../components/modal/parentAvergy';
import WriteButton from '../../../components/modal/writeButton';
import SchoolGrades from '../../../components/modal/schoolGrades';
import WordBox from '../../../components/modal/wordBox';
import ConsultantRatingPage from '../../../pages/newpages/Consultant/newModal/consultantrating'
import StudentTable from '../../../components/modal/studentTable';
import SendImg from '../../../assets/send.png';
import BackgroundImg from '../../../assets/backgroundImg.png'

const Background = styled.div`
  width: 100%;
  min-width: 1350px;
  height: 170vh;
  min-height: 1500px;
  padding-top: 2%;
  position: relative;
`;

const BackImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundImg});
  background-size: 100% 100%; /* 이미지 크기를 100%로 설정 */
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(5px); /* 뿌옇게 필터 적용 (5px는 조절 가능) */
  z-index: -1;
`;

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 84rem;
  height: 9.25rem;
  padding: 1%;
  margin-top: 2%;
  background-color: rgba(16, 18, 27, 0.4);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Student = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  font-weight: 600;
`;

const HeaderRight = styled.div`
  display: flex;
`;


const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonPdf = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  display: flex;
  border-radius: 0.6rem;
  justify-content: space-around;
  align-items: center;
`

const GraphContainer = styled.div`
  position: relative;
  
`

const StudentAvergyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 8rem;
`

const AiBox = styled.div`
  width: 84rem;
  height: 30rem;
  background-color: rgba(16, 18, 27, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

function AiPrompt() {
  // locaton 이용해서 컨설턴트 메인에서 studentId를 가져와서 api에 연결
  const location = useLocation();
  const studentId = location.state.studentId;

  const [isModal, setIsModal] = useState(false);


  const modalOpen = () => {
    setIsModal(!isModal);
  };
  const closeModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      {isModal && <ConsultantRatingPage close={closeModal} studentId={studentId} />}
      <Background>
        <BackImg />
        <Navbar />
        <FullContainer>

          <Header>
            <Student>
              <StudentTable studentId={studentId} />
            </Student>

            <HeaderRight>
              <ParentAvergy studentId={studentId} />

              <ButtonWrapper>


                <WriteButton onConfirm={modalOpen} />

                <ButtonPdf>
                  <div>PDF 저장</div>
                  <img src={SendImg} alt='저장' />
                </ButtonPdf>
              </ButtonWrapper>

            </HeaderRight>
          </Header>

          <GraphContainer>
            <SchoolGrades studentId={studentId} />

            <StudentAvergyWrapper>
              <StudentAvergy studentId={studentId} />
            </StudentAvergyWrapper>

          </GraphContainer>

          <AiBox>
            <WordBox studentId={studentId} />
          </AiBox>

        </FullContainer>
      </Background>
    </>
  );
}

export default AiPrompt;
