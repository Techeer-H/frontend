import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

interface GradeSelectProps {
  selectedGrade: string;
  setSelectedGrade: React.Dispatch<React.SetStateAction<string>>;
}

function GradeSelect(props: GradeSelectProps) {
  const selectList = [
    { value: '고1', name: '고1' },
    { value: '고2', name: '고2' },
    { value: '고3', name: '고3' },
  ];

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //상태 업데이트
    console.log(event.target.value);
    props.setSelectedGrade(event.target.value); // 수정: 선택된 학년을 상위 컴포넌트로 전달
  };
  return (
    <SelectBox onChange={handleSelect} value={props.selectedGrade}>
      {selectList.map((item) => (
        <option value={item.value} key={item.value}>
          {item.name}
        </option>
      ))}
    </SelectBox>
  );
}

const SelectBox = styled.select`
  width: 9rem;
  height: 1.75rem;
  border: 1px solid #000;
  border-radius: 20px;
  margin-left: 1%;
`;
export default GradeSelect;
