import styled from 'styled-components';
import Navbar from '../../components/consultant/navBar';
import StudentAvergy from '../../components/modal/studentAvergy';
import ParentAvergy from '../../components/modal/parentAvergy';
import WriteButton from '../../components/modal/writeButton';
import SchoolGrades from '../../components/modal/schoolGrades';
import SchoolMock from '../../components/modal/schoolMock';
import WordBox from '../../components/modal/wordBox';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;
  background: linear-gradient(to bottom left, #8d8ab4, #d9c9c9);
`;

const FullContainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`;

const LeftContainer = styled.div`
  width: 21.25rem;
  height: 43.375rem;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1%;
  border-top-left-radius: 20px;
  color: #fff;
`;

const Student = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
`;

const School = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const AvergyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MainContainer = styled.div`
  width: 59.155rem;
  height: 43.375rem;
  padding: 1%;
  // background-color: rgba(100, 100, 100, 0.2);
  background-color: #fff;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 54.5rem;
  display: flex;
  justify-content: end;
`;

const GraphContainer = styled.div`
  width: 100%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function AiPrompt() {
  // locaton 이용해서 컨설턴트 메인에서 studentOd를 가져와서 api에 연결

  return (
    <Background>
      <Navbar />
      <FullContainer>
        <LeftContainer>
          {/* 학생 정보 studentTable 컴포넌트로 바꾸기 */}
          <Student>하재민(19)</Student>
          <School>대박고등학교</School>

          <AvergyContainer>
            {/* studentId 는 동적으로 변경해줘야 함
             * 현재는 오류 나서 임시로 넣어둠
             */}
            <StudentAvergy studentId={1} />

            <ParentAvergy studentId={1} />
          </AvergyContainer>
        </LeftContainer>

        <MainContainer>
          <ButtonContainer>
            <WriteButton />
          </ButtonContainer>

          <GraphContainer>

            <SchoolGrades studentId={1} />
            <SchoolMock studentId={1} />
          </GraphContainer>

          <div>
            <WordBox studentId={1} />
          </div>
        </MainContainer>
      </FullContainer>
    </Background>
  );
}

export default AiPrompt;
