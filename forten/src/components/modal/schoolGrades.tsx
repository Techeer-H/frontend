import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Wrapper = styled.div`
  width: 26rem;
  height: 16rem;
  border: 1px solid #717171;
  border-radius: 10px;
  margin-bottom: 1rem;
  background-color: #fff;
  padding: 0.5rem;
    background-color: #22283E;
    color: #fff;
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
  width: 20rem;
  display: flex;
  justify-content: space-evenly;
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
  const [selectedSubject, setSelectedSubject] = useState<'korean' | 'english' | 'math' | 'test1' | 'test2'>('korean');
  const [gradesData, setGradesData] = useState<Record<'korean' | 'english' | 'math' | 'test1' | 'test2', GradesData>>({
    korean: { series: [], xaxisCategories: [] },
    english: { series: [], xaxisCategories: [] },
    math: { series: [], xaxisCategories: [] },
    test1: { series: [], xaxisCategories: [] },
    test2: { series: [], xaxisCategories: [] },
  });

  const inputRadioHandler = (subject: 'korean' | 'english' | 'math' | 'test1' | 'test2') => {
    setSelectedSubject(subject);
  };

  // 백엔드에서 subject object에서 test1과 test2 에대한 값을 넣어놔야 할듯
  const getSubjectId = (subject: 'korean' | 'english' | 'math' | 'test1' | 'test2'): number => {
    switch (subject) {
      case 'korean':
        return 1;
      case 'english':
        return 2;
      case 'math':
        return 3;
      case 'test1':
        return 4;
      case 'test2':
        return 5;
      default:
        return 1;
    }
  };

  const semesterInfo: { [key: string]: string } = {
    '1': '1-1학기 중간',
    '2': '1-2학기 기말',
    '3': '2-1학기 중간',
    '4': '2-2학기 기말',
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://3.37.41.244:8000/api/student/${props.studentId}/score/?subject_id=${getSubjectId(selectedSubject)}`);
      const dataKey = selectedSubject;

      const scoresData: ScoreDataItem[] = response.data.result.map((item: any) => ({
        id: item.id,
        grade: item.grade,
        score: item.score,
        exam: semesterInfo[item.exam_id],
      }));

      const gradesDataCopy = { ...gradesData };
      gradesDataCopy[dataKey].series = ['고1', '고2', '고3'].map((grade) => {
        const gradeData = scoresData.filter((item) => item.grade === grade);
        const sortedGradeData = sortDataBySemester(gradeData);
        return { name: `${grade}학년`, data: sortedGradeData };
      });

      gradesDataCopy[dataKey].xaxisCategories = ['1학기 중간', '1학기 기말', '2학기 중간', '2학기 기말'];
      setGradesData(gradesDataCopy);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedSubject]);

  const sortDataBySemester = (data: ScoreDataItem[]): number[] | [] => {
    const semesterOrder = ['1-1학기 중간', '1-2학기 기말', '2-1학기 중간', '2-2학기 기말'];
    const result = semesterOrder.map((semester) => {
      const matchingData = data.find((item) => item.exam === semester);
      return matchingData ? matchingData.score : 0;
    });
    return result.some(score => score !== 0) ? result : [];
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      background: '#22283E',
    },
    theme: {
      mode: 'dark', // 또는 'dark'
    },
    series: gradesData[selectedSubject].series,
    xaxis: {
      categories: gradesData[selectedSubject].xaxisCategories,
      title: {
        text: '학기',
      },
    },
    yaxis: {
      title: {
        text: '등급',
      },
      min: 0,
      max: 100,
    },
  };

  return (
    <Wrapper>
      <FlexContainer>
        <Explan>내신</Explan>
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
              checked={selectedSubject === 'test1'}
              onChange={() => inputRadioHandler('test1')}
            />
            test1
          </label>

          <label>
            <input
              type="radio"
              id="test2"
              name="school"
              value="test2"
              checked={selectedSubject === 'test2'}
              onChange={() => inputRadioHandler('test2')}
            />
            test2
          </label>
        </RadioContaioner>
      </FlexContainer>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={500}
        width={600}
      />
    </Wrapper>
  );
}

export default SchoolGrades;
