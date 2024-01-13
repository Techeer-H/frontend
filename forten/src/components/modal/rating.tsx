import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const FullContainer = styled.div`
  width: 25rem;
  height: 20rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #85a1ff;
  background: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.p`
  color: #737b7b;
  font-size: 1rem;
  font-style: normal;
  text-align: center;
`;

export const ImgBox = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.81rem;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  width: 6rem;
  height: 1.75rem;
  display: flex;
  margin-top: 0.87rem;
  border-radius: 1rem; /* 원하는 값으로 조절 */
  border: 0.1rem solid #a3a3a3;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: row;
`;

// slider코드

export const SliderParent = styled.div`
  position: relative;
`;

export const CustomSlider = styled.input`
  height: 10px;
  background: linear-gradient(
    93deg,
    #46a6ff -11.56%,
    rgba(251, 70, 255, 0.21) 70.52%
  ); /* 원하는 배경색으로 지정하세요 */
  border-radius: 5px;
  outline: none;

  /* 추가된 부분 */
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-thumb {
    width: 14.5rem;
    height: 0.75rem;
    background-color: #fff; /* 슬라이더 핸들의 배경색을 원하는 색으로 지정하세요 */
    border-radius: 50%;
    cursor: pointer;
  }
`;

interface BubbleProps {
  value: number;
}

export const Bubble = styled.div<BubbleProps>`
  position: relative;
  text-align: center;
  /* left: ${(props) => `${Number(props.value / 4)}px`}; */
`;

export default function App() {
  // 기본값
  const [value, onChange] = useState(0);

  useEffect(() => {
    const ele = document.querySelector('.buble') as HTMLDivElement;
    if (ele) {
      //글자 같이 움직이는 효과
    }
  }, [value]);

  return (
    <SliderParent style={{ textAlign: 'center' }}>
      <CustomSlider
        type="range"
        min="-5"
        max="5"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(Number(radius));
        }}
      />
      <Bubble value={value} className="buble">
        {value}
      </Bubble>
    </SliderParent>
  );
}
