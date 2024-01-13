import React, { useState } from 'react';
import styled from "styled-components";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Wrapper = styled.div`
  width: 26rem;
  height: 16rem;
  border: 1px solid #717171;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 0.5rem;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.5rem;
`

const Explan = styled.p`
  font-size: 1rem;
  font-weight: 900;
`

const RadioContaioner = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-evenly;
  font-size: 0.85rem;
`

// gradesData 객체에 대한 타입 정의
interface GradesData {
    korean: {
        series: { name: string; data: number[] }[];
        xaxisCategories: string[];
    };
    english: {
        series: { name: string; data: number[] }[];
        xaxisCategories: string[];
    };
    math: {
        series: { name: string; data: number[] }[];
        xaxisCategories: string[];
    };
}

// 내신 그래프 컴포넌트
function SchoolGrades() {
    const [selectedSubject, setSelectedSubject] = useState<'korean' | 'english' | 'math'>('korean');

    const inputRadioHandler = (subject: 'korean' | 'english' | 'math') => {
        setSelectedSubject(subject);
    };

    console.log('내신' + selectedSubject);

    // 가상의 성적 데이터
    const gradesData: GradesData = {
        korean: {
            series: [
                { name: '1학년', data: [4, 4, 2, 1, 2, 1] },
                { name: '2학년', data: [2, 2, 4, 1] },
                { name: '3학년', data: [3, 3, 3, 1, 1, 2, 1] }
            ],
            xaxisCategories: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2'],
        },
        english: {
            series: [
                { name: '1학년', data: [2, 3, 4, 5] },
                { name: '2학년', data: [6, 7, 8, 9] },
            ],
            xaxisCategories: ['1-1', '1-2', '2-1', '2-2'],
        },
        math: {
            series: [],
            xaxisCategories: [],
        },
    };

    let chartOptions: ApexOptions;
    try {
        const selectedSubjectData = gradesData[selectedSubject];

        chartOptions = {
            chart: {
                type: 'line',
            },
            series: selectedSubjectData.series,
            xaxis: {
                categories: selectedSubjectData.xaxisCategories,
                title: {
                    text: '학기',
                },
            },
            yaxis: {
                title: {
                    text: '등급',
                },
                min: 0,
                max: 9,
            },
        };
    } catch (error) {
        console.error('데이터가 없습니다:', error);
        chartOptions = {
            chart: {
                type: 'line',
            },
            series: [],
            xaxis: {
                categories: [],
                title: {
                    text: '학기',
                },
            },
            yaxis: {
                title: {
                    text: '등급',
                },
                min: 0,
                max: 9,
            },
        };
    }

    return (
        <Wrapper>
            <FlexContainer>
                <Explan>내신</Explan>
                <RadioContaioner>
                    <label>
                        <input
                            type='radio'
                            id='korean'
                            name='school'
                            value='korean'
                            checked={selectedSubject === 'korean'}
                            onChange={() => inputRadioHandler('korean')} />
                        국어
                    </label>
                    <label>
                        <input
                            type='radio'
                            id='english'
                            name='school'
                            value='english'
                            checked={selectedSubject === 'english'}
                            onChange={() => inputRadioHandler('english')}
                        />
                        영어
                    </label>
                    <label>
                        <input
                            type='radio'
                            id='math'
                            name='school'
                            value='math'
                            checked={selectedSubject === 'math'}
                            onChange={() => inputRadioHandler('math')}
                        />
                        수학
                    </label>
                </RadioContaioner>
            </FlexContainer>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type='line'
                height={200}
                width={400}
            />
        </Wrapper>
    )
}

export default SchoolGrades;