import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Box, Tabs, Tab } from '@mui/material';
import Navbar from "../../components/consultant/navBar";
import EnterGrades from "../../components/consultant/enterGrades";
import BlendEnterGrades from "../../components/blend/blendEnterGrades";

import BackgroundImg from '../../assets/backgroundImg.png'

const Background = styled.div`
  width: 100%;
  min-width: 1450px;
  height: 100vh;
  min-height: 1050px;
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
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopFullContainer = styled.div`
  width: 84rem;
  height: 4.25rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.2);
  border-radius: 20px 20px 0 0;
  background-color: rgba(16, 18, 27, 0.4);
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1rem;
`

const TopExplant = styled.div`
  width: 16rem;
  padding: 1%;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 600;
`

const LeftContainer = styled.div`
  width: 16rem;
  height: 48rem;
  padding: 1% 3% 1% 3%;

  border-right: 1px solid rgba(213, 213, 213, 0.2);
  background-color: rgba(16, 18, 27, 0.4);
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #fff;
  font-weight: 900;
`

const BodyContainer = styled.div`
  display: flex;
`

const StudentName = styled.div`
  font-size: 1.25rem;
`

const StudentInfo = styled.div`
  font-size: 1rem;
`

const GradeSelect = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  font-weight: 600;
`;

const Title = styled.div`
  width: 95%;
  color: rgba(113, 119, 144, 0.78);  
  font-size: 1.25rem;
  font-weight: 600;
  dispaly: felx;
  justify-content: start;
`;

const Grade = styled.div`
  width: 100%;
  height: 2.375rem;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: rgba(16, 18, 27, 0.4);
  }
`;

const MainContainer = styled.div`
  width: 68rem;
  height: 48rem;
  padding-top: 2%;
  background-color: rgba(16, 18, 27, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Explan = styled.div`
  width: 95%;
  height: 4.5rem;
  padding: 1%;
  margin-bottom: 1%;
  border-radius: 15px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(to left, rgba(250, 255, 0, 1) 0%, rgba(252, 167, 74, 1) 25%, rgba(253, 85, 143, 1) 50%, rgba(255, 0, 214, 1) 75%);
  display: flex;
  align-items: center;
`;

const FullWrapper = styled.div`
  width: 100%;
`

const EnterGradesContainer = styled.div`
  width: 100%;
  margin-top: 1.5%;
  display: flex;
  justify-content: space-evenly;
`

// 가정: a11yProps 함수는 탭 패널의 속성을 설정하는 함수
const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
};

const CustomTabPanel = ({ value, index, children }: { value: number, index: number, children: React.ReactNode }) => {
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

function SchoolTestGrades() {
    const [tabsValue, setTabsValue] = useState(0);
    // 학년 선택하는 상태인데, 이것만 나중에 api에 맞게 바꿔서 보내면 될듯

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
            <BackImg />
            <Navbar />

            <FullContainer>
                <TopFullContainer>
                    <TopExplant>Register</TopExplant>


                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
                            <Tab label='내신' {...a11yProps(0)} sx={{ fontSize: '1rem' }} />
                            <Tab label='모의고사' {...a11yProps(1)} sx={{ fontSize: '1rem' }} />
                            <Tab label='BLEND' {...a11yProps(2)} sx={{ fontSize: '1rem' }} />
                        </Tabs>
                    </Box>
                </TopFullContainer>


                <BodyContainer>

                    <LeftContainer>
                        <StudentName>하재민</StudentName>
                        <StudentInfo>양명고등학교 고3</StudentInfo>

                        <GradeSelect>
                            <Title>초등학교</Title>
                            <Grade
                                onClick={() => optionClickHandler('초1')}
                                style={{
                                    background:
                                        selectedOption === '초1'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                1학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('초2')}
                                style={{
                                    background:
                                        selectedOption === '초2'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                2학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('초3')}
                                style={{
                                    background:
                                        selectedOption === '초3'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                3학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('초4')}
                                style={{
                                    background:
                                        selectedOption === '초4'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                4학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('초5')}
                                style={{
                                    background:
                                        selectedOption === '초5'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                5학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('초6')}
                                style={{
                                    background:
                                        selectedOption === '초6'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                6학년
                            </Grade>
                            <Title>중학교</Title>
                            <Grade
                                onClick={() => optionClickHandler('중1')}
                                style={{
                                    background:
                                        selectedOption === '중1'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                1학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('중2')}
                                style={{
                                    background:
                                        selectedOption === '중2'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                2학년
                            </Grade>
                            <Grade
                                onClick={() => optionClickHandler('중3')}
                                style={{
                                    background:
                                        selectedOption === '중3'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                3학년
                            </Grade>
                            <Title>고등학교</Title>
                            <Grade
                                onClick={() => optionClickHandler('고1')}
                                style={{
                                    background:
                                        selectedOption === '고1'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                1학년
                            </Grade>

                            <Grade
                                onClick={() => optionClickHandler('고2')}
                                style={{
                                    background:
                                        selectedOption === '고2'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                2학년
                            </Grade>

                            <Grade
                                onClick={() => optionClickHandler('고3')}
                                style={{
                                    background:
                                        selectedOption === '고3'
                                            ? 'rgba(16, 18, 27, 0.4)'
                                            : '',
                                }}
                            >
                                3학년
                            </Grade>
                        </GradeSelect>
                    </LeftContainer>

                    <MainContainer>

                        <Explan>성적을 등록하세요!</Explan>

                        <Title>성적 등록</Title>
                        <CustomTabPanel value={tabsValue} index={0}>
                            <EnterGradesContainer>
                                {/* examId 는 어떤 시험인지 구분
                              * selectedGrade는 현재 선택한 학년 구분
                              * studentId는 해당 학생 (동적으로 해줘야 함) */}
                                <EnterGrades examId='1' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='2' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='3' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='4' selectedGrade={selectedOption} studentId={1} />
                            </EnterGradesContainer>
                        </CustomTabPanel>

                        <CustomTabPanel value={tabsValue} index={1}>
                            <EnterGradesContainer>
                                <EnterGrades examId='5' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='6' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='7' selectedGrade={selectedOption} studentId={1} />
                            </EnterGradesContainer>

                            <EnterGradesContainer>
                                <EnterGrades examId='8' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='9' selectedGrade={selectedOption} studentId={1} />
                                <EnterGrades examId='10' selectedGrade={selectedOption} studentId={1} />
                            </EnterGradesContainer>
                        </CustomTabPanel>

                        <CustomTabPanel value={tabsValue} index={2}>
                            <EnterGradesContainer>
                                <BlendEnterGrades examId='11' selectedGrade={selectedOption} studentId={1} />
                                <BlendEnterGrades examId='12' selectedGrade={selectedOption} studentId={1} />
                                <BlendEnterGrades examId='13' selectedGrade={selectedOption} studentId={1} />
                                <BlendEnterGrades examId='14' selectedGrade={selectedOption} studentId={1} />
                            </EnterGradesContainer>
                        </CustomTabPanel>
                    </MainContainer>


                </BodyContainer>

            </FullContainer>
        </Background>
    )
};

export default SchoolTestGrades; 