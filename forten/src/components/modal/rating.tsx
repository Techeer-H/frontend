import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// slider코드

export const SliderParent = styled.div`
  position: relative;
`;

export const CustomSlider = styled.input`
  width: 11rem;
  height: 10px;
  background: linear-gradient(to right, rgba(141, 138, 180, 1) 0%, rgba(204, 191, 198, 1) 100%);
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
  color: #ededed;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  text-align: center;
  /* left: ${(props) => `${Number(props.value / 4)}px`}; */
`;

interface RatingProps {
  onSliderChange: (value: number) => void;
  rating: number | undefined;
}

const Rating: React.FC<RatingProps> = ({ onSliderChange, rating }) => {
  const [value, onChange] = useState(rating !== undefined ? rating : 5);

  useEffect(() => {
    onSliderChange(value); // 부모로 선택한 값을 전달
    // console.log('Slider Value:', value);
    if (rating == undefined) {
      onSliderChange(value);
    }

    // else {
    //   onChange(rating);
    // }
  }, [onSliderChange, value]);

  console.log(value);
  console.log('rating:', rating);

  return (
    <SliderParent style={{ textAlign: 'center' }}>
      <CustomSlider
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(Number(radius));
        }}
      />
      <div
        style={{
          marginTop: '1rem',
          marginLeft: '4.1rem',
          width: '2.8rem',
          border: '3px solid  #ededed',
          borderRadius: '3rem',
        }}
      >
        <Bubble value={value} className="bubble">
          {value}
        </Bubble>
      </div>
    </SliderParent>
  );
};
export default Rating;
