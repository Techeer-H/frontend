import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserIcon from '../../assets/PersonIcon.svg';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 11rem;
  height: 100%;
  border-right: 1px solid #979797;
  padding-top: 2.5rem;
`;
const UserBox = styled.div`
  width: 7.7rem;
  height: 1.875rem;
  background-color: #b59ff2;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
`;

const UserName = styled.p`
  font-size: 1rem;
  color: #f1f1f1;
`;

const School = styled.p`
  font-size: 1rem;
  color: #737b7b;
  margin-top: 1rem;
`;

const Grade = styled.p`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const PhoneNumber = styled.p`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

interface StudentTableProps {
  studentId: number;
};

const user_Id = localStorage.getItem('user_Id');

// 학생 정보 컴포넌트
function StudentTable(props: StudentTableProps) {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    school: '',
    grade: '',
    phone: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 강사, 학생id
        const response = await axios.get(`http://3.37.41.244:8000/api/student?id=${user_Id}&student_id=${props.studentId}&search=`);
        const studentData = response.data.result[0];  // 응답 데이터 확인, stu_id가 들어가면 됨(인덱스)
        setStudentInfo({
          name: studentData.name || '',
          school: studentData.school || '',
          grade: studentData.grade || '',
          phone: studentData.phone || ''
        });
        console.log('학생 정보 불러오기 성공');
      } catch (error) {
        console.error('학생 정보 불러오기 실패', error);
      }
    };

    fetchData();
  }, []);  // 빈 배열을 넣어 한 번만 실행되도록 설정

  return (
    <ColumnContainer>
      <UserBox>
        <div>
          <img src={UserIcon} alt="유저아이콘" />
        </div>
        <UserName>{studentInfo.name}</UserName>
      </UserBox>
      <School>{studentInfo.school}</School>
      <Grade>{studentInfo.grade}</Grade>
      <PhoneNumber>{studentInfo.phone}</PhoneNumber>
    </ColumnContainer>
  );
}

export default StudentTable;
