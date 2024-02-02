import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styles';
import axios from 'axios';
import Navbar from '../../../components/consultant/navBar';
import GrayBox from '../../../components/consultant/grayBox';
import BookMarkList from '../../../components/consultant/bookMarkList';
import Memo from '../../../components/consultant/memo';
import StudentInfo, { StudentType } from '../../../components/consultant/studentInfo';
import search from '../../../assets/searchIcon.svg';
import RegisterModal from '../modal/registermodal';



export type UserType = {
  user_id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
  role: string;
};

const ConsultantMainPage = () => {
  const [isModalOpened, setIsOpened] = useState<boolean>(false);
  const [studentInput, setStudentInput] = useState<string>('');
  const [stateSelect, setStateSelect] = useState('1');
  const [studentlist, setStudentList] = useState<StudentType[]>([]);

  //즐겨찾기 변수
  const [bookmarkedStudents, setBookmarkedStudents] = useState<string[]>(() => {
    const storedBookmarks = localStorage.getItem('bookmarkedStudents');
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  // const [userData, setUserData] = useState<UserType>({
  //   user_id: '',
  //   email: '',
  //   password: '',
  //   name: '',
  //   phone: '',
  //   birth: '',
  //   role: '',
  // });
  // const [studentlist, setStudentList] = useState<
  //   {
  //     id: number;
  //     name: string;
  //     school: string;
  //     birth: string;
  //     phone: string;
  //     parent_phone: string;
  //   }[]
  // >([]);

  const handleClick = () => {
    setIsOpened((prev) => !prev); // setIsOpened(!isModalOpened);
  };

  //검색 기능 구현
  const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentInput(e.target.value.toLowerCase());
  };

  //화면에 학생리스트를 위해 만들어보았다가 일단 실패 담에 한번 해보세요!
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'http://3.37.41.244:8000/api/student/?id=1&student_id=&search=',
  //       );
  //       setStudentList(response.data.result);
  //     } catch (error) {
  //       console.error('Error fetching student data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const user_Id = localStorage.getItem('user_Id');
    axios
      .get(`http://3.37.41.244:8000/api/student/?id=${user_Id}`)
      .then((response) => {
        // 로그인 성공 시 처리
        const userData = response.data.result;

        setStudentList(userData);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error('유저 정보 불러오기 실패', error);
        // 예: 에러 메시지 표시 등
      });
  }, []);

  const stateSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = event.target.value;
    setStateSelect(selectOption);
  };

  return (
    // 전체화면
    <>
      {isModalOpened && (
        <RegisterModal
          studentlist={studentlist}
          setstudentList={setStudentList}
          handleClick={handleClick}
        />
      )}
      <S.background>
        <Navbar />
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <S.TopFullContainer>
            <div style={{ marginLeft: '2rem' }}></div>
            <div
              style={{
                marginTop: '1rem',
                width: '15px',
                height: '15px',
                backgroundColor: '#f96057',
                borderRadius: '50%',
                boxShadow: '24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65',
                marginRight: '13.1rem',
              }}
            ></div>
            <S.StudentListExplan>StudentList</S.StudentListExplan>

            <S.StudentSearchContainer>
              <img
                src={search}
                style={{ marginTop: '0.1rem', width: '1rem', height: '1rem' }}
                alt="Search Icon"
              />
              <S.StyledInput
                onChange={getSearchData}
                value={studentInput}
                type="text"
                placeholder="Search"
              />
            </S.StudentSearchContainer>
            <S.StyledSelect onChange={stateSelectHandler} value={stateSelect}>
              <option value="1">전체</option>
              <option value="2">완료</option>
              <option value="3">미완료</option>
            </S.StyledSelect>
          </S.TopFullContainer>
        </div>

        <S.fullcontainer>
          <S.LeftFullContainer>
            <S.MarkContainer>
              <S.MarkHeader>MARK</S.MarkHeader>

              <BookMarkList
                bookmarkedStudents={bookmarkedStudents}
                setBookmarkedStudents={setBookmarkedStudents}
              />

            </S.MarkContainer>

            <S.TextareaContainer>
              <S.TextareaHeader>MEMO</S.TextareaHeader>
              <Memo />
            </S.TextareaContainer>
          </S.LeftFullContainer>

          <S.RightFullContainer>
            <S.SearchContainer>

              <GrayBox />

              {/*  ConsultantMainPage 컴포넌트에서 StudentInfo 컴포넌트 사용 부분
 StudentInfo 컴포넌트에 studentlist를 props로 전달하고, 검색 결과에 따라 이를 업데이트할 수 있도록 함 */}
              <StudentInfo
                studentlist={studentlist}
                setStudentList={setStudentList}
                studentInput={studentInput}
                selectedStatus={stateSelect}
                bookmarkedStudents={bookmarkedStudents}
                setBookmarkedStudents={setBookmarkedStudents}
              />
            </S.SearchContainer>

            <S.StyledButton type="button" onClick={handleClick} />
          </S.RightFullContainer>
        </S.fullcontainer>
      </S.background>
    </>
  );
};

export default ConsultantMainPage;
