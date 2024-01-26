import styled from 'styled-components';

const GrayBoxContainer = styled.div`
  background-color: rgba(115, 123, 123, 0.24);
  width: 57rem;
  height: 3.7rem;
  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center;
  justify-content: space-between; /* 수직 가운데 정렬 */
  font-size: 0.9rem;
  font-weight: 800;
  position: sticky;
  color: #616b6b;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
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
  text-align: center;
  width: 7rem;
`;
const ParentPhone = styled.div`
  text-align: center;
  width: 7rem;
`;
const Action = styled.div`
  text-align: center;
  width: 4rem;
`;
const Status = styled.div`
  text-align: center;
  width: 5rem;
`;

const TgrayBox = () => {
  return (
    <GrayBoxContainer id="grayBox">
      <Student>학생명</Student>
      <School>학교명</School>
      <Age>나이</Age>
      <Phone>학생 전화번호</Phone>
      <ParentPhone>학부모 전화번호</ParentPhone>
      <Action>Action</Action>
      <Status>Status</Status>
    </GrayBoxContainer>
  );
};

export default TgrayBox;
