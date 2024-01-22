import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animation/submitButton.json';

import styled from 'styled-components';


const TsubmitButton = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false); // State to track if the animation has been played

  const playAnimationOnce = () => {
    setAnimationPlayed(true); // Set the state to true when the animation is played
  };

  const animationOptions = {
    loop: false, // Set loop to false to play the animation only once
    autoplay: animationPlayed, // Autoplay based on the state of the animation
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    forceSegments: true, // Force the animation to return to the beginning when it reaches the end
  };

  const Container = styled.button`
    margin: 6.35rem 0rem 0rem 16.5rem;
    background: linear-gradient(91deg, #73a6ff 15.97%, #efc2ff 85.11%);
    color: white;
    font-weight: 500;
    width: 8rem;
    height: 2.8rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
  `;

  return (
    <Container onClick={playAnimationOnce}>
      <text style={{ marginLeft: '1rem' }}>Submit</text>
      <Lottie
        options={animationOptions}
        style={{
          marginLeft: '1rem',
          height: '4.5rem',
          width: '4.5rem',
        }}
        isClickToPauseDisabled={true}
        isStopped={!animationPlayed}
      />{' '}
    </Container>
  );
};

export default TsubmitButton;
