// YourComponent.tsx
import React from 'react';
import styled from 'styled-components';

const GrayBoxContainer = styled.div`
  background-color: #f9f9f9;
  margin: 1.42rem 1.01rem 1.6rem 1.24rem;
  border-radius: 1.25rem;
  border: 0.695px solid #abacf7;
  width: 47.75rem;
  height: 2.4rem;
  flex-shrink: 0;
  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  color: #737b7b;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const SmallSpacing = styled.div`
  margin-right: 2rem;
`;

const TgrayBox = () => {
  return (
    <div id="grayBox">
      <GrayBoxContainer id="grayBox">
        <TextContainer>
          <SmallSpacing>학생명</SmallSpacing>
          <SmallSpacing>학교명</SmallSpacing>
          <SmallSpacing>나이</SmallSpacing>
          <SmallSpacing>학생 전화번호</SmallSpacing>
          <SmallSpacing>학부모 전화번호</SmallSpacing>
          <SmallSpacing>Action</SmallSpacing>
          <SmallSpacing>Status</SmallSpacing>
        </TextContainer>
        {/* 내용 추가 가능 */}
      </GrayBoxContainer>
    </div>
  );
};

export default TgrayBox;
