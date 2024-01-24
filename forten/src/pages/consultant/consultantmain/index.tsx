import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styles';
import Navbar from '../../../components/consultant/navBar';
import GrayBox from '../../../components/consultant/grayBox';
import Memo from '../../../components/consultant/memo';
import search from '../../../assets/searchIcon.svg';
import star from '../../../assets/star.svg';
import StudentInfo, { StudentType } from '../../../components/consultant/studentInfo';
import BookMarkList from '../../../components/consultant/bookMarkList';
import RegisterModal from '../modal/registermodal';
import axios from 'axios';
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
        const userData: { result: UserType } = response.data.result;
        // setUserData(userData.result);
        console.log('성공', userData);
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
  console.log(stateSelect);
  return (
    // 전체화면
    <S.background>
      <Navbar />
      <S.fullcontainer>
        <S.LeftFullContainer>
          <S.purpleCircle>
            <div>
              <img src={star} alt="star" style={{ marginLeft: '1rem', marginRight: '1rem' }} />
            </div>
            <p>즐겨찾기</p>
          </S.purpleCircle>
          <BookMarkList
            bookmarkedStudents={bookmarkedStudents}
            setBookmarkedStudents={setBookmarkedStudents}
          />
        </S.LeftFullContainer>
        <S.RightFullContainer>
          <S.SearchContainer>
            <S.FlexContainer>
              <S.RegisterStudentButton>
                <S.ModalWrapper isOpen={isModalOpened}>
                  {isModalOpened && (
                    <RegisterModal
                      studentlist={studentlist}
                      setstudentList={setStudentList}
                      handleClick={handleClick}
                    />
                  )}
                </S.ModalWrapper>
                <S.StyledButton type="button" value="학생 등록" onClick={handleClick} />
              </S.RegisterStudentButton>
              <S.StudentSearchContainer>
                <S.StyledInput
                  onChange={getSearchData}
                  value={studentInput}
                  type="text"
                  placeholder="학생조회"
                />
                <S.SearchIcon>
                  <img src={search} alt="Search Icon" />
                </S.SearchIcon>
              </S.StudentSearchContainer>
              <S.DropDownContainer>
                <S.StyledSelect
                  className="text-gray-700"
                  onChange={stateSelectHandler}
                  value={stateSelect}
                >
                  <option value="1">전체</option>
                  <option value="2">완료</option>
                  <option value="3">미완료</option>
                </S.StyledSelect>
              </S.DropDownContainer>
            </S.FlexContainer>
            <GrayBox />
            {/*  ConsultantMainPage 컴포넌트에서 StudentInfo 컴포넌트 사용 부분
 StudentInfo 컴포넌트에 studentlist를 props로 전달하고, 검색 결과에 따라 이를 업데이트할 수 있도록 함 */}
            <StudentInfo
              studentlist={studentlist}
              setStudentList={setStudentList}
              studentInput={studentInput}
              selectedStatus={stateSelect}
              //즐겨찾기
              bookmarkedStudents={bookmarkedStudents}
              setBookmarkedStudents={setBookmarkedStudents}
            />
          </S.SearchContainer>
          <Memo />
        </S.RightFullContainer>
      </S.fullcontainer>
    </S.background>
  );
};
export default ConsultantMainPage;
