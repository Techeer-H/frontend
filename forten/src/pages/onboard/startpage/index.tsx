import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './styles.css';

const WavesComponent: React.FC = () => {
  useEffect(() => {
    let index = 0;
    const interval = 1000;

    const magicStars = document.getElementsByClassName('magic-star');

    const animateStars = () => {
      for (const star of magicStars) {
        setTimeout(
          () => {
            animate(star as HTMLElement);
            setInterval(() => animate(star as HTMLElement), 1000);
          },
          index++ * (interval / 3),
        );
      }
    };

    animateStars();

    // Clean-up 함수를 반환하여 컴포넌트가 unmount될 때 interval을 정리합니다.
    return () => {
      for (const star of magicStars) {
        clearInterval(star as any);
      }
    };
  }, []);

  return (
    <div>
      <div className="mod">
        <div className="cube">
          <div className="faces f1">
            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>
          </div>

          <div className="faces f2">
            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>
          </div>

          <div className="faces f3">
            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>
          </div>

          <div className="faces f4">
            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>
          </div>

          <div className="faces f5">
            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>
          </div>

          <div className="faces f6">
            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>
          </div>

          <div className="faces f7">
            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>
          </div>

          <div className="faces f8">
            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>
          </div>

          <div className="faces f9">
            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>
          </div>

          <div className="faces f10">
            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>
          </div>

          <div className="faces f11">
            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>
          </div>
        </div>
      </div>
      <Link to="/onboarding" className="project-name">
        {/* <BtnShine>
  For:TEN <br /> start
</BtnShine> */}

        <Root>
          <H1>
            10대의
            <span className="magic">
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-text">잠재력</span>
            </span>
            을올려보아요
          </H1>
        </Root>
      </Link>{' '}
    </div>
  );
};

// const shine = keyframes`
//   0% {
//     background-position: 0;
//   }
//   50% {
//     background-position: 180px;
//   }
//   100% {
//     background-position: 270px;
//   }
// `;

// const BtnShine = styled.a`
//   transform: translate(-50%, -50%);
//   background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   animation: ${shine} 3s infinite linear;
//   font-weight: 600;
//   font-size: 20px;
// `;

const Root = styled.div`
  --purple: rgb(123, 31, 162);
  --violet: rgb(103, 58, 183);
  --white: rgb(227, 181, 255);
  --pink: rgb(244, 143, 177);
`;

const backgroundPan = keyframes`
  from {
    background-position: 0% center;
  }

  to {
    background-position: -200% center;
  }
`;

const scale = keyframes`
  from, to {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const H1 = styled.h1`
  color: white;
  display: absolute;
  transform: translate(1%, 950%);
  font-family: 'Rubik', sans-serif;
  font-size: clamp(2em, 2vw, 4em);
  font-weight: 600;

  text-align: center;
  letter-spacing: 25px;
  /* text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  -webkit-text-stroke: 0.2px #868686; */

  > .magic {
    display: inline-block;
    position: relative;
    transition: 0.3s ease-in-out;
    &:hover {
      scale: 1.1;
    }

    > .magic-star {
      --size: clamp(20px, 1.5vw, 30px);
      animation: ${scale} 700ms ease forwards;
      display: block;
      height: var(--size);
      left: var(--star-left);
      position: absolute;
      top: var(--star-top);
      width: var(--size);

      > svg {
        animation: ${rotate} 1000ms linear infinite;
        display: block;
        opacity: 0.7;

        > path {
          fill: var(--white);
        }
      }
    }

    > .magic-text {
      animation: ${backgroundPan} 3s linear infinite;
      background: linear-gradient(
        to right,
        var(--purple),
        var(--violet),
        var(--pink),
        var(--purple)
      );
      background-size: 200%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    }
  }
`;
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star: HTMLElement) => {
  star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
  star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

  star.style.animation = 'none';
  star.offsetHeight;
  star.style.animation = '';
};

export default WavesComponent;
