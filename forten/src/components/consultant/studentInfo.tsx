// 학생리스트

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import aiPrompt from '../../assets/AIPrompt.svg';
import inquireStudent from '../../assets/inquireStudent.svg';
import registerGrade from '../../assets/registerGrade.svg';
import axios from 'axios';
import GreenStatusButton from './greenStatusButton';
import RedStatusButton from './redStatusButton';

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
}

interface Props {
  studentInput: string;
}

const StudentInfo = ({ studentInput }: Props) => {
  const [studentlist, setStudentList] = useState<Student[]>([]);

  const getStudentList = async () => {
    let response;

    if (studentInput === '') {
      response = await axios.get(`http://3.37.41.244:8000/api/student/?id=1`);
    } else {
      if (isNaN(Number(studentInput))) {
        // 숫자가 아닐때가
        console.log(studentInput);
        response = await axios.get(
          `http://3.37.41.244:8000/api/student/?id=1&search=${studentInput}`,
        );
      } else {
        // 숫자일때
        response = await axios.get(
          `http://3.37.41.244:8000/api/student/?id=1&student_id=${studentInput}`,
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

  return (
    <Wrapper>
      <Ul>
        {studentlist.map((student) => (
          <Li key={student.id}>
            <Text>{student.name}</Text>
            <Text>{student.school}</Text>
            <Text>{student.birth}</Text>
            <Text>{student.phone}</Text>
            <Text>{student.parent_phone}</Text>
            <ImgContainer>
              <ImgBox>
                <img src={registerGrade} alt="성적등록하기" />
              </ImgBox>
              <ImgBox2>
                <img src={aiPrompt} alt="프롬트제작페이지" />
              </ImgBox2>
            </ImgContainer>

            {/* <GreenStatusButton /> */}
            <RedStatusButton />
          </Li>
        ))}
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
