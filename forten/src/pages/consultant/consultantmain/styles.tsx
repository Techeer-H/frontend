import styled from 'styled-components';
import { abs } from '../../../../node_modules/@types/stylis/index.d';

export const background = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(107deg, #fff7f8 7.23%, #e5e4fe 99.24%);
  height: 52rem;
  width: 80rem;
  display: block;
  overflow: auto;
`;

export const fullcontainer = styled.div`
  display: flex;
  flex-direction: row;
  // marginRight: '8.75rem',
  // marginLeft: '8.75rem',
  width: 62.5rem;
  height: 43rem;
  border-radius: 1.78569rem;
  margin-left: 8.75rem;
  margin-right: 8.75rem;
  margin: 2rem 8.75rem 1.63rem 8.75rem;
  background: linear-gradient(90deg, #e7e6ff 4.39%, #ffeded 32.89%);
`;

export const LeftFullContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 43rem;
`;

export const purpleCircle = styled.div`
  background-color: #f1e4ff;
  width: 8.25rem;
  height: 1.75rem;
  flex-shrink: 0;
  margin: 2.13rem 2.12rem 0 1.62rem;
  display: flex;
  border-radius: 1rem;
  text-align: center;
  align-items: center;
  color: #5f6868;
  font-size: 0.5rem;
`;

export const RightFullContainer = styled.div`
  position: relative;
  width: 50rem;
  height: 43rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  width: 50rem;
  height: 30rem;
  margin: 0.2rem 0 1.5rem 0;
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 40px;
  z-index: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.9rem 0;
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
  color: #5c5c5c;
  width: 5.6rem;
  text-align: center;
  height: 1.6rem;

  /* Add any other styles or overrides here */
`;

export const StudentSearchContainer = styled.div`
  position: relative;
  background: white;
  width: 17.16081rem;
  height: 2.52506rem;
  border: 0.05rem solid #cdcfd4;
  border-radius: 1.73688rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 9rem;
  margin-left: 9rem;
`;

export const StyledInput = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  font-size: 0.6rem;
  background: transparent;
  text-align: center;
  outline: none;
`;

export const SearchIcon = styled.img`
  margin-right: 0.5rem;
  position: absolute;
  right: 0;
`;

export const DropDownContainer = styled.div`
  background: #ffffff;
  border: 0.05rem solid #cdcfd4;
  width: 5rem;
  height: 2rem;
  display: grid;
  grid-template-columns: auto; /* Set the column layout as needed */
  align-items: center;
  justify-content: center;
  border-radius: 1.44rem;
`;

export const StyledSelect = styled.select`
  font-size: 0.37rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
  background: #ffffff;
  justify-content: center;
  align-items: center;
`;
