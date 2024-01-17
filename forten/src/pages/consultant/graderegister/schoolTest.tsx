import styled from 'styled-components';
import NavBar from '../../../components/consultant/navBar';
import ChooseSchoolMock from '../../../components/consultant/chooseSchoolMock';
import GradeSelect from '../../../components/consultant/gradeSelect';
import SubjectLine from '../../../components/consultant/subjectLine';
import EnterGrades from '../../../components/consultant/enterGrades';

// mocktest와 schooltest를 어떻게 라우터화 할 지 고민해봐야됨

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(107deg, #fff7f8 7.23%, #e5e4fe 99.24%);
  width: 100%;
  height: 100vh;
`;

export const FlexWrapper = styled.div`
  width: 51rem;
  height: 43rem;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  margin: 2rem auto;
`;

export const MainContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const Explan = styled.div`
  font-size: 1.5rem;
  margin-top: 2%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 15.25rem;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const EnterGradeWrapper = styled.div`
  width: 100%;
  padding-left: 15%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-evenly;
`;

function SchoolTest() {
  return (
    // 중앙에 위치할 수 있도록 큰 div로 묶기

    <Wrapper>
      <NavBar />
      <FlexWrapper>
        <ChooseSchoolMock />
        <MainContent>
          <Explan>내신 등급을 입력해주세요</Explan>
          <GradeSelect />
          <FormWrapper>
            <SubjectLine />
            <EnterGradeWrapper>
              {/*
               * 여기 아래의 성적 입력 컴포넌트들을
               * props를 사용하여 구분하면 되지 않을까 하는 생각입니다
               */}
              <EnterGrades />
              <EnterGrades />
              <EnterGrades />
              <EnterGrades />
            </EnterGradeWrapper>
          </FormWrapper>
        </MainContent>
      </FlexWrapper>
    </Wrapper>
  );
}

export default SchoolTest;
