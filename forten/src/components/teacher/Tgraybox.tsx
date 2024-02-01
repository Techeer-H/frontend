import styled from 'styled-components';

const GrayBoxContainer = styled.div`
  width: 59rem;
  height: 4rem;
  border-radius: 0.875rem;
  background: rgba(16, 18, 27, 0.4);

  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center;
  justify-content: space-between; /* 수직 가운데 정렬 */
  font-size: 1rem;
  font-weight: 900;
  position: sticky;
  color: #ededed;
  margin-bottom: 1.5rem;
  padding: 1rem;
`;

const Student = styled.div`
  text-align: center;
  width: 5rem;
`;

const School = styled.div`
  text-align: center;
  width: 5.5rem;
`;
const Age = styled.div`
  text-align: center;
  width: 5rem;
`;
const Phone = styled.div`
  text-align: center;
  width:7rem;
`;
const ParentPhone = styled.div`
  text-align: center;
  width: 8rem;
`;
const Action = styled.div`
  text-align: center;
  width: 6rem;
`;
const Status = styled.div`
  text-align: center;
  width: 5rem;
  display: flex;
  justify-content: start;
`;

const TGrayBox = () => {
  return (
    <GrayBoxContainer>
      <Student>학생명</Student>
      <School>학교명</School>
      <Age>나이</Age>
      <Phone>학생 전화번호</Phone>
      <ParentPhone>학부모 전화번호</ParentPhone>
      <Action>Action</Action>
      <Status>Status</Status>

      {/* 내용 추가 가능 */}
    </GrayBoxContainer>
  );
};

export default TGrayBox;
