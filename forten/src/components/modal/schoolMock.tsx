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

// mocksData 객체에 대한 타입 정의
interface MocksData {
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

// 모의고사 그래프 컴포넌트
function SchoolMock() {
    const [selectedSubject, setSelectedSubject] = useState<'korean' | 'english' | 'math'>('korean');

    const inputRadioHandler = (subject: 'korean' | 'english' | 'math') => {
        setSelectedSubject(subject);
    };

    console.log('모의고사' + selectedSubject);

    // 모의고사 임시 데이터
    const mocksData: MocksData = {
        korean: {
            series: [
                { name: '1학년', data: [1, 1, 3, 2, 4] },
                { name: '2학년', data: [2, 2, 4, 1] },
                { name: '3학년', data: [3, 3, 3, 1, 1, 2] }
            ],
            xaxisCategories: ['3', '5', '6', '7', '9', '10'],
        },
        english: {
            series: [
                { name: '1학년', data: [2, 3, 4, 5] },
                { name: '2학년', data: [6, 7, 8, 9] },
            ],
            xaxisCategories: ['3', '5', '6', '7', '9', '10'],
        },
        math: {
            series: [],
            xaxisCategories: ['3', '5', '6', '7', '9', '10'],
        },
    };

    let chartOptions: ApexOptions;
    try {
        const selectedSubjectData = mocksData[selectedSubject];

        chartOptions = {
            chart: {
                type: 'line',
            },
            series: selectedSubjectData.series,
            xaxis: {
                categories: selectedSubjectData.xaxisCategories,
                title: {
                    text: '월',
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
                <Explan>모의고사</Explan>
                <RadioContaioner>
                    <label>
                        <input
                            type='radio'
                            id='korean'
                            name='mock'
                            value='korean'
                            checked={selectedSubject === 'korean'}
                            onChange={() => inputRadioHandler('korean')} />
                        국어
                    </label>
                    <label>
                        <input
                            type='radio'
                            id='english'
                            name='mock'
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
                            name='mock'
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
                type="line"
                height={200}
                width={400}
            />
        </Wrapper>
    )
}

export default SchoolMock;