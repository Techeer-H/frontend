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

function BlendEnterGrades({ examId, selectedGrade, studentId }: EnterGradesProps) {
    // 각 과목에 대한 등급을 상태로 관리(값이 학년, 학기별로 변하므로)
    const [fluency, setFluencyGrade] = useState('');
    const [pronunciation, setPronunciationGrade] = useState('');
    const [vocabulary, setVocabularyGrade] = useState('');
    const [syntax, setSyntaxGrade] = useState('');
    const [activeListening, setActiveListeningl] = useState('');

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
                    subject_id: '6',
                    type: '절대',
                    grade: selectedGrade,
                    score: fluency,
                },
                {
                    exam_id: examId,
                    subject_id: '7',
                    type: '절대',
                    grade: selectedGrade,
                    score: pronunciation,
                },
                {
                    exam_id: examId,
                    subject_id: '8',
                    type: '절대',
                    grade: selectedGrade,
                    score: vocabulary,
                },
                {
                    exam_id: examId,
                    subject_id: '9',
                    type: '절대',
                    grade: selectedGrade,
                    score: syntax,
                },
                {
                    exam_id: examId,
                    subject_id: '10',
                    type: '절대',
                    grade: selectedGrade,
                    score: activeListening,
                },
            ],
        };

        console.log(data);

        //새로고침했을 때 데이터 날아가는 것 방지
        event.preventDefault();

        try {
            const response = await axios.post(`http://3.37.41.244:8000/api/student/${student}/score/`, data);
            console.log('성공적으로 저장되었습니다', response.data);
            alert('성공적으로 저장되었습니다');
        } catch (error) {
            console.error('등급 저장 중 오류 발생', error);
            alert('저장 오류! 다시 입력 해주세요');
        }
    };

    const getSemesterName = (examId: string) => {
        switch (examId) {
            case '11':
                return `1st Quarter`;
            case '12':
                return '2st Quarter';
            case '13':
                return '3st Quarter';
            case '14':
                return '4st Quarter';
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Explan>{getSemesterName(examId)}</Explan>
            <Input
                type="text"
                placeholder="Fluency"
                value={fluency}
                onChange={(e) => setFluencyGrade(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Pronunciation"
                value={pronunciation}
                onChange={(e) => setPronunciationGrade(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Vocabulary"
                value={vocabulary}
                onChange={(e) => setVocabularyGrade(e.target.value)}
            />
            <Input
                type='text'
                placeholder='Syntax'
                value={syntax}
                onChange={(e) => setSyntaxGrade(e.target.value)}
            />
            <Input
                type='text'
                placeholder='Active Listening'
                value={activeListening}
                onChange={(e) => setActiveListeningl(e.target.value)}
            />

            <BtnWrapper>
                <SummitBtn type="submit">
                    저장
                    <div>
                        <img src={send} alt="전송 아이콘" />
                    </div>
                </SummitBtn>
            </BtnWrapper>
        </Form>
    );
}

const Form = styled.form`
  width: 13.75rem;
  height: 16rem;
  background-color: rgba(146, 151, 179, 0.13);
  border-radius: 15px;
  border: 2px solid #707070;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Explan = styled.div`
  width: 100%;
  padding: 3%;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 12rem;
  height: 2rem;
  padding: 2%;
  background-color: transparent;
  border-bottom: 1px solid #3D4450;
  color: #fff;

  ::placeholder {
    color: #fff; 
  }
`;

const BtnWrapper = styled.div`
  width: 12rem;
  height: 2rem;
  border-radius: 3px;
  background-color: #3D4450;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SummitBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BlendEnterGrades;
