import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/consultant/navBar';
import StudentAvergy from '../../components/modal/studentAvergy';
import ParentAvergy from '../../components/modal/parentAvergy';
import WriteButton from '../../components/modal/writeButton';
import SchoolGrades from '../../components/modal/schoolGrades';
import WordBox from '../../components/modal/wordBox';
import ConsultantRatingPage from '../../pages/newpages/Consultant/newModal/consultantrating'
import SendImg from '../../assets/send.png';
import StudentTable from '../../components/modal/studentTable';

const Background = styled.div`
  width: 100%;
  min-width: 1350px;
  height: 170vh;
  min-height: 1500px;
  padding: 2% 0 2% 0;
  background: linear-gradient(to bottom left, #8d8ab4, #d9c9c9);
`;

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 80.405rem;
  height: 9.25rem;
  padding: 1%;
  margin-top: 2%;
  background-color: rgba(100, 100, 100, 0.8);
  border-top-left-radius: 20px;
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
  display: flex;
  border-radius: 0.6rem;
  justify-content: center;
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
  width: 80.405rem;
  height: 30rem;
  background-color: rgba(100, 100, 100, 0.3);
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
    <Background>
      {isModal && <ConsultantRatingPage close={closeModal} studentId={1} />}
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
                <img src={SendImg} alt='pdf 저장' />
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
  );
}

export default AiPrompt;
