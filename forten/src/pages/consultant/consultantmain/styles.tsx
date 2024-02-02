import styled from 'styled-components';
import register from '../../../assets/register.svg';
import registerHover from '../../../assets/registerHover.svg';
import TestImg from '../../../assets/testImg.png';

export const background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 1000px;
  min-width: 1350px;
  padding-top: 2%;
  background: url(${TestImg}) no-repeat;
  background-size: cover; /* This will make the background image cover the entire div */
  background-position: center;
`;

export const TopFullContainer = styled.div`
  width: 84rem;
  height: 4rem;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.2);
  background: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
`;

export const fullcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftFullContainer = styled.div`
  width: 16rem;
  height: 48rem;
  padding: 1%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 0rem 0rem 0rem 1.25rem;
  border-right: 1px solid rgba(213, 213, 213, 0.2);

  background: rgba(16, 18, 27, 0.4);

  backdrop-filter: blur(20px);
`;

export const MarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22rem;
`;

export const MarkHeader = styled.div`
  color: rgba(203, 208, 228, 0.78);
  width: 5.1875rem;
  height: 1.8125rem;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1.5rem;
`;
export const MarkList = styled.div`
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextareaContainer = styled.div`
  width: 12.3125rem;
  height: 18rem;

  margin-top: 5%;
  padding: 3%;
  margin-top: 4.5rem;
`;

export const TextareaHeader = styled.div`
  color: rgba(203, 208, 228, 0.78);
  width: 5.1875rem;
  height: 1.8125rem;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const RightFullContainer = styled.div`
  width: 68rem;
  height: 48rem;
  display: flex;
  padding: 2.44rem 4.12rem 1rem 4.5rem;
  flex-direction: column;

  border-radius: 0rem 0rem 1.25rem 0rem;
  background: rgba(16, 18, 27, 0.7);
  backdrop-filter: blur(20px);

  position: relative;
`;

export const StudentListExplan = styled.div`
  color: #f9fafb;
  font-family: inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  width: 10.4375rem;
  height: 4rem;
  padding: 0.875rem 1.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-bottom: 2px solid #fff;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 50rem;
  z-index: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  width: 2.5rem;
  height: 2.5rem;
  background: url(${registerHover}) no-repeat;
  transition: background-color 0.9s ease;
  margin: 0.7rem 5rem 0.8rem 0rem;

  position: absolute;
  z-index: 5;
  bottom: 10%;
  right: 2%;

  &:hover {
    background: url(${register}) no-repeat;
    cursor: pointer;
  }

  /* Add any other styles or overrides here */
`;

export const StudentSearchContainer = styled.div`
  display: flex;
  height: 2.6rem;
  width: 26.875rem;
  margin: 0.7rem 1.9rem 0.9rem 3.4rem;
  padding: 0.56rem 18.9rem 0.56rem 0.9rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  border: 0.3px solid #5b5b5b;

  background: #14162b;

  &:focus {
    border-color: #9590b6;
  }
`;

export const StyledInput = styled.input`
  width: 10rem;
  height: 1rem;
  color: #b2b2b2;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.1rem;
  background: transparent;
  &::placeholder {
    color: #fdfdfdab;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  font-size: 0.875rem;
  margin-top: 1rem;
  color: #cfcfcf;
  background: #3b2647;
  border: 0.1rem solid #b0b0b0;
  width: 4.5rem;
  height: 2rem;
  border-radius: 0.44rem;
  margin-left: 17rem;
`;
