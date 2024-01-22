// 학생리스트
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import aiPrompt from '../../assets/AIPrompt.svg';
import registerGrade from '../../assets/registerGrade.svg';
import axios from 'axios';
import RedStatusButton from './redStatusButton';
import GreenStatusButton from './greenStatusButton';

//1차 샘플데이터
// const studentInfo = () => {
//   const [studentlist, setStudentList] = useState<
//     {
//       id: number;
//       name: string;
//       school: string;
//       birth: string;
//       phone: string;
//       parent_phone: string;
//     }[]
//   >([]);

//   const getSudentList = async () => {
//     const response = await axios.get(
//       'http://3.37.41.244:8000/api/student/?id=1&student_id=37&search=',
//     );
//     setStudentList(response.data.result); //여기까지하면 처음페이지 불러올떄 있는 목록만 나옴
//     console.log(response.data.result);
//     // setStudentList((prev) => [...prev, response.data]); // api 명세서 보면 response 안에 result , studentList
//   };

//   useEffect(() => {
//     getSudentList();
//   }, []);

interface Student {
  id: number;
  name: string;
  school: string;
  birth: string;
  phone: string;
  parent_phone: string;
  isFeedback: boolean;
}

interface Props {
  studentInput: string;
  selectedStatus: string
}
const user_Id = localStorage.getItem('user_Id');

const StudentInfo = ({ studentInput, selectedStatus }: Props) => {
  const [studentlist, setStudentList] = useState<Student[]>([]);
  const navigate = useNavigate();

  const getStudentList = async () => {
    let response;


    console.log(user_Id);

    if (studentInput === '') {
      response = await axios.get(`http://3.37.41.244:8000/api/student/?id=${user_Id}`);
    } else {
      if (isNaN(Number(studentInput))) {
        // 숫자가 아닐때가
        console.log(studentInput);
        response = await axios.get(
          `http://3.37.41.244:8000/api/student/?id=${user_Id}&search=${studentInput}`,
        );
      } else {
        // 숫자일때
        response = await axios.get(
          `http://3.37.41.244:8000/api/student/?id=${user_Id}&student_id=${studentInput}`,
        );
      }
      setStudentList(response.data.result); //여기까지하면 처음페이지 불러올떄 있는 목록만 나옴
      console.log(response.data.result);
      // setStudentList((prev) => [...prev, response.data]); // api 명세서 보면 response 안에 result , studentList
    }
  };

  useEffect(() => {
    getStudentList();
  }, [studentInput]);

  const gradeRegisterHandler = (studentId: number) => {
    navigate('/schooltest', { state: { studentId } })
  }

  const aiPromptHandler = (studentId: number) => {
    navigate('/aiprompt', { state: { studentId } })
  }

  return (
    <Wrapper>
      <Ul>
        {studentlist.map((student) => {
          if (
            (selectedStatus === '1' && (student.isFeedback || !student.isFeedback)) ||
            (selectedStatus === '2' && student.isFeedback) ||
            (selectedStatus === '3' && !student.isFeedback)
          ) {
            return (
              <Li key={student.id}>
                <Text>{student.name}</Text>
                <Text>{student.school}</Text>
                <Text>{student.birth}</Text>
                <Text>{student.phone}</Text>
                <Text>{student.parent_phone}</Text>
                <ImgContainer>
                  <ImgBox onClick={() => gradeRegisterHandler(student.id)}>
                    <img src={registerGrade} alt="성적등록하기" />
                  </ImgBox>
                  <ImgBox2 onClick={() => aiPromptHandler(student.id)}>
                    <img src={aiPrompt} alt="프롬트제작페이지" />
                  </ImgBox2>
                </ImgContainer>

                {/* 평가 여부에 따른 상태 (완료, 미완료) 나타내기 */}
                {selectedStatus === '1' && (student.isFeedback ? <GreenStatusButton /> : <RedStatusButton />)}
                {selectedStatus === '2' && student.isFeedback && <GreenStatusButton />}
                {selectedStatus === '3' && !student.isFeedback && <RedStatusButton />}
              </Li>
            );
          }
          // 해당 조건에 맞지 않으면 null을 반환하여 렌더링되지 않도록 함
          return null;
        })}
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  color: #737b7b;
`;
const Ul = styled.ul`
  /* display: flex;
  justify-content: space-evenly;
  width: 100%; */
`;

const Li = styled.li`
  display: flex;
  justify-content: space-evenly;
  width: 51rem;
  align-items: center;
`;
const Text = styled.span``;
const ImgContainer = styled.div``;
const ImgBox = styled.button``;
const ImgBox2 = styled.button`
  margin-left: 0.4rem;
`;

export default StudentInfo;
