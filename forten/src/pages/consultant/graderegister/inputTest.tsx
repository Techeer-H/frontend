import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import Navbar from '../../../components/consultant/navBar';
import EnterGrades from '../../../components/consultant/enterGrades';
// import BlendEnterGrades from '../../../components/blend/blendEnterGrades';
import StudentTable from '../../../components/modal/studentTable';
import TestImg from '../../../assets/testImg.png';

const Background = styled.div`
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 1450px;
  height: 100vh;
  min-height: 1050px;
  background: url(${TestImg});
  background-size: 100% 100%; /* 이미지 크기를 100%로 설정 */
  background-position: center;
  background-repeat: no-repeat;
`;

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopFullContainer = styled.div`
  width: 84rem;
  height: 4rem;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.2);
  background: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
`;

const TopExplant = styled.div`
  color: #f9fafb;
  font-family: inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  width: 10.4375rem;
  height: 4rem;
  padding: 0.875rem 1.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-bottom: 2px solid #fff;
`;

const LeftContainer = styled.div`
  width: 16rem;
  height: 48rem;
  padding: 1.13rem 2.5rem 0rem 1.5rem;
  border-radius: 0rem 0rem 0rem 1.25rem;
  border-right: 1px solid rgba(213, 213, 213, 0.2);
  background: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  color: #f9fafb;
`;

const Student = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-weight: 600;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GradeSelect = styled.div`
  width: 16rem;
  height: 40rem;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  color: rgba(142, 146, 161, 0.9);
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
`;

const Grade = styled.div`
  width: 13.5rem;
  height: 2.375rem;

  padding: 0.63rem 9.75rem 0.38rem 0.94rem;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;

  &:hover {
    background: rgba(16, 18, 27, 0.4);
    border-radius: 0.5rem;
  }
`;

const MainContainer = styled.div`
  width: 68rem;
  height: 48rem;
  display: flex;
  padding: 2.44rem 4.12rem 1rem 4.5rem;
  flex-direction: column;
  border-radius: 0rem 0rem 1.25rem 0rem;
  background: rgba(16, 18, 27, 0.7);
  backdrop-filter: blur(20px);
`;

const Explan = styled.div`
  display: flex;
  width: 60rem;
  height: 4.5rem;
  padding: 1.5rem 45rem 1.5rem 1.6rem;

  border-radius: 0.875rem;
  color: #fff;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  background: linear-gradient(
    272deg,
    #faff00 -30.29%,
    #fca74a 18.61%,
    #fd558f 66.68%,
    #ff00d6 118.91%
  );

  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
`;

const FullWrapper = styled.div`
  width: 100%;
`;

const EnterGradesContainer = styled.div`
  width: 58rem;
  height: 18rem;
  justify-content: space-evenly;
  display: flex;
`;

// 가정: a11yProps 함수는 탭 패널의 속성을 설정하는 함수
const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
};

const CustomTabPanel = ({
  value,
  index,
  children,
}: {
  value: number;
  index: number;
  children: React.ReactNode;
}) => {
  return (
    <FullWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </FullWrapper>
  );
};

function InputTest() {
  const [tabsValue, setTabsValue] = useState(0);
  // 학년 선택하는 상태인데, 이것만 나중에 api에 맞게 바꿔서 보내면 될듯
  const location = useLocation();
  const studentId = location.state.studentId;

  // 고1, 고2, 고3에 해당하는 이름으로 바꾸기
  const [selectedOption, setSelectedOption] = useState('고1');

  const optionClickHandler = (option: string) => {
    setSelectedOption(option);
  };

  const tabsChangeHandler = ({ }, newValue: number) => {
    setTabsValue(newValue);
  };

  return (
    <Background>
      <Navbar />

      <FullContainer>
        <TopFullContainer>
          <div style={{ marginLeft: '2rem' }}></div>
          <button
            onClick={() => {
              window.history.back();
            }}
            style={{
              marginTop: '1.2rem',
              width: '1rem',
              height: '1rem',
              backgroundColor: '#f96057',
              borderRadius: '50%',
              boxShadow: '24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65',
              marginRight: '13.1rem',
            }}
          ></button>
          <TopExplant>Register</TopExplant>

          <Box sx={{ width: '44rem', height: '4rem', display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={tabsValue}
              onChange={tabsChangeHandler}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fff', // 아래 선의 색상을 흰색으로 변경
                },
                '.css-dg6nys-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                  color: '#fff !important', // 선택된 탭의 글씨 색상을 흰색으로 변경
                },
              }}
            >
              <Tab
                label="내신"
                {...a11yProps(0)}
                sx={{ color: '#F9FAFB', fontSize: '1rem', margin: '0.5rem 1rem' }}
              />
              <Tab
                label="모의고사"
                {...a11yProps(1)}
                sx={{ color: '#F9FAFB', fontSize: '1rem', margin: '0.5rem 1rem' }}
              />
              {/* <Tab
                label="BLEND"
                {...a11yProps(2)}
                sx={{ color: '#F9FAFB', fontSize: '1rem', margin: '0.5rem 1rem' }}
              /> */}
            </Tabs>
          </Box>
        </TopFullContainer>

        <BodyContainer>
          <LeftContainer>
            <Student>
              <StudentTable studentId={studentId} />
            </Student>

            <GradeSelect>
              <Title>초등학교</Title>
              <Grade
                onClick={() => optionClickHandler('초1')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '초1' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                1학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('초2')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '초2' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                2학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('초3')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '초3' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                3학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('초4')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '초4' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                4학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('초5')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '초5' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                5학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('초6')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '초6' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                6학년
              </Grade>
              <Title>중학교</Title>
              <Grade
                onClick={() => optionClickHandler('중1')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '중1' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                1학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('중2')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '중2' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                2학년
              </Grade>
              <Grade
                onClick={() => optionClickHandler('중3')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '중3' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                3학년
              </Grade>
              <Title>고등학교</Title>
              <Grade
                onClick={() => optionClickHandler('고1')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '고1' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                1학년
              </Grade>

              <Grade
                onClick={() => optionClickHandler('고2')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '고2' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                2학년
              </Grade>

              <Grade
                onClick={() => optionClickHandler('고3')}
                style={{
                  borderRadius: '0.5rem',
                  background: selectedOption === '고3' ? 'rgba(140, 146, 163, 0.4)' : '',
                }}
              >
                3학년
              </Grade>
            </GradeSelect>
          </LeftContainer>

          <MainContainer>
            <Explan>성적을 등록하세요!</Explan>

            <Title>
              <div style={{ marginTop: '0.4rem' }}>성적 등록</div>
            </Title>

            {/* <CustomTabPanel value={tabsValue} index={2}>
              <EnterGradesContainer>
                <BlendEnterGrades
                  examId="11"
                  selectedGrade={selectedOption}
                  studentId={studentId}
                />
                <BlendEnterGrades
                  examId="12"
                  selectedGrade={selectedOption}
                  studentId={studentId}
                />
              </EnterGradesContainer>
              <EnterGradesContainer>
                <BlendEnterGrades
                  examId="13"
                  selectedGrade={selectedOption}
                  studentId={studentId}
                />
                <BlendEnterGrades
                  examId="14"
                  selectedGrade={selectedOption}
                  studentId={studentId}
                />
              </EnterGradesContainer>
            </CustomTabPanel> */}

            <CustomTabPanel value={tabsValue} index={0}>
              <EnterGradesContainer>
                {/* examId 는 어떤 시험인지 구분
                 * selectedGrade는 현재 선택한 학년 구분
                 * studentId는 해당 학생 (동적으로 해줘야 함) */}
                <EnterGrades examId="1" selectedGrade={selectedOption} studentId={studentId} />
                <EnterGrades examId="2" selectedGrade={selectedOption} studentId={studentId} />
              </EnterGradesContainer>

              <EnterGradesContainer>
                <EnterGrades examId="3" selectedGrade={selectedOption} studentId={studentId} />
                <EnterGrades examId="4" selectedGrade={selectedOption} studentId={studentId} />
              </EnterGradesContainer>


            </CustomTabPanel>

            <CustomTabPanel value={tabsValue} index={1}>

              <EnterGradesContainer>
                <EnterGrades examId="5" selectedGrade={selectedOption} studentId={studentId} />
                <EnterGrades examId="6" selectedGrade={selectedOption} studentId={studentId} />
                <EnterGrades examId="7" selectedGrade={selectedOption} studentId={studentId} />
              </EnterGradesContainer>

              <EnterGradesContainer>
                <EnterGrades examId="8" selectedGrade={selectedOption} studentId={studentId} />
                <EnterGrades examId="9" selectedGrade={selectedOption} studentId={studentId} />
                <EnterGrades examId="10" selectedGrade={selectedOption} studentId={studentId} />
              </EnterGradesContainer>


            </CustomTabPanel>
          </MainContainer>
        </BodyContainer>
      </FullContainer>
    </Background>
  );
}

export default InputTest;
