import React from 'react';
import styled from 'styled-components';

const GreenStatusButton = styled.div`
  width: 3.3rem;
  height: 1.7rem;
  background-color: #f5fbf5;
  border-radius: 1.22rem;
  display: flex; /* Flexbox를 활성화합니다. */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
`;

const TextContainer = styled.div`
  color: #56c456;
`;

const GreenButton = () => {
  return (
    <div id="GreenButton">
      <GreenStatusButton id="GreenButton">
        <TextContainer>완료</TextContainer>
      </GreenStatusButton>
    </div>
  );
};

export default GreenStatusButton;
