import styled from 'styled-components';

const Button = styled.div`
  width: 6rem;
  height: 1.4rem;

  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.875rem;
  display: flex;
  justify-content: start;
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  background-color: #f0398e;
  border-radius: 50%;
`;
const TextContainer = styled.div`
  color: #ebfcff;
  margin-left: 0.5rem;
`;

const RedStatusButton = () => {
  return (
    <div id="RedButton">
      <Button id="RedButton">
        <Circle></Circle>
        <TextContainer>평가 미완료</TextContainer>
      </Button>
    </div>
  );
};

export default RedStatusButton;
