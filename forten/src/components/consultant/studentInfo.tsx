// 학생리스트
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import aiPrompt from '../../assets/AIPrompt.svg';
import registerGrade from '../../assets/registerGrade.svg';
import axios from 'axios';
import RedStatusButton from './redStatusButton';
import GreenStatusButton from './greenStatusButton';
import Mark from '../../assets/Mark.svg';
import NoMark from '../../assets/NoMark.svg';

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

export interface StudentType {
  academy_id: number;
  id: number;
  name: string;
  school: string;
  birth: string;
  phone: string;
  parent_name: string;
  parent_phone: string;
  isFeedback: boolean;
  grade: string;
}

interface Props {
  studentInput: string;
  selectedStatus: string;
  studentlist: StudentType[];
  bookmarkedStudents: string[];
  setStudentList: React.Dispatch<React.SetStateAction<StudentType[]>>;
  setBookmarkedStudents: React.Dispatch<React.SetStateAction<string[]>>;
}

const user_Id = localStorage.getItem('user_Id');

const StudentInfo = ({
  studentInput,
  selectedStatus,
  studentlist,
  setStudentList,
  bookmarkedStudents,
  setBookmarkedStudents,
}: Props) => {
  const navigate = useNavigate();

  const getStudentList = async () => {
    let response;

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
      console.log('res검색  처음 응답 받을 때', response.data.result);
      setStudentList(response.data.result); //여기까지하면 처음페이지 불러올떄 있는 목록만 나옴

      // setStudentList((prev) => [...prev, response.data]); // api 명세서 보면 response 안에 result , studentList
    }
  };

  useEffect(() => {
    getStudentList();
  }, [studentInput]);

  const handleBookmark = (studentName: string) => {
    if (bookmarkedStudents.includes(studentName)) {
      const updatedBookmarks = bookmarkedStudents.filter((name) => name !== studentName);
      setBookmarkedStudents(updatedBookmarks);
      localStorage.setItem('bookmarkedStudents', JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = [...bookmarkedStudents, studentName];
      setBookmarkedStudents(updatedBookmarks);
      localStorage.setItem('bookmarkedStudents', JSON.stringify(updatedBookmarks));
    }
  };
  const gradeRegisterHandler = (studentId: number) => {
    navigate('/schooltest', { state: { studentId } });
  };

  const aiPromptHandler = (studentId: number) => {
    navigate('/aiprompt', { state: { studentId } });
  };

  return (
    <Ul>
      {studentlist.map((student) => {
        if (
          (selectedStatus === '1' && (student.isFeedback || !student.isFeedback)) ||
          (selectedStatus === '2' && student.isFeedback) ||
          (selectedStatus === '3' && !student.isFeedback)
        ) {
          return (
            <Li key={student.id}>
              <Student>{student.name}</Student>
              <School>{student.school}</School>
              <Age>{student.birth}</Age>
              <Phone>{student.phone}</Phone>
              <ParentPhone>{student.parent_phone}</ParentPhone>
              <Action>
                <ImgBox onClick={() => handleBookmark(student.name)}>
                  <img
                    src={bookmarkedStudents.includes(student.name) ? Mark : NoMark}
                    alt="북마크"
                  />
                </ImgBox>
                <ImgBox onClick={() => gradeRegisterHandler(student.id)}>
                  <img src={registerGrade} alt="성적등록하기" />
                </ImgBox>
                <ImgBox onClick={() => aiPromptHandler(student.id)}>
                  <img src={aiPrompt} alt="프롬트제작페이지" />
                </ImgBox>
              </Action>
              <Status>
                {/* 평가 여부에 따른 상태 (완료, 미완료) 나타내기 */}
                {selectedStatus === '1' &&
                  (student.isFeedback ? <GreenStatusButton /> : <RedStatusButton />)}
                {selectedStatus === '2' && student.isFeedback && <GreenStatusButton />}
                {selectedStatus === '3' && !student.isFeedback && <RedStatusButton />}
              </Status>
            </Li>
          );
        }
        // 해당 조건에 맞지 않으면 null을 반환하여 렌더링되지 않도록 함
        return null;
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  width: 57rem;
  font-size: 0.7rem;
  color: #737b7b;
  overflow: auto;
`;

const Li = styled.li`
  padding-bottom: 1rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddfdf;
  &:hover {
    scale: 1.04;
  }
`;
const Student = styled.div`
  text-align: center;
  width: 5rem;
`;

const School = styled.div`
  text-align: center;
  width: 5rem;
`;
const Age = styled.div`
  text-align: center;
  width: 5rem;
`;
const Phone = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 7rem;
`;
const ParentPhone = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 7rem;
`;
const Action = styled.div`
  text-align: center;
  width: 4rem;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.6rem;
  border: 0.1px solid rgb(171, 172, 247);
`;

const ImgBox = styled.button``;

const Status = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
`;

export default StudentInfo;
