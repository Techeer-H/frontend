import styled from 'styled-components';

const Button = styled.div`
  width: 5rem;
  height: 1.4rem;

  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
`;
const Circle = styled.div`
  width: 6px;
  height: 6px;
  background-color: #3bf083;

  border-radius: 50%;
`;
const TextContainer = styled.text`
  color: #ebfcff;
  margin-left: 0.5rem;
`;

const GreenStatusButton = () => {
  return (
    <div id="GreenButton">
      <Button id="GreenButton">
        <Circle></Circle>
        <TextContainer>업데이트 완료</TextContainer>
      </Button>
    </div>
  );
};

export default GreenStatusButton;
