import styled from "styled-components";
import StudentTable from "../../../components/modal/studentTable";
import WordBox from "../../../components/modal/wordBox";
import ParentAvergy from "../../../components/modal/parentAvergy";
import WriteButton from "../../../components/modal/writeButton";
import StudentAvergy from "../../../components/modal/studentAvergy";
import SchoolGrades from "../../../components/modal/schoolGrades"; // 내신 성적
import SchoolMock from "../../../components/modal/schoolMock"; // 모의고사 성적
import ColseBtn from '../../../assets/closeBtn.png';


const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`

const Modal = styled.div`
  position: fixed;
  border: 1px solid #000000;
  border-radius: 40px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 62.5rem;
  height: 45rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Close = styled.img`
  margin-left: 95%;
  margin-top: 3%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
`;

const FlexWrapper = styled.div`
  display: flex;
  height: 45rem;
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 49rem;
  padding-top: 2.5rem;
`

const FlexBox = styled.div`
 display: flex;
 flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

function StudentDetail() {
  return (
    <div>
      <Backdrop />
      <Modal>
        <Close src={ColseBtn} alt="닫기" />
        <FlexWrapper>
          {/* 학생 정보 */}
          <StudentTable />
          <div>
            <FlexContainer >
              <FlexBox>
                {/* 학생 성적(내신, 모의고사) */}
                <SchoolGrades />
                <SchoolMock />
              </FlexBox>
              <Container>
                {/* 강사가 평가한 학생 평균, 부모님 평가 */}
                <StudentAvergy />
                <ParentAvergy />
              </Container>
            </FlexContainer>

            {/* 내가 작성한 코멘트 및 전송 버튼 */}

            <WordBox />
            <WriteButton />

          </div >
        </FlexWrapper>
      </Modal>
    </div>
  )
}

export default StudentDetail;
