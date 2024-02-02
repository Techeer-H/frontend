import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import * as S from './styles';
import stars from '../../../assets/stars.png';
import logo from '../../../assets/For-TEN.png';
import moon from '../../../assets/moon (2).png';
import test from '../../../assets/test.png';
import rating from '../../../assets/rating.png';
import ai from '../../../assets/Ai.png';
import pdf from '../../../assets/Pdf.png';
import '../wavepage/styles.css';
import '../cubepage/styles.css';
import { Full } from './styles';
import first from '../../../assets/2ndno1.svg';
import second from '../../../assets/2ndno2.svg';
import third from '../../../assets/2ndno3.svg';
import fourth from '../../../assets/2ndno4.svg';

const ThirdOnBoardingPage: React.FC = () => {
  const [isScrollTopButtonVisible, setScrollTopButtonVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = 1000;

    const magicStars = document.getElementsByClassName('magic-star');

    const animateStars = () => {
      for (const star of magicStars) {
        setTimeout(
          () => {
            animate(star as HTMLElement);
          },
          index++ * (interval / 3),
        );
      }
    };

    animateStars();
    const MainContent: HTMLElement | null = document.querySelector('.MainContent');
    const Sticky: HTMLElement | null = document.querySelector('.Sticky');

    if (MainContent && Sticky) {
      const cardFlipOnScroll = new CardFlipOnScroll(MainContent!, Sticky);
      cardFlipOnScroll.init();

      const handleScroll = () => {
        cardFlipOnScroll.animate(window.scrollY);
        const scrollValue = window.scrollY;
        const buttonThreshold = 500;

        if (scrollValue > buttonThreshold) {
          setScrollTopButtonVisible(true);
        } else {
          setScrollTopButtonVisible(false);
        }
      };
      const handleResize = () => {
        cardFlipOnScroll.init();
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      return () => {
        // Cleanup: Remove event listeners when the component unmounts
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);

        for (const star of magicStars) {
          clearInterval(star as any);
        }
      };
    }
  }, []);

  const starsRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const mountainFrontRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;

      applyScrollEffect(starsRef, scrollValue);
      applyScrollEffect(moonRef, scrollValue);
      applyScrollEffect(textRef, scrollValue);
      applyScrollEffect(logoRef, scrollValue);
      applyScrollEffect(btnRef, scrollValue);

      // 여러 Ref에 대한 특정 동작을 수행하는 함수
      function applyScrollEffect(ref: React.RefObject<any>, scrollValue: number) {
        if (ref.current) {
          if (ref === starsRef) {
            ref.current.style.transform = `translateX(${scrollValue * 0.25}px)`;
          } else if (ref === moonRef) {
            ref.current.style.transform = `translateY(${scrollValue * 1}px)`;
          } else if (ref === textRef) {
            ref.current.style.transform = `translateY(${scrollValue * 2}px)`;
          } else if (ref === btnRef) {
            ref.current.style.transform = `translateY(${scrollValue * 1}px)`;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Body>
      <div>
        <Full />
        <S.Bodysec>
          <S.Header>
            <img
              src={logo}
              alt="logo"
              style={{
                width: '12rem',
                marginLeft: '1rem',
                marginTop: '1rem',
                transform: 'translateY(1rem)',
              }}
            />
          </S.Header>
          <S.Section>
            <S.SectionImg ref={starsRef} style={{ height: '75rem' }} src={stars} alt="stars" />

            <S.SectionImg ref={moonRef} src={moon} alt="moon" className="moon" />

            {/* <S.SectionImg ref={mountainBehindRef} src={mountainBehind} alt="mountainBehind" /> */}

            <S.ExplainText ref={textRef}>학원의 포텐을 For:Ten 과 함께 </S.ExplainText>
            <Link to="/login" style={{ display: 'flex', justifyContent: 'center' }}>
              <S.Button ref={btnRef}>서비스 시작하기</S.Button>
            </Link>

            {/* <S.SectionImg
              ref={mountainFrontRef}
              src={mountainFront}
              alt="mountainFront"
              className="mountainFront"
            /> */}
            <S.Svg
              ref={mountainFrontRef} // 이 부분을 추가해 주세요
              className="waves"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              style={{ marginTop: '10rem' }}
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use href="#gentle-wave" x="48" y="1" fill="rgba(255,255,255,0.7)" />
                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </S.Svg>
          </S.Section>
        </S.Bodysec>
      </div>
      {/* ==========================thirdpage 카드================================ */}
      <S.MainContent className="MainContent">
        <S.Sticky className="Sticky">
          <S.CardFrame>
            <S.Card className="Card">
              <S.Front2>
                <img src={ai} alt="main" style={{ width: '20rem' }}></img>
                AI 요약 서비스로 컨설팅을 <br /> 보다 쉽게 진행합니다
              </S.Front2>
              <S.Back>
                {/* <S.Logo /> */}
                <img
                  src={first}
                  alt="first"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                ></img>
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front2>
                <img src={test} alt="test" style={{}}></img>
                학생 성적을 시각화 자료를 통해 <br /> 분석합니다
              </S.Front2>
              <S.Back>
                <img
                  src={second}
                  alt="second"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                ></img>{' '}
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front2>
                <img src={rating} alt="rating" style={{}}></img>
                학생, 학부모 만족도 조사를 통해 <br /> 맞춤 수업 제공합니다
              </S.Front2>
              <S.Back>
                <img
                  src={third}
                  alt="third"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                ></img>{' '}
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>
                <img src={pdf} alt="pdf" style={{ marginBottom: '4rem', width: '14rem' }}></img>
                학생 정보를 pdf로 저장하여 <br /> 쉽게 관리합니다
              </S.Front>
              <S.Back>
                <img
                  src={fourth}
                  alt="fourth"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                ></img>
              </S.Back>
            </S.Card>
          </S.CardFrame>
        </S.Sticky>
      </S.MainContent>
      {/* 4번째 페이지 여기에 연결하세요 */}
      {isScrollTopButtonVisible && (
        <button
          onClick={handleScrollTop}
          style={{
            position: 'fixed',
            bottom: '3rem',
            left: '45%',
            color: '#000000', // 텍스트 색상을 흰색으로 지정
            padding: '0.8rem',
            border: 'none',
            borderRadius: '2rem',
            width: '10rem',
            cursor: 'pointer',
            zIndex: '2',
            background: '#fff',
          }}
        >
          ⇑ 위로 가기
        </button>
      )}

      <div className="full">
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
          <Link to="/login" className="project-name">
            {/* <BtnShine>
  For:TEN <br /> start
</BtnShine> */}

            <Root>
              <H1>
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
                을 기록하세요
              </H1>
            </Root>
          </Link>
        </div>
      </div>
    </S.Body>
  );
};

class CardFlipOnScroll {
  wrapper: HTMLElement;
  Sticky: HTMLElement;
  cards: NodeListOf<Element>;

  length: number;
  start: number;
  end: number;
  step: number;

  constructor(wrapper: HTMLElement, Sticky: HTMLElement) {
    this.wrapper = wrapper;
    this.Sticky = Sticky;
    this.cards = Sticky.querySelectorAll('.Card');
    this.length = this.cards.length;

    this.start = 0;
    this.end = 0;
    this.step = 0;
  }
  init() {
    this.wrapper = this.wrapper || document.body;
    this.start = this.wrapper.offsetTop - 100;
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2;
    this.step = (this.end - this.start) / (this.length * 2);
  }
  animate(scrollY: number): void {
    this.cards.forEach((card, i) => {
      const s = this.start + this.step * i;
      const e = s + this.step * (this.length + 1);

      if (scrollY <= s) {
        (card as HTMLElement).style.transform = `
          perspective(100vw)
          translateX(100vw)
          rotateY(180deg)
        `;
      } else if (scrollY > s && scrollY <= e - this.step) {
        (card as HTMLElement).style.transform = `
        perspective(100vw)
        translateX(${100 + ((scrollY - s) / (e - s)) * -100}vw)
        rotateY(180deg)
        `;
      } else if (scrollY > e - this.step && scrollY <= e) {
        (card as HTMLElement).style.transform = `
        perspective(100vw)
        translateX(${100 + ((scrollY - s) / (e - s)) * -100}vw)
        rotateY(${180 + (-(scrollY - (e - this.step)) / this.step) * 180}deg)
        `;
      } else if (scrollY > e) {
        (card as HTMLElement).style.transform = `
          perspective(100vw)
          translateX(0vw)
          rotateY(0deg)

        `;
      }
    });
  }
}

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

  display: flex;

  position: relative;
  /* 
  transform: translate(43%, 1000%); */
  font-family: 'Rubik', sans-serif;
  font-size: clamp(1em, 2vw, 1em);
  font-weight: 600;
  width: 100rem;
  text-align: center;
  letter-spacing: 25px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  -webkit-text-stroke: 0.2px #868686;

  > .magic {
    display: inline-block;
    position: relative;
    transition: 0.3s ease-in-out;
    text-shadow: 0 0 10px rgba(161, 53, 255, 0.4);
    -webkit-text-stroke: 0.2px #868686;

    &:hover {
      scale: 1.2;
      text-shadow: none;
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

export default ThirdOnBoardingPage;
