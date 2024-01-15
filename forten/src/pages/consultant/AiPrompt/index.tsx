import styled from 'styled-components';
import Navbar from '../../../components/consultant/navBar';
import * as S from './styles';
import StudentTable from '../../../components/modal/studentTable';
import WordBox from '../../../components/modal/wordBox';
import ParentAvergy from '../../../components/modal/parentAvergy';
import WriteButton from '../../../components/modal/writeButton';
import StudentAvergy from '../../../components/modal/studentAvergy';
import SchoolGrades from '../../../components/modal/schoolGrades'; // 내신 성적
import SchoolMock from '../../../components/modal/schoolMock'; // 모의고사 성적
import ColseBtn from '../../../assets/closeBtn.png';

// const FlexWrapper = styled.div``;

const AiPromptPage = () => {
  return (
    <S.background>
      <Navbar />
      <S.fullcontainer>
        <S.LeftFullContainer>
          <StudentTable />
        </S.LeftFullContainer>
        <div>
          <S.FlexContainer>
            <S.FlexBox>
              {/* 학생 성적(내신, 모의고사) */}
              <SchoolGrades />
              <SchoolMock />
            </S.FlexBox>
            <S.Container>
              {/* 강사가 평가한 학생 평균, 부모님 평가 */}
              <StudentAvergy />
              <ParentAvergy />
            </S.Container>
          </S.FlexContainer>
          <WordBox />
          <WriteButton />
        </div>
      </S.fullcontainer>
    </S.background>
  );
};

export default AiPromptPage;
