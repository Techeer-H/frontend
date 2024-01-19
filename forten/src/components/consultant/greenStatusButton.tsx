import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  width: 3rem;
  height: 1.2rem;
  background-color: #dbffdb;
  border-radius: 1.22rem;
  margin-right: 0.4rem;
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  padding-left: 1rem;
  padding-top: 0.2rem;
`;

const TextContainer = styled.text`
  color: #3eb079;
`;

const GreenStatusButton = () => {
  return (
    <div id="GreenButton">
      <Button id="GreenButton">
        <TextContainer>완료</TextContainer>
      </Button>
    </div>
  );
};

export default GreenStatusButton;
