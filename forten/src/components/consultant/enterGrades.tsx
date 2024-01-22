import styled from 'styled-components';
import send from '../../assets/send.png';
import React, { useState } from 'react';
import axios from 'axios';

// 부모 페이지에서 사용
interface EnterGradesProps {
  examId: string;
  selectedGrade: string;
  studentId: number;
}

function EnterGrades({ examId, selectedGrade, studentId }: EnterGradesProps) {
  // 각 과목에 대한 등급을 상태로 관리(값이 학년, 학기별로 변하므로)
  const [koreanGrade, setKoreanGrade] = useState('');
  const [mathGrade, setMathGrade] = useState('');
  const [englishGrade, setEnglishGrade] = useState('');

  // 학생 id를 받아옴, 이 student 값을 통신할 때 보내면
  // 해당 학생에 대한 성적을 입력할 수 있음
  const student = studentId
  console.log(student);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 폼 제출할 때 실행되는 함수-등급을 서버에 저장하는 로직 ㅇ

    // SCORE, GRADE, EXAM_ID, SUBJECT_ID
    const data = {
      scoreList: [
        {
          exam_id: examId,
          subject_id: '1',
          type: '상대',
          grade: selectedGrade,
          score: koreanGrade,
        },
        {
          exam_id: examId,
          subject_id: '2',
          type: '상대',
          grade: selectedGrade,
          score: mathGrade,
        },
        {
          exam_id: examId,
          subject_id: '3',
          type: '상대',
          grade: selectedGrade,
          score: englishGrade,
        },
      ],
    };

    console.log(data);

    //새로고침했을 때 데이터 날아가는 것 방지
    event.preventDefault();

    try {
      const response = await axios.post(`http://3.37.41.244:8000/api/student/${student}/score/`, data);
      console.log('성공적으로 저장되었습니다', response.data);
    } catch (error) {
      console.error('등급 저장 중 오류 발생', error);
    }
  };

  const getSemesterName = (examId: string) => {
    switch (examId) {
      case '1':
        return '1학기 중간고사';
      case '2':
        return '1학기 기말고사';
      case '3':
        return '2학기 중간고사';
      case '4':
        return '2학기 기말고사';
      case '5':
        return '3월';
      case '6':
        return '5월';
      case '7':
        return '6월';
      case '8':
        return '7월';
      case '9':
        return '9월';
      case '10':
        return '10월';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Explan>{getSemesterName(examId)}</Explan>
      <Input
        type="text"
        placeholder="국어 등급 입력"
        value={koreanGrade}
        onChange={(e) => setKoreanGrade(e.target.value)}
      />
      <Input
        type="text"
        placeholder="수학 등급 입력"
        value={mathGrade}
        onChange={(e) => setMathGrade(e.target.value)}
      />
      <Input
        type="text"
        placeholder="영어 등급 입력"
        value={englishGrade}
        onChange={(e) => setEnglishGrade(e.target.value)}
      />

      <BtnWrapper>
        <SummitBtn type="submit">
          저장하기
          <div>
            <img src={send} alt="전송 아이콘" />
          </div>
        </SummitBtn>
      </BtnWrapper>
    </Form>
  );
}

const Form = styled.form`
  width: 8.25rem;
  height: 15.25rem;
  background-color: rgba(252, 246, 255, 0.5);
  border: 1px solid #c1c7ff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Explan = styled.div`
  font-size: 1rem;
  font-weight: 900;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  background-color: transparent;
`;

const BtnWrapper = styled.div`
  width: 100%;
  background-color: #c1c7ff;
  display: flex;
  justify-content: center;
`;

const SummitBtn = styled.button`
  display: flex;
  align-items: center;
`;

export default EnterGrades;
