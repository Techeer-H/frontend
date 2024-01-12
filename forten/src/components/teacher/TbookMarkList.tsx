import React from 'react';
import styled from 'styled-components';
import remove from '../../assets/remove.svg';

const Wrapper = styled.div`
  display: flex;
  width: 8.25rem;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  margin: 0.25rem auto;
`;

const Name = styled.p`
  font-size: 0.65rem;
  color: #5f6868;
`;
function TbookMarkList() {
  return (
    <Wrapper>
      <Name>이현진</Name>
      <div>
        <img src={remove} alt="warning" />
      </div>
    </Wrapper>
  );
}

export default TbookMarkList;
