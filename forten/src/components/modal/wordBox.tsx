import styled from "styled-components";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Explan = styled.p`
  font-size: 0.875rem;
`;

const TextArea = styled.div`
  width: 38.125rem;
  height: 9.125rem;
  border: 1px solid #A3A3A3;
  border-radius: 10px;
`;

const WordBox = () => {
  return (
    <ColumnContainer>
      <Explan>내가 작성한 글</Explan>
      <TextArea>
        이 학생은 이렇고.. 저렇고... 이렇습니다..
      </TextArea>
    </ColumnContainer>
  );
};

export default WordBox;
