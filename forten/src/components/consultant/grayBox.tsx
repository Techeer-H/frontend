import styled from 'styled-components';
import { background } from '../../pages/consultant/AiPrompt/styles';

const GrayBoxContainer = styled.div`
  background-color: #f9f9f9;
  margin: 1.42rem 0 0.6rem 0;
  border-radius: 1.25rem;
  border: 0.695px solid rgb(171, 172, 247);
  width: 47.75rem;
  height: 2.4rem;
  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center;
  justify-content: space-evenly; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  position: sticky;
  color: #737b7b;
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

const grayBox = () => {
  return (
    <div id="grayBox">
      <GrayBoxContainer id="grayBox">
        <Student>학생명</Student>
        <School>학교명</School>
        <Age>나이</Age>
        <Phone>학생 전화번호</Phone>
        <ParentPhone>학부모 전화번호</ParentPhone>
        <Action>Action</Action>
        <Status>Status</Status>

        {/* 내용 추가 가능 */}
      </GrayBoxContainer>
    </div>
  );
};

export default grayBox;
