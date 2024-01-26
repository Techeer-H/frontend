import styled from 'styled-components';
import Navbar from '../../components/consultant/navBar';
import GrayBox from '../../components/consultant/grayBox';
import Memo from '../../components/consultant/memo';

import Search from '../../assets/searchIcon.png';
import Filter from '../../assets/filterIcon.png';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;
  background: linear-gradient(to bottom left, #8d8ab4, #d9c9c9);
`;

const FullContainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`;

const LeftContainer = styled.div`
  width: 21.25rem;
  display: flex;
  flex-direction: column;
`;

const MarkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarkHeader = styled.div`
  width: 100%;
  height: 5.375rem;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  align-items: center;
  padding-left: 3%;
  border-top-left-radius: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0e0;
`;

const MarkList = styled.div`
  width: 100%;
  height: 23rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
`;

const TextareaContainer = styled.div`
  width: 100%;
  height: 14rem;
  background-color: #fff;
  margin-top: 5%;
  padding: 3%;
`;

const TextareaHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #b4b4b4;
`;

const StudentListContainer = styled.div`
  width: 59.125rem;
  margin-left: 1%;
`;

const StudentListHeader = styled.div`
  width: 100%;
  height: 5.375rem;
  background-color: rgba(100, 100, 100, 0.2);
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
`;

const StudentListExplan = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0e0;
`;

const StudentSearchContainer = styled.div`
  width: 14rem;
  height: 2.6rem;
  background-color: rgba(99, 97, 113, 0.46);
  border-radius: 35px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StudentInput = styled.input`
  width: 65%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  left: 3%;
`;

const StudentList = styled.div`
  width: 100%;
  height: 38rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  return (
    <Background>
      {/*
       * 여기에 학생 등록 모달이 들어갑니다
       * */}

      <Navbar />
      <FullContainer>
        <LeftContainer>
          <MarkContainer>
            <MarkHeader>MARK</MarkHeader>
            <MarkList>
              {/* 여기서 통신? 할 것 같습니다 */}
              <p>이현진 -</p>
              <p>하재민 -</p>
            </MarkList>
          </MarkContainer>

          <TextareaContainer>
            <TextareaHeader>MEMO</TextareaHeader>
            <Memo />
          </TextareaContainer>
        </LeftContainer>

        <StudentListContainer>
          {/* 여기도 아마 어떻게 가져올 것 같습니다
           * 검색, 필터, 학생 등록 이야기 해보고 가져오면
           * 배치는 가져 왔을 때 css 조정하겠습니다 */}
          <StudentListHeader>
            <StudentListExplan>StudnetList</StudentListExplan>
            <StudentSearchContainer>
              <StudentInput type="text" placeholder="Student Search" />
              <SearchWrapper>
                <img src={Search} alt="검색" />
              </SearchWrapper>
            </StudentSearchContainer>
            <div>
              <div>
                <img src={Filter} alt="필터" />
              </div>

              <div>
                <div>전체</div>
                <div>완료</div>
                <div>미완료</div>
              </div>
            </div>
            필터, 학생 등록
          </StudentListHeader>

          <StudentList>
            <GrayBox />

            <ul>
              <li>
                {/* studentInfo에서 css 수정해서 가져오면 될 것 같습니다 */}
                <div>학생 이름</div>
                <div>학생 정보</div>
              </li>
            </ul>
          </StudentList>
        </StudentListContainer>
      </FullContainer>
    </Background>
  );
}

export default Main;
