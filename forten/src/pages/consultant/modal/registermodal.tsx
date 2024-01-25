import React, { useEffect, useRef, useState } from 'react';
import Xicon from '../../../assets/Xicon.svg';
import styled from 'styled-components';
import axios from 'axios';
import { StudentType } from '../../../components/consultant/studentInfo';

interface RegisterModalProps {
  handleClick: () => void;
  setstudentList: React.Dispatch<React.SetStateAction<StudentType[]>>;
  studentlist: StudentType[];
}

const RegisterModal = ({ handleClick, setstudentList }: RegisterModalProps) => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [phone, setPhone] = useState('');
  const [parent_name, setParentName] = useState('');
  const [parent_phone, setParentPhone] = useState('');
  const [grade, setGrade] = useState('');
  const [birth, setBirth] = useState('');
  const [error, setError] = useState<string | null>(null);
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
        handleFocus(birthDayEl, isDayOptionExisted, 2001, 2017),
      );
    }
    return () => {
      if (birthDayEl.current) {
        birthDayEl.current.removeEventListener('focus', () =>
          handleFocus(birthDayEl, isDayOptionExisted, 2001, 2017),
        );
      }
    };
  }, []);
  const handleCloseModal = () => {
    // 모달을 닫는 로직을 추가합니다.
    handleClick(); // 모달을 닫는 함수를 호출합니다.
  };
  const createStudent: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      // 필요한 상태들이 모두 정의되었는지 확인
      if (!name || !school || !phone || !parent_name || !parent_phone || !grade || !birth) {
        // 필요한 정보가 비어있을 때 alert 표시
        alert('모든 정보를 입력하세요');
        return;
      }
      // 유효성 검사: 학년 및 출생년도
      if (!['중1', '중2', '중3', '고1', '고2', '고3'].includes(grade) || birth === '출생년도') {
        alert('올바른 학년을 선택하세요 (중1부터 고3까지) 또는 출생년도를 선택하세요');
        return;
      }
      // 출생년도가 숫자로 입력되었는지 확인
      if (isNaN(parseInt(birth))) {
        alert('출생년도를 숫자로 입력하세요');
        return;
      }
      // 출생년도 유효성 검사
      if (parseInt(birth) < 2001 || parseInt(birth) > 2017) {
        alert('출생년도를 2001부터 2017까지 선택하세요');
        return;
      }
      const data = {
        academy_id: 1,
        name,
        school,
        phone,
        parent_name,
        parent_phone,
        grade,
        birth,
      };
      console.log(data);
      const response = await axios.post('http://3.37.41.244:8000/api/student/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('모달창에서 학생 생성하고 응답 받은 값', response.data.result);
      // 등록이 성공했을 때 모달을 닫음
      setstudentList((pre) => [...pre, response.data.result]); // 등록된 학생 목록에 추가
      handleCloseModal(); // 모달을 닫는 함수 호출
    } catch (error) {
      console.error('createStudent에서 오류:', error);
      // 모달에 오류 메시지 표시
      setError('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };
  const studentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
    // setStudent(e.target.value); // student 상태 업데이트 추가
  };
  const schoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSchool(e.target.value);
    // setStudent(e.target.value); // student 상태 업데이트 추가
  };
  const studentPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };
  const parentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setParentName(e.target.value);
    // setStudent(e.target.value);
  };
  const parentPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setParentPhone(e.target.value);
    // setStudent(e.target.value);
  };
  return (
    <Maincontainer>
      <TitleBar>
        <Title> 학생등록 </Title>
        <Ximg onClick={handleCloseModal} />
      </TitleBar>

      <Modal>
        {error && (
          <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{error}</div>
        )}
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <Students
            onChange={studentName}
            value={name}
            type="text"
            placeholder="학생의 이름을 입력하세요"
          ></Students>
          <Age
            onChange={(e) => {
              const selectBirth = e.target.value;
              console.log(selectBirth);
              setBirth(e.target.value);
            }}
            ref={birthDayEl}
          >
            <option> 출생년도 </option>
          </Age>
        </div>
        <div style={{ display: 'flex' }}>
          <School
            onChange={schoolName}
            value={school}
            type="text"
            placeholder="학교명을 입력하세요"
          ></School>
          <Grade
            onChange={(e) => {
              // e.target.value를 통해 선택된 값에 접근
              const selectedValue = e.target.value;
              console.log(selectedValue);
              setGrade(e.target.value);
            }}
          >
            <option> 학년 선택 </option>
            <option value="중1">중1</option>
            <option value="중2">중2</option>
            <option value="중3">중3</option>
            <option value="고1">고1</option>
            <option value="고2">고2</option>
            <option value="고3">고3</option>
          </Grade>
        </div>
        <StudentNum
          onChange={studentPhone}
          value={phone}
          type="tel"
          placeholder="학생의 전화번호를 입력하세요"
        ></StudentNum>
        <Parent
          onChange={parentName}
          value={parent_name}
          type="text"
          placeholder="학부모명을 입력하세요"
        ></Parent>
        <ParentNum
          onChange={parentPhone}
          value={parent_phone}
          type="tel"
          placeholder="학부모 전화번호를 입력하세요"
        ></ParentNum>
        <Button type="submit" onClick={createStudent}>
          학생등록
        </Button>
      </Modal>
    </Maincontainer>
  );
};

const Maincontainer = styled.div`
  position: absolute;
  z-index: 4;
`;

const TitleBar = styled.div`
  display: flex;
  width: 27.5rem;
  height: 3.5625rem;
  border-radius: 1.25rem 0rem 0rem 0rem;
  background: #302b51;
`;
const Modal = styled.div`
  width: 27.5rem;
  height: 32.6rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: space-between;
  border: 1px solid #d8d8d8;
  background: #fff;
  font-size: 0.8rem;
`;

const Title = styled.div`
  color: #d2d2d2;
  text-align: center;
  width: 6rem;
  height: 1rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.7rem;
`;
const Ximg = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.45rem;
  background-image: url(${Xicon});
  &:hover {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    border-radius: 2rem;
  }
`;
const Students = styled.input`
  display: flex;
  margin-right: 4rem;
  width: 12rem;
  height: 2.4rem;
  padding: 0.6rem 0.8rem;
  align-items: center;
  gap: 0.4rem;

  border-radius: 0.2rem;
  border: 1px solid #242059;
  opacity: 0.8;
  background: #fff;
`;
const Age = styled.select`
  display: flex;
  padding-left: 0.4rem;
  width: 6.3rem;
  height: 2.4rem;
  border-radius: 0.3rem;
  border-bottom: 2px solid #86839e;
  background: #fff;
  color: #a5a5a5;
  text-align: center;
  font-size: 0.8rem;
`;
const Grade = styled.select`
  display: flex;
  padding-left: 0.4rem;
  width: 6.3rem;
  height: 2.4rem;
  border-radius: 0.3rem;
  border-bottom: 2px solid #86839e;
  background: #fff;
  color: #a5a5a5;
  text-align: center;
  font-size: 0.8rem;
`;
const School = styled.input`
  display: flex;
  margin-right: 4rem;
  width: 12rem;
  height: 2.4rem;
  padding: 0.6rem 0.8rem;
  align-items: center;
  gap: 0.4rem;

  border-radius: 0.2rem;
  border: 1px solid #242059;
  opacity: 0.8;
  background: #fff;
`;
const StudentNum = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  padding: 0.6rem 0.8rem;
  align-items: center;
  gap: 0.4rem;

  border-radius: 0.2rem;
  border: 1px solid #242059;
  opacity: 0.8;
  background: #fff;
`;
const Parent = styled.input`
  display: flex;
  margin-right: 4rem;
  width: 12rem;
  height: 2.4rem;
  padding: 0.6rem 0.8rem;
  align-items: center;
  gap: 0.4rem;

  border-radius: 0.2rem;
  border: 1px solid #242059;
  opacity: 0.8;
  background: #fff;
`;
const ParentNum = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  padding: 0.6rem 0.8rem;
  align-items: center;
  margin-bottom: 7rem;
  border-radius: 0.2rem;
  border: 1px solid #242059;
  opacity: 0.8;
  background: #fff;
`;
const Button = styled.button`
  position: absolute;
  width: 15rem;
  height: 3.25rem;
  border-radius: 0.4rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  bottom: 2.4rem;
  left: 6rem;
  background: linear-gradient(83deg, #ccbfc6 -23.46%, #8d8ab4 45.89%);
  transition: background-color 0.5s ease;
  &:hover {
    background: #e0baff;
    color: #292929;
  }
`;

export default RegisterModal;
