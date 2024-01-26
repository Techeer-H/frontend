import styled from 'styled-components';

const Button = styled.div`
  width: 2.5rem;
  height: 1.4rem;
  background: #ffb8b8;
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  color: #8d1f1f;
`;

const RedStatusButton = () => {
  return (
    <div id="RedButton">
      <Button id="RedButton">
        <TextContainer>미완료</TextContainer>
      </Button>
    </div>
  );
};

export default RedStatusButton;
