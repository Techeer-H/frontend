import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  50% {
    box-shadow: 0 0 20px #fff, 20px 0 80px #f0f, -20px 0 80px #0ff,
      inset 0 0 50px #fff, inset -50px 0 80px #f0f, inset 50px 0 80px #0ff,
      inset -50px 0 300px #f0f, inset 50px 0 300px #0ff;
  }
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0;
  background: radial-gradient(220% 105% at top center, #1b2947 10%, #000000);
  width: 100vw;
  height: 100vh;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow:
    0 0 20px #fff,
    -20px 0 80px #f0f,
    20px 0 80px #0ff,
    inset 0 0 50px #fff,
    inset 50px 0 80px #f0f,
    inset -50px 0 80px #0ff,
    inset 50px 0 300px #f0f,
    inset -50px 0 300px #0ff;
  animation: ${pulsate} 6s linear infinite;
`;

const Text = styled.p`
  font-family: 'inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-left: 10px;
`;

const Component = () => {
  return (
    <Container>
      <Circle>
        <Text>끄아아ㅏ</Text>
      </Circle>
    </Container>
  );
};

export default Component;
