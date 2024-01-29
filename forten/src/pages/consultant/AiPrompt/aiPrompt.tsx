import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/consultant/navBar';
import StudentAvergy from '../../../components/modal/studentAvergy';
import ParentAvergy from '../../../components/modal/parentAvergy';
import WriteButton from '../../../components/modal/writeButton';
import SchoolGrades from '../../../components/modal/schoolGrades';
import WordBox from '../../../components/modal/wordBox';
import ConsultantRatingPage from '../../../pages/newpages/Consultant/newModal/consultantrating';
import StudentTable from '../../../components/modal/studentTable';
import BackGround from '../../../assets/BackGround2.jpeg';
import Pdf from '../../../assets/PDF.svg';

// canvas import
import html2canvas from 'html2canvas';

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 170vh;
  min-height: 900px;
  min-width: 1350px;
  background: url(${BackGround}) no-repeat;
  background-size: cover;
  background-position: center;
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
  color: #ffffff;
  font-weight: 600;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
`;

const GraphContainer = styled.div`
  position: relative;
`;

const StudentAvergyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 8rem;
`;

const AiBox = styled.div`
  width: 84rem;
  height: 30rem;
  background-color: rgba(16, 18, 27, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AiPrompt() {
  // locaton 이용해서 컨설턴트 메인에서 studentId를 가져와서 api에 연결
  const location = useLocation();
  const studentId = location.state.studentId;
  const graphContainerRef = useRef(null);

  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => {
    setIsModal(!isModal);
  };
  const closeModal = () => {
    setIsModal(!isModal);
  };

  const saveChartImg = async () => {
    try {
      // 그래프를 감싸고 있는 컨테이너 요소를 참조합니다.
      const graphContainer = graphContainerRef.current;

      // graphContainer가 존재하지 않으면 함수를 종료합니다.
      if (!graphContainer) {
        console.error('Graph container not found.');
        return;
      }

      // html2canvas을 사용하여 컨테이너 내용을 이미지로 캡쳐합니다.
      const canvas = await html2canvas(graphContainer);

      // 이미지 데이터를 얻어옵니다.
      const imageData = canvas.toDataURL('image/png');

      // 이미지를 다운로드합니다.
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'chart_image.png';
      link.click();
    } catch (error) {
      console.error('Error saving chart image:', error);
    }
  };

  return (
    <>
      {isModal && <ConsultantRatingPage close={closeModal} studentId={studentId} />}
      <Background>
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

                <ButtonPdf onClick={saveChartImg}>
                  <div>PDF 저장</div>
                  <img style={{ width: '1.5rem', height: '1.5rem' }} src={Pdf} alt="저장" />
                </ButtonPdf>
              </ButtonWrapper>
            </HeaderRight>
          </Header>

          <GraphContainer ref={graphContainerRef}>
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
