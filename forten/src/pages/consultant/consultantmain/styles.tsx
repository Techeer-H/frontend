import styled from 'styled-components';

export const background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;
  background: linear-gradient(to bottom left, #923230, #fffbe8);
`;

export const fullcontainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

export const LeftFullContainer = styled.div`
  width: 21.25rem;
  display: flex;
  flex-direction: column;
`;

export const MarkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarkHeader = styled.div`
  width: 100%;
  height: 5rem;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  align-items: center;
  padding-left: 3%;
  border-top-left-radius: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0e0;
`;
export const MarkList = styled.div`
  width: 100%;
  height: 23rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
`;

export const TextareaContainer = styled.div`
  width: 100%;
  height: 14rem;
  background-color: #fff;
  margin-top: 5%;
  padding: 3%;
`;

export const TextareaHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #b4b4b4;
`;

export const RightFullContainer = styled.div`
  position: relative;
  width: 60rem;
  margin-left: 1%;
`;

export const StudentListHeader = styled.div`
  width: 60rem;
  height: 5rem;
  background-color: rgba(100, 100, 100, 0.2);
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
`;

export const StudentListExplan = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0e0;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 38.1rem;
  background: #ffffff;
  z-index: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.4rem 0;
`;

export const RegisterStudentButton = styled.div`
  background: #ffe4f2;
  transition: background-color 0.9s ease;
  width: 5.75rem;
  height: 1.75rem;
  border-radius: 1.44rem;

  &:hover {
    background: #6ea3ff;
  }
`;
export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: -1rem; /* Adjust as needed */
  left: 8rem; /* Adjust as needed */
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const StyledButton = styled.input`
  font-size: 0.4rem;
  background: #ffe4f2;
  transition: background-color 0.9s ease;
  width: 5.75rem;
  height: 1.75rem;
  border-radius: 1.44rem;

  &:hover {
    background: #90b8ff;
    cursor: pointer;
  }

  /* Add any other styles or overrides here */
`;

export const StudentSearchContainer = styled.div`
  border-radius: 2rem;
  background: rgba(100, 100, 100, 0.4);
  width: 14rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 9rem;
  margin-left: 9rem;
  &:focus {
    border-color: #9590b6;
  }
`;

export const StyledInput = styled.input`
  width: 8rem;
  height: 0.9rem;
  color: #fff;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  background: transparent;
  &::placeholder {
    color: #fdfdfdab;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  font-size: 0.6rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 0.05rem solid #cdcfd4;
  width: 4rem;
  height: 2rem;
  grid-template-columns: auto;
  border-radius: 1.44rem;
`;
