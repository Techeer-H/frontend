import styled from 'styled-components';

const Button = styled.div`
  width: 3rem;
  height: 1.2rem;
  background-color: #ff3d50;
  border-radius: 1.22rem;
  align-items: center; /* 수직 가운데 정렬 */
  font-size: 0.5rem;
  padding-left: 0.84rem;
  padding-top: 0.2rem;
`;

const TextContainer = styled.div`
  color: #fff0f0;
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
