import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
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

import TestImg from '../../../assets/testImg.png';

import Example from '../../../assets/example.png';

// canvas import
import html2canvas from 'html2canvas';

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 170vh;
  min-height: 1500px;
  padding-top: 2%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 900px;
  min-width: 1350px;
  background: url(${TestImg}) no-repeat;
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
  font-size: 0.875rem;
  display: flex;
  border-radius: 0.6rem;
  justify-content: space-around;
  align-items: center;
`;

const GraphContainer = styled.div`
  width: 100%;
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
  const studentName = location.state.studentName;
  const graphContainerRef = useRef(null);

  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => {
    setIsModal(!isModal);
  };
  const closeModal = () => {
    setIsModal(!isModal);
  };

  // Base64 문자열을 Blob으로 변환하는 함수
  function dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

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
      const imageData = canvas.toDataURL('image/jpg');

      // Base64 문자열을 Blob 객체로 변환합니다.
      const blobData = dataURItoBlob(imageData);

      // Blob 객체를 파일로 변환합니다.
      const imageFile = new File([blobData], 'image.jpg', { type: 'image/jpg' });

      // 파일을 FormData에 추가합니다.
      const formData = new FormData();
      formData.append('image', imageFile);

      axios.post(`http://3.37.41.244:8000/api/analysis/prompt/${studentId}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          console.log(res, 'pdf 성공');
          const blobData = new Blob([res.data], { type: 'application/pdf' });
          const blobUrl = URL.createObjectURL(blobData);

          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = `${studentName}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }).catch((err) => {
          console.log(err, 'pdf 실패');
        })
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
