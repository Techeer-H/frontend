import styled from "styled-components";
import UserIcon from '../../assets/userIcon.png';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 11rem;
  height: 100%;
  border-right: 1px solid #979797;
  padding-top: 2.5rem;
`
const UserBox = styled.div`
  width: 7.7rem;
  height: 1.875rem;
  background-color: #B59FF2;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const UserName = styled.p`
  font-size: 1rem;
  color: #F1F1F1;
`

const School = styled.p`
  font-size: 1rem;
  color: #737B7B;
  margin-top: 1rem;
`

const Grade = styled.p`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`

const PhoneNumber = styled.p`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`

// 학생 정보 컴포넌트
function StudentTable() {

  return (
    <ColumnContainer>
      <UserBox>
        <div>
          <img src={UserIcon} alt='유저아이콘' />
        </div>
        <UserName>이현진</UserName>
      </UserBox>
      <School>목일중학교</School>
      <Grade>중3</Grade>
      <PhoneNumber>010-1111-1111</PhoneNumber>
    </ColumnContainer>
  )
}

export default StudentTable;
