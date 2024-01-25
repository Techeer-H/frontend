import styled from 'styled-components';

const GrayBoxContainer = styled.div`
  background-color: rgba(115, 123, 123, 0.24);
  width: 56rem;
  height: 3.7rem;
  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center;
  justify-content: space-evenly; /* 수직 가운데 정렬 */
  font-size: 1rem;
  position: sticky;
  color: #737B7B;
  margin-top: 2%;
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
  width: 5rem;
`;
const ParentPhone = styled.div`
  text-align: center;
  width: 5rem;
`;
const Action = styled.div`
  text-align: center;
  width: 4rem;
`;
const Status = styled.div`
  text-align: center;
  width: 5rem;
`;

const GrayBox = () => {
  return (
    <GrayBoxContainer>
      <div>학생명</div>
      <div>학교명</div>
      <div>나이</div>
      <div>학생 전화번호</div>
      <div>학부모 전화번호</div>
      <div>Action</div>
      <div>Status</div>

      {/* 내용 추가 가능 */}
    </GrayBoxContainer>
  );
};

export default GrayBox;
