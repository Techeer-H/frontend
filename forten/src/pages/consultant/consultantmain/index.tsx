import React, { useState } from 'react';
import * as S from './styles';

import Navbar from '../../../components/consultant/navBar';
import GrayBox from '../../../components/consultant/grayBox';
import Memo from '../../../components/consultant/memo';
import search from '../../../assets/searchIcon.svg';
import star from '../../../assets/star.svg';
import StudentInfo from '../../../components/consultant/studentInfo';
import BookMarkList from '../../../components/consultant/bookMarkList';
import RegisterModal from '../../../components/modal/registermodal';
interface Props {}

const ConsultantMainPage = (props: Props) => {
  const [isModalOpened, setIsOpened] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpened((prev) => !prev); // setIsOpened(!isModalOpened);
  };
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
          <BookMarkList />
        </S.LeftFullContainer>
        <S.RightFullContainer>
          <S.SearchContainer>
            <S.FlexContainer>
              <S.RegisterStudentButton>
                <S.ModalWrapper isOpen={isModalOpened}>
                  {isModalOpened && (
                    <RegisterModal isOpen={isModalOpened} handleClick={handleClick} />
                  )}
                </S.ModalWrapper>

                <S.StyledButton type="button" value="학생 등록" onClick={handleClick} />
              </S.RegisterStudentButton>

              <S.StudentSearchContainer>
                <S.StyledInput type="text" placeholder="학생조회" />
                <S.SearchIcon src={search} alt="Search Icon" />
              </S.StudentSearchContainer>

              <S.DropDownContainer>
                <S.StyledSelect className="text-gray-700">
                  <option>선택 </option>
                  <option value="1">전체</option>
                  <option value="2">완료</option>
                  <option value="3">미완료</option>
                </S.StyledSelect>
              </S.DropDownContainer>
            </S.FlexContainer>
            <GrayBox />
            <StudentInfo />
          </S.SearchContainer>

          <Memo />
        </S.RightFullContainer>
      </S.fullcontainer>
    </S.background>
  );
};

export default ConsultantMainPage;
