// 학생리스트

import React from 'react';
import styled from 'styled-components';
import aiPrompt from '../../assets/AIPrompt.svg';
import inquireStudent from '../../assets/inquireStudent.svg';
import registerGrade from '../../assets/registerGrade.svg';
const Wrapper = styled.div`
  margin: -2rem 4rem 1.6rem 1.24rem;
  width: 47.75rem;
  height: 3.5rem;
  flex-shrink: 0;
  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  color: #737b7b;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const SmallSpacing = styled.div``;
const ImgContainer = styled.div`
  display: flex;
`;
const ImgBox = styled.div``;

const TstudentInfo = () => {
  return (
    <Wrapper>
      <Wrap>
        <SmallSpacing>상필진</SmallSpacing>
        <SmallSpacing>목일중학교</SmallSpacing>
        <SmallSpacing>18</SmallSpacing>
        <SmallSpacing>010-0000-1111</SmallSpacing>
        <SmallSpacing>010-2222-3333</SmallSpacing>
        <ImgContainer>
          <ImgBox>
            <img src={inquireStudent} alt="학생정보조회하기" />
          </ImgBox>
        </ImgContainer>
        <div>상태</div>
      </Wrap>
    </Wrapper>
  );
};

export default TstudentInfo;
