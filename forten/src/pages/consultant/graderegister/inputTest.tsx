import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Box, Tabs, Tab } from '@mui/material';
import Navbar from '../../../components/consultant/navBar';
import EnterGrades from '../../../components/consultant/enterGrades';
import BlendEnterGrades from '../../../components/blend/blendEnterGrades';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;
  background: linear-gradient(to bottom left, #8D8AB4, #D9C9C9);
`;

const FullContainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`;

const LeftContainer = styled.div`
  width: 13.875rem;
  height: 43.375rem;
  padding-top: 3%;
  border-top-left-radius: 20px;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 900;
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
`

const Grade = styled.div`
  width: 100%;
  height: 2.875rem;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.2) 97.97%);
  }
`;

const MainContainer = styled.div`
  width: 66.375rem;
  height: 43.375rem;
  padding-top: 2%;
  border-top-right-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Explan = styled.div`
  margin-bottom: 1%;
  font-size: 1rem;
  font-weight: 900;
`

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
                <LeftContainer>
                    <StudentName>하재민</StudentName>
                    <StudentInfo>양명고등학교 고3</StudentInfo>

                    <GradeSelect>
                        <Grade
                            onClick={() => optionClickHandler('초1')}
                            style={{
                                background:
                                    selectedOption === '초1'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            초등학교 1학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('초2')}
                            style={{
                                background:
                                    selectedOption === '초2'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            초등학교 2학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('초3')}
                            style={{
                                background:
                                    selectedOption === '초3'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            초등학교 3학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('초4')}
                            style={{
                                background:
                                    selectedOption === '초4'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            초등학교 4학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('초5')}
                            style={{
                                background:
                                    selectedOption === '초5'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            초등학교 5학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('초6')}
                            style={{
                                background:
                                    selectedOption === '초6'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            초등학교 6학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('중1')}
                            style={{
                                background:
                                    selectedOption === '중1'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            중학교 1학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('중2')}
                            style={{
                                background:
                                    selectedOption === '중2'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            중학교 2학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('중3')}
                            style={{
                                background:
                                    selectedOption === '중3'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            중학교 3학년
                        </Grade>
                        <Grade
                            onClick={() => optionClickHandler('고1')}
                            style={{
                                background:
                                    selectedOption === '고1'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            고등학교 1학년
                        </Grade>

                        <Grade
                            onClick={() => optionClickHandler('고2')}
                            style={{
                                background:
                                    selectedOption === '고2'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            고등학교 2학년
                        </Grade>

                        <Grade
                            onClick={() => optionClickHandler('고3')}
                            style={{
                                background:
                                    selectedOption === '고3'
                                        ? 'linear-gradient(270deg, #504B65 0%, rgba(80, 75, 101, 0.00) 97.97%)'
                                        : '',
                            }}
                        >
                            고등학교 3학년
                        </Grade>
                    </GradeSelect>
                </LeftContainer>

                <MainContainer>

                    <Explan>성적을 입력해주세요</Explan>

                    <Box>
                        <Tabs value={tabsValue} onChange={tabsChangeHandler}>
                            <Tab label='내신' {...a11yProps(0)} />
                            <Tab label='모의고사' {...a11yProps(1)} />
                            <Tab label='BLEND' {...a11yProps(2)} />
                        </Tabs>
                    </Box>

                    <CustomTabPanel value={tabsValue} index={0}>
                        <EnterGradesContainer>
                            {/* examId 는 어떤 시험인지 구분
                              * selectedGrade는 현재 선택한 학년 구분
                              * studentId는 해당 학생 (동적으로 해줘야 함) */}
                            <EnterGrades examId='1' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='2' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='3' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='4' selectedGrade={selectedOption} studentId={studentId} />
                        </EnterGradesContainer>
                    </CustomTabPanel>

                    <CustomTabPanel value={tabsValue} index={1}>
                        <EnterGradesContainer>
                            <EnterGrades examId='5' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='6' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='7' selectedGrade={selectedOption} studentId={studentId} />
                        </EnterGradesContainer>

                        <EnterGradesContainer>
                            <EnterGrades examId='8' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='9' selectedGrade={selectedOption} studentId={studentId} />
                            <EnterGrades examId='10' selectedGrade={selectedOption} studentId={studentId} />
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
            </FullContainer>
        </Background>
    )
};

export default InputTest;