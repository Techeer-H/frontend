import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';

const Wrapper = styled.div`
  width: 26rem;
  height: 16rem;
  border: 1px solid #717171; 
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #fff;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.5rem;
`;

const Explan = styled.p`
  font-size: 1rem;
  font-weight: 900;
`;

const RadioContaioner = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-evenly;
  font-size: 0.85rem;
`;

interface ScoreDataItem {
  id: number;
  grade: string; // 예를 들어, 등급이 문자열이라고 가정
  score: number; // 예를 들어, 점수가 숫자라고 가정
  exam: string; // 예를 들어, 시험이 문자열이라고 가정
}

// 모의고사 그래프 컴포넌트
function SchoolMock() {
  const [selectedSubject, setSelectedSubject] = useState<'korean' | 'english' | 'math'>('korean');

  const [korean1, setKorean1] = useState<number[]>([]);
  const [korean2, setKorean2] = useState<number[]>([]);
  const [korean3, setKorean3] = useState<number[]>([]);
  const [english1, setEnglish1] = useState<number[]>([]);
  const [english2, setEnglish2] = useState<number[]>([]);
  const [english3, setEnglish3] = useState<number[]>([]);
  const [math1, setMath1] = useState<number[]>([]);
  const [math2, setMath2] = useState<number[]>([]);
  const [math3, setMath3] = useState<number[]>([]);

  const inputRadioHandler = (subject: 'korean' | 'english' | 'math') => {
    setSelectedSubject(subject);
  };

  const getSubjectId = (subject: 'korean' | 'english' | 'math'): number => {
    switch (subject) {
      case 'korean':
        return 1;
      case 'english':
        return 2;
      case 'math':
        return 3;
      default:
        return 1;
    }
  };

  const semesterInfo: { [key: string]: string } = {
    '5': '3',
    '6': '5',
    '7': '6',
    '8': '7',
    '9': '9',
    '10': '10',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://3.37.41.244:8000/api/student/${16}/score/?subject_id=${getSubjectId(selectedSubject)}`);

        if (response.data.result[0].subject_id === 1) {
          console.log('국어 데이터');
          const scoresData: ScoreDataItem[] = response.data.result.map((item: any) => ({
            id: item.id,
            grade: item.grade,
            score: item.score,
            exam: semesterInfo[item.exam_id],
          }));

          const grade1Data = scoresData.filter(item => item.grade === '고1');
          const sortedGrade1Data = sortDataBySemester(grade1Data);
          setKorean1(sortedGrade1Data);

          const grade2Data = scoresData.filter(item => item.grade === '고2');
          const sortedGrade2Data = sortDataBySemester(grade2Data);
          setKorean2(sortedGrade2Data);

          const grade3Data = scoresData.filter(item => item.grade === '고3');
          const sortedGrade3Data = sortDataBySemester(grade3Data);
          setKorean3(sortedGrade3Data);
        } else if (response.data.result[0].subject_id === 2) {
          console.log('영어 데이터');
          const scoresData = response.data.result.map((item: any) => ({
            id: item.id,
            grade: item.grade,
            score: item.score,
            exam: semesterInfo[item.exam_id],
          }));

          const grade1Data = scoresData.filter((item: any) => item.grade === '고1');
          const sortedGrade1Data = sortDataBySemester(grade1Data);
          setEnglish1(sortedGrade1Data);

          const grade2Data = scoresData.filter((item: any) => item.grade === '고2');
          const sortedGrade2Data = sortDataBySemester(grade2Data);
          setEnglish2(sortedGrade2Data);

          const grade3Data = scoresData.filter((item: any) => item.grade === '고3');
          const sortedGrade3Data = sortDataBySemester(grade3Data);
          setEnglish3(sortedGrade3Data);
        } else {

          console.log('수학 데이터');
          const scoresData = response.data.result.map((item: any) => ({
            id: item.id,
            grade: item.grade,
            score: item.score,
            exam: semesterInfo[item.exam_id],
          }));
          const grade1Data = scoresData.filter((item: any) => item.grade === '고1');
          const sortedGrade1Data = sortDataBySemester(grade1Data);
          setMath1(sortedGrade1Data);

          const grade2Data = scoresData.filter((item: any) => item.grade === '고2');
          const sortedGrade2Data = sortDataBySemester(grade2Data);
          setMath2(sortedGrade2Data);

          const grade3Data = scoresData.filter((item: any) => item.grade === '고3');
          const sortedGrade3Data = sortDataBySemester(grade3Data);
          setMath3(sortedGrade3Data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedSubject]);

  const sortDataBySemester = (data: ScoreDataItem[]): number[] | [] => {
    const semesterOrder = ['3', '5', '6', '7', '9', '10'];

    const result = semesterOrder.map((semester) => {
      const matchingData = data.find((item) => item.exam === semester);
      return matchingData ? matchingData.score : 0;
    });

    // 모든 값이 0인 경우에는 빈 배열 반환
    return result.some(score => score !== 0) ? result : [];
  };


  // 모의고사 임시 데이터
  const mocksData = {
    korean: {
      series: [
        { name: '1학년', data: korean1 },
        { name: '2학년', data: korean2 },
        { name: '3학년', data: korean3 },
      ],
      xaxisCategories: ['3', '5', '6', '7', '9', '10'],
    },
    english: {
      series: [
        { name: '1학년', data: english1 },
        { name: '2학년', data: english2 },
        { name: '3학년', data: english3 },
      ],
      xaxisCategories: ['3', '5', '6', '7', '9', '10'],
    },
    math: {
      series: [
        { name: '1학년', data: math1 },
        { name: '2학년', data: math2 },
        { name: '3학년', data: math3 },
      ],
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
              type="radio"
              id="korean"
              name="mock"
              value="korean"
              checked={selectedSubject === 'korean'}
              onChange={() => inputRadioHandler('korean')}
            />
            국어
          </label>
          <label>
            <input
              type="radio"
              id="english"
              name="mock"
              value="english"
              checked={selectedSubject === 'english'}
              onChange={() => inputRadioHandler('english')}
            />
            영어
          </label>
          <label>
            <input
              type="radio"
              id="math"
              name="mock"
              value="math"
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
  );
}

export default SchoolMock;
