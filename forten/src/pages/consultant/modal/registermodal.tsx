import React, { useEffect, useRef, useState } from 'react';
import Xicon from '../../../assets/Xicon.svg';
import styled from 'styled-components';
import axios, { AxiosResponse } from "axios";
import { AxiosError} from 'axios';

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
  border: 1px solid #D8D8D8;
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
  border: 1px solid #9483FF;
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
  border-bottom: 2px solid #BCB1FF;
  background: #fff;
  color: #A5A5A5;
  text-align: center;
  font-size: 0.8rem; /* Adjust the font size as needed */
`;
const Select = styled.select`
  display: flex;
  width: 6.341rem;
  height: 2.4rem;
  border-radius: 0.5rem;
  border-bottom: 2px solid #BCB1FF;
  background: #fff;
  color: #A5A5A5;
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
  border: 1px solid #9483FF;
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
  border: 1px solid #9483FF;
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
  border: 1px solid #9483FF;
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
  border: 1px solid #9483FF;
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
  color: #FFFFFF;
  bottom: 2.4rem;
  left: 6rem;
  background: linear-gradient(91deg, #73A6FF 15.97%, #EFC2FF 85.11%);
  transition: background-color 0.5s ease;
  &:hover {
    background: #E0BAFF;
    color: #292929;
  }
`;

const RegisterModal = ({ isOpen, handleClick }: RegisterModalProps) => {
  
  const [name, setName] = useState("");
  const [school,setSchool] = useState("");
  const [number,setNumber] = useState("");
  const [parent, setParent] = useState("");
  const [figure, setFigure] = useState("");
  const [student,setStudent] = useState("");
  const [birth, setBirth] = useState("");
  const birthDayEl = useRef<HTMLSelectElement>(null);
  const isDayOptionExisted = useRef(false);

  function sendDataToServer(): Promise<AxiosResponse> {
    
    const apiUrl = 'http://3.37.41.244:8000/api/student'
    const data = {
      name:name,
      school:school,
      phone:number,
      parent_name:parent,
      parent_phone:figure,
      grade:student,
    };

    return axios.post(apiUrl, data);
  }
  const handleClicker = () => {
    sendDataToServer()
      .then((response: AxiosResponse) => {
        console.log("데이터 전송에 성공했습니다!", response.data);
        
      })
      .catch((error) => {
        console.error("데이터 전송 실패", error);
      });
  };

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
  class Json {
    private data: Record<string, any>;
  
    constructor() {
      this.data = {};
    }
  
    // append 메소드 추가 또는 이미 존재한다면 해당 메소드 사용
    append(key: string, value: any) {
      this.data[key] = value;
    }
  
    // 데이터를 가져오는 메소드 추가
    getData() {
      return this.data;
    }
  }
 
  const createStudent = async () => {
    try {
      // 필요한 상태들이 모두 정의되었는지 확인
      if (name && school && number && parent && figure && student ) {
        const data = {
          academy_id:1,
          name:name,
      school:school,
      phone:number,
      parent_name:parent,
      parent_phone:figure,
      grade:student,
      birth:birth,

    };
  console.log(data)
        const response = await axios.post("http://3.37.41.244:8000/api/student/",data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        console.log(response.data);
      } else {
        console.error("필요한 상태가 정의되지 않았거나 비어 있습니다");
      }
    } catch (error) {
      console.error("createStudent에서 오류:", error);
    }
  };

  const studentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
    setStudent(e.target.value); // student 상태 업데이트 추가


  };

  const schoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
     console.log(e.target.value);
     setSchool(e.target.value);
     setStudent(e.target.value); // student 상태 업데이트 추가

  };
  const studentPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNumber(e.target.value);
    
  };
  const parentName = (e: React.ChangeEvent<HTMLInputElement>) => {
     console.log(e.target.value);
     setParent(e.target.value);
     setStudent(e.target.value); 

  
  };
  const parentPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFigure(e.target.value);
    setStudent(e.target.value); 
     
  };

useEffect(() =>{
  console.log(birth);
}, [birth]);
  return (
    <Modal>
      <TitleBar>
        <Title> 학생등록 </Title>
      </TitleBar>
      <Ximg onClick={handleClick} />
      <div style={{ display: 'flex' }}>
        <Student onChange = {studentName} value= {name} type="text" placeholder="학생의 이름을 입력하세요"></Student>
        <Age onChange = {(e) =>{
          
          setBirth(e.target.value);
        }}ref={birthDayEl}>
         <option> 출생년도 </option>
          </Age>
      </div>
      <div style={{ display: 'flex' }}>
        <School onChange = {schoolName} value= { school } type="text" placeholder="학교명을 입력하세요"></School>
        <Select onChange={(e) => {
  // e.target.value를 통해 선택된 값에 접근
  const selectedValue = e.target.value;
  console.log(selectedValue);
  setStudent(e.target.value);
}}>
  <option> 학년 선택 </option>
  <option value="1">중1</option>
  <option value="2">중2</option>
  <option value="3">중3</option>
  <option value="4">고1</option>
  <option value="5">고2</option>
  <option value="6">고3</option>
</Select>
      </div>
      <StudentNum onChange={studentPhone} value={ number} type="tel" placeholder="학생의 전화번호를 입력하세요"></StudentNum>
      <Parent onChange = {parentName} value = {parent} type="text" placeholder="학부모명을 입력하세요"></Parent>
      <ParentNum onChange = {parentPhone} value={figure} type="tel" placeholder="학부모 전화번호를 입력하세요"></ParentNum>
      <Button onClick={createStudent} >
        등록
      </Button>
    </Modal>
  );
};
export default RegisterModal;