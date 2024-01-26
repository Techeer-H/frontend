import styled from 'styled-components';

const Button = styled.div`
  width: 2.5rem;
  height: 1.4rem;
  background: #e0f2e0;
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.text`
  color: #619f61;
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
