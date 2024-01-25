import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styles';

import Tnavbar from '../../../components/teacher/Tnavbar';
import TgrayBox from '../../../components/teacher/Tgraybox';

// 이 메모랑 즐겨찾기는 통합해도될듯?
import TbookMarkList from '../../../components/teacher/TbookMarkList';
import Tmemo from '../../../components/teacher/Tmemo';

import TstudentInfo, { StudentType } from '../../../components/teacher/TstudentInfo';

import search from '../../../assets/searchIcon.svg';
import star from '../../../assets/star.svg';
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

const TeacherPage = () => {
  //검색 변수 , 필터링 변수
  const [studentInput, setStudentInput] = useState<string>('');
  const [stateSelect, setStateSelect] = useState('1');

  //학생리스트 조회 변수
  const [studentlist, setStudentList] = useState<StudentType[]>([]);

  //즐겨찾기 변수
  const [bookmarkedStudents, setBookmarkedStudents] = useState<string[]>(() => {
    const storedBookmarks = localStorage.getItem('bookmarkedStudents');
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  //검색 기능 구현
  const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentInput(e.target.value.toLowerCase());
  };

  //필터링 변수
  const stateSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = event.target.value;
    setStateSelect(selectOption);
  };

  useEffect(() => {
    const user_Id = localStorage.getItem('user_Id');
    axios
      .get(`http://3.37.41.244:8000/api/student/?id=${user_Id}`)
      .then((response) => {
        // 로그인 성공 시 처리
        const userData = response.data.result;
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

  console.log(stateSelect);

  return (
    <S.background>
      <Tnavbar />
      <S.fullcontainer>
        <S.LeftFullContainer>
          <S.purpleCircle>
            <div>
              <img src={star} alt="star" style={{ marginLeft: '1rem', marginRight: '1rem' }} />
            </div>
            <p>즐겨찾기</p>
          </S.purpleCircle>
          <TbookMarkList
            bookmarkedStudents={bookmarkedStudents}
            setBookmarkedStudents={setBookmarkedStudents}
          />
        </S.LeftFullContainer>

        <S.RightFullContainer>
          <S.SearchContainer>
            <S.FlexContainer>
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
            <TgrayBox />
            <TstudentInfo
              //학생리스트 props
              studentlist={studentlist}
              setStudentList={setStudentList}
              //검색 ,필터링 props
              studentInput={studentInput}
              selectedStatus={stateSelect}
              // 즐겨찾기 props
              bookmarkedStudents={bookmarkedStudents}
              setBookmarkedStudents={setBookmarkedStudents}
            />
          </S.SearchContainer>
          <Tmemo />
        </S.RightFullContainer>
      </S.fullcontainer>
    </S.background>
  );
};

export default TeacherPage;
