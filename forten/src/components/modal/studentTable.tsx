import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ColumnContainer = styled.div``;

const UserName = styled.p`
  font-size: 1.5rem;
`;

const School = styled.p`
  font-size: 1.25rem;
`;

const Grade = styled.p`
  font-size: 1.25rem;
`;

// const PhoneNumber = styled.p`
//   font-size: 0.75rem;
//   margin-top: 0.5rem;
// `;

interface StudentTableProps {
  studentId: number;
}

const user_Id = localStorage.getItem('user_Id');

// 학생 정보 컴포넌트
function StudentTable(props: StudentTableProps) {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    birth: '',
    school: '',
    grade: '',
    phone: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 강사, 학생id
        const response = await axios.get(
          `http://3.37.41.244:8000/api/student?id=${user_Id}&student_id=${props.studentId}`,
        );
        console.log(response);
        const studentData = response.data.result[0]; // 응답 데이터 확인, stu_id가 들어가면 됨(인덱스)
        console.log(studentData);
        setStudentInfo({
          name: studentData.name || '',
          birth: studentData.birth || '',
          school: studentData.school || '',
          grade: studentData.grade || '',
          phone: studentData.phone || '',
        });
        console.log('학생 정보 불러오기 성공');
      } catch (error) {
        console.error('학생 정보 불러오기 실패', error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  return (
    <ColumnContainer>
      <UserName>{studentInfo.name}({studentInfo.birth}_{studentInfo.grade})</UserName>

      <School>{studentInfo.phone}</School>
      <Grade>{studentInfo.school}</Grade>
      {/* <PhoneNumber>{studentInfo.phone}</PhoneNumber> */}
    </ColumnContainer>
  );
}

export default StudentTable;
