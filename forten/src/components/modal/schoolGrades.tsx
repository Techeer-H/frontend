import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Wrapper = styled.div`
  width: 84rem;
  background-color: rgba(16, 18, 27, 0.7);
  padding: 0.5rem;
  color: #000;
`;

const FlexContainer = styled.div`
  padding: 1%;
  display: flex;
  justify-content: end;
`;

const RadioContaioner = styled.div`
  width: 50rem;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  font-size: 0.85rem;
`;

interface ScoreDataItem {
  id: number;
  grade: string;
  score: number;
  exam: string;
}

interface SchoolGradesProps {
  studentId: number;
}

interface GradesData {
  series: { name: string; data: number[] }[];
  xaxisCategories: string[];
}

function SchoolGrades(props: SchoolGradesProps) {
  const [selectedSubject, setSelectedSubject] = useState<'korean' | 'english' | 'math' | 'science' | 'social' | 'fluency' | 'pronunciation' | 'vocabulary' | 'syntax' | 'activeListening'>('korean');
  const [gradesData, setGradesData] = useState<Record<'korean' | 'english' | 'math' | 'science' | 'social' | 'fluency' | 'pronunciation' | 'vocabulary' | 'syntax' | 'activeListening', GradesData>>({
    korean: { series: [], xaxisCategories: [] },
    english: { series: [], xaxisCategories: [] },
    math: { series: [], xaxisCategories: [] },
    science: { series: [], xaxisCategories: [] },
    social: { series: [], xaxisCategories: [] },
    fluency: { series: [], xaxisCategories: [] },
    pronunciation: { series: [], xaxisCategories: [] },
    vocabulary: { series: [], xaxisCategories: [] },
    syntax: { series: [], xaxisCategories: [] },
    activeListening: { series: [], xaxisCategories: [] },
  });

  const inputRadioHandler = (subject: 'korean' | 'english' | 'math' | 'science' | 'social' | 'fluency' | 'pronunciation' | 'vocabulary' | 'syntax' | 'activeListening') => {
    setSelectedSubject(subject);
  };

  const getSubjectId = (subject: 'korean' | 'english' | 'math' | 'science' | 'social' | 'fluency' | 'pronunciation' | 'vocabulary' | 'syntax' | 'activeListening'): number => {
    switch (subject) {
      case 'korean':
        return 1;
      case 'english':
        return 2;
      case 'math':
        return 3;
      case 'science':
        return 4;
      case 'social':
        return 5;
      case 'fluency':
        return 6;
      case 'pronunciation':
        return 7;
      case 'vocabulary':
        return 8;
      case 'syntax':
        return 9;
      case 'activeListening':
        return 10;
      default:
        return 1;
    }
  };

  const semesterInfo: { [key: string]: string } = {
    '1': '1-1학기 중간',
    '2': '1-2학기 기말',
    '3': '2-1학기 중간',
    '4': '2-2학기 기말',
    '5': '3',
    '6': '5',
    '7': '6',
    '8': '7',
    '9': '9',
    '10': '10',
    '11': '1-1학기 중간',
    '12': '1-2학기 기말',
    '13': '2-1학기 중간',
    '14': '2-2학기 기말',
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://3.37.41.244:8000/api/student/${props.studentId}/score/?subject_id=${getSubjectId(selectedSubject)}`,
      );
      const dataKey = selectedSubject;

      const scoresData: ScoreDataItem[] = response.data.result.map((item: any) => ({
        id: item.id,
        grade: item.grade,
        score: item.score,
        exam: semesterInfo[item.exam_id],
      }));

      const gradesDataCopy = { ...gradesData };
      gradesDataCopy[dataKey].series = ['초1', '초2', '초3', '초4', '초5', '초6', '중1', '중2', '중3', '고1', '고2', '고3'].map((grade) => {
        const gradeData = scoresData.filter((item) => item.grade === grade);
        const sortedGradeData = sortDataBySemester(gradeData);
        return { name: `${grade}학년`, data: sortedGradeData };
      });

      gradesDataCopy[dataKey].xaxisCategories = [
        '1학기 중간',  //1st Quarter'
        '1학기 기말',  // 2st Quarter',
        '2학기 중간',  // 3st Quarter',
        '2학기 기말', // 4st Quarter',
        '3',
        '5',
        '6',
        '7',
        '9',
        '10',
      ];
      setGradesData(gradesDataCopy);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedSubject]);

  const sortDataBySemester = (data: ScoreDataItem[]): number[] | [] => {
    const semesterOrder = [
      '1-1학기 중간',
      '1-2학기 기말',
      '2-1학기 중간',
      '2-2학기 기말',
      '3',
      '5',
      '6',
      '7',
      '9',
      '10',

      // '1st Quarter',
      // '2st Quarter',
      // '3st Quarter',
      // '4st Quarter',
    ];
    const result = semesterOrder.map((semester) => {
      const matchingData = data.find((item) => item.exam === semester);
      return matchingData ? matchingData.score : 0;
    });
    return result.some((score) => score !== 0) ? result : [];
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      background: 'rgba(16, 18, 27, 0.7);',
    },
    theme: {
      mode: 'dark', // 'light' 또는 'dark'
    },
    series: gradesData[selectedSubject].series,  // 현재 선택된 과목에 대한 데이터를 표시
    xaxis: {
      categories: gradesData[selectedSubject].xaxisCategories,
      title: {
        text: '학기/모의고사',
        style: {
          fontSize: '1rem',
          color: '#fff',
        },
      },
    },
    yaxis: {
      title: {
        // text: '점수',
        style: {
          fontSize: '1rem',
          color: '#fff',
        },
      },
      min: 0,
      max: 170,
      labels: {
        show: false, // y축의 값들을 숨깁니다.
      },
    },
    fill: {
      opacity: 0.5,
      type: 'solid',
    },
  };



  return (
    <Wrapper>
      <FlexContainer>
        <RadioContaioner>
          <label>
            <input
              type="radio"
              id="korean"
              name="school"
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
              name="school"
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
              name="school"
              value="math"
              checked={selectedSubject === 'math'}
              onChange={() => inputRadioHandler('math')}
            />
            수학
          </label>

          <label>
            <input
              type="radio"
              id="test1"
              name="school"
              value="test1"
              checked={selectedSubject === 'science'}
              onChange={() => inputRadioHandler('science')}
            />
            과학
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'social'}
              onChange={() => inputRadioHandler('social')}
            />
            사회
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'fluency'}
              onChange={() => inputRadioHandler('fluency')}
            />
            Fluency
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'pronunciation'}
              onChange={() => inputRadioHandler('pronunciation')}
            />
            Pronunciation
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'vocabulary'}
              onChange={() => inputRadioHandler('vocabulary')}
            />
            Vocabulary
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'syntax'}
              onChange={() => inputRadioHandler('syntax')}
            />
            Syntax
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'activeListening'}
              onChange={() => inputRadioHandler('activeListening')}
            />
            Active Listening
          </label>
        </RadioContaioner>
      </FlexContainer>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height={630}
        width={1300}
      />
    </Wrapper>
  );
}

export default SchoolGrades;
