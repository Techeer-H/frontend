import React, { useEffect, useRef, useState } from 'react';
import Xicon from '../../../assets/Xicon.svg';
import styled from 'styled-components';

interface RegisterModalProps {
  isOpen: boolean;
  handleClick: () => void;
}

const Modal = styled.div`
  position: absolute;
  border: 1px solid #000;
  width: 27.5rem;
  height: 36.25rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  justify-content: space-between;
  border-radius: 3.125rem;
  border: 1px solid #d8d8d8;
  background: #fff;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
  font-size: 0.8rem;
`;
const TitleBar = styled.div`
  flex-direction: column;
  padding-top: 2rem;
`;
const Title = styled.div`
  margin-right: 17.15rem;
  width: 5.8125rem;
  height: 1.25rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Ximg = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 1.5rem;
  height: 1.45rem;
  background-image: url(${Xicon});
  &:hover {
    box-shadow: 0 0 0 3px rgba(0, 128, 255, 0.3);
    border-radius: 2rem;
  }
`;

const Student = styled.input`
  display: flex;
  margin-right: 4rem;
  width: 12rem;
  height: 2.4rem;
  padding: 0.61825rem 0.8085rem;
  align-items: center;
  gap: 0.47556rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #9483ff;
  opacity: 0.8;
  background: #fff;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Age = styled.select`
  display: flex;
  padding-left: 0.4rem;
  width: 6.341rem;
  height: 2.4rem;
  border-radius: 0.5rem;
  border-bottom: 2px solid #bcb1ff;
  background: #fff;
  color: #a5a5a5;
  text-align: center;
  font-size: 0.8rem; /* Adjust the font size as needed */
`;
const Select = styled.select`
  display: flex;
  width: 6.341rem;
  height: 2.4rem;
  border-radius: 0.5rem;
  border-bottom: 2px solid #bcb1ff;
  background: #fff;
  color: #a5a5a5;
  text-align: center;
  font-size: 0.8rem; /* Adjust the font size as needed */
`;
const School = styled.input`
  display: flex;
  width: 12rem;
  height: 2.4rem;
  padding: 0.61825rem 0.8085rem;
  align-items: center;
  gap: 0.47556rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #9483ff;
  opacity: 0.8;
  margin-right: 4rem;
  background: #fff;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StudentNum = styled.input`
  display: flex;
  width: 20rem;
  height: 2.3125rem;
  padding: 0.61825rem 0.8085rem;
  align-items: center;
  gap: 0.47556rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #9483ff;
  opacity: 0.8;
  background: #fff;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Parent = styled.input`
  display: flex;
  width: 12rem;
  height: 2.4rem;
  padding: 0.61825rem 0.8085rem;
  align-items: center;
  gap: 0.47556rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #9483ff;
  opacity: 0.8;
  background: #fff;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;
const ParentNum = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  padding: 0.61825rem 0.8085rem;
  align-items: center;
  margin-bottom: 8rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #9483ff;
  opacity: 0.8;
  background: #fff;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Button = styled.button`
  position: absolute;
  width: 15rem;
  height: 3.25rem;
  border-radius: 1.2rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #ffffff;
  bottom: 2.4rem;
  left: 6rem;
  background: linear-gradient(91deg, #73a6ff 15.97%, #efc2ff 85.11%);
  transition: background-color 0.5s ease;
  &:hover {
    background: #e0baff;
    color: #292929;
  }
`;

const RegisterModal = ({ isOpen, handleClick }: RegisterModalProps) => {
  const birthDayEl = useRef<HTMLSelectElement>(null);
  const isDayOptionExisted = useRef(false);

  useEffect(() => {
    const handleFocus = (
      ref: React.RefObject<HTMLSelectElement>,
      isOptionExisted: React.MutableRefObject<boolean>,
      start: number,
      end: number,
    ) => {
      if (!isOptionExisted.current && ref.current) {
        isOptionExisted.current = true;
        for (let i = start; i <= end; i++) {
          const option = document.createElement('option');
          option.setAttribute('value', i.toString());
          option.innerText = i.toString();
          if (ref.current) {
            ref.current.appendChild(option);
          }
        }
      }
    };

    if (birthDayEl.current) {
      birthDayEl.current.addEventListener('focus', () =>
        handleFocus(birthDayEl, isDayOptionExisted, 1, 31),
      );
    }

    return () => {
      if (birthDayEl.current) {
        birthDayEl.current.removeEventListener('focus', () =>
          handleFocus(birthDayEl, isDayOptionExisted, 1, 31),
        );
      }
    };
  }, []);
  return (
    <Modal>
      <TitleBar>
        <Title>학생 등록</Title>
      </TitleBar>
      <Ximg onClick={handleClick} />

      <div style={{ display: 'flex' }}>
        <Student type="text" placeholder="학생의 이름을 입력하세요"></Student>
        <Age ref={birthDayEl}>
          {' '}
          <option> 나이 선택 </option>
        </Age>
      </div>
      <div style={{ display: 'flex' }}>
        <School type="text" placeholder="학교명을 입력하세요"></School>
        <Select>
          <option> 학년 선택 </option>
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
          <option value="4">4학년</option>
          <option value="5">5학년</option>
          <option value="6">6학년</option>
        </Select>
      </div>
      <StudentNum type="tel" placeholder="학생의 전화번호를 입력하세요"></StudentNum>
      <Parent type="text" placeholder="학부모명을 입력하세요"></Parent>
      <ParentNum type="tel" placeholder="학부모 전화번호를 입력하세요"></ParentNum>
      <Button onClick={handleClick} type="submit">
        등록
      </Button>
    </Modal>
  );
};

export default RegisterModal;
