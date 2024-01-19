import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 11rem;
  height: 43rem;
  background-color: #e8e7ff;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const SubBox = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StudentName = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 900;
  background-color: #b59ff2;
  border-radius: 30px;
`;

const SelectTest = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 900;
  background-color: #d1e1ff;
  border-radius: 30px;
`;

function ChooseSchoolMock() {
  return (
    <Wrapper>
      <SubBox>
        <StudentName>학생명</StudentName>
        <Link to="/SchoolTest">
          <SelectTest>내신</SelectTest>
        </Link>
        <Link to="/MockTest">
          <SelectTest>모의고사</SelectTest>
        </Link>
      </SubBox>
    </Wrapper>
  );
}

export default ChooseSchoolMock;
