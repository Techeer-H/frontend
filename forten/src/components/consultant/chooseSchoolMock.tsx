import styled from "styled-components";

const Wrapper = styled.div`
  width: 11rem;
  height: 43rem;
  background-color: #E8E7FF;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`

const SubBox = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const StudentName = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 900;
  background-color: #B59FF2;
  border-radius: 30px;
`

const SelectTest = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 900;
  background-color: #D1E1FF;
  border-radius: 30px;
`

function ChooseSchoolMock() {
    return (
        <Wrapper>
            <SubBox>
                <StudentName>
                    학생명
                </StudentName>
                <SelectTest>
                    내신
                </SelectTest>
                <SelectTest>
                    모의고사
                </SelectTest>
            </SubBox>
        </Wrapper>
    )
}

export default ChooseSchoolMock;