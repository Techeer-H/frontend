import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import stars from '../../../assets/stars.png';
import logo from '../../../assets/BlendLogo.png';
import moon from '../../../assets/moon (2).png';
import mountainFront from '../../../assets/mountains_front.png';
import mountainBehind from '../../../assets/mountains_behind.png';
import test from '../../../assets/Chart_graph.svg';
import rating from '../../../assets/chart_rating.svg';
import ai from '../../../assets/AI.svg';
import pdf from '../../../assets/pdfPic.svg';

import { Full } from './styles';
const ThirdOnBoardingPage: React.FC = () => {
  // ...

  useEffect(() => {
    const MainContent: HTMLElement | null = document.querySelector('.MainContent');
    const Sticky: HTMLElement | null = document.querySelector('.Sticky');

    if (MainContent && Sticky) {
      const cardFlipOnScroll = new CardFlipOnScroll(MainContent!, Sticky);
      cardFlipOnScroll.init();

      const handleScroll = () => {
        cardFlipOnScroll.animate(window.scrollY);
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
      };
    }
  }, []);

  const starsRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const mountainBehindRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const mountainFrontRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;

      applyScrollEffect(starsRef, scrollValue);
      applyScrollEffect(moonRef, scrollValue);
      applyScrollEffect(mountainBehindRef, scrollValue);
      applyScrollEffect(mountainFrontRef, scrollValue);
      applyScrollEffect(textRef, scrollValue);
      applyScrollEffect(logoRef, scrollValue);
      applyScrollEffect(btnRef, scrollValue);

      // 여러 Ref에 대한 특정 동작을 수행하는 함수
      function applyScrollEffect(ref: any, scrollValue: any) {
        if (starsRef.current) {
          starsRef.current.style.transform = `translateX(${scrollValue * 0.25}px)`;
        }
        if (moonRef.current) {
          moonRef.current.style.transform = `translateY(${scrollValue * 1}px)`;
        }
        if (mountainBehindRef.current) {
          // mountainBehindRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
        }
        if (mountainFrontRef.current) {
          mountainFrontRef.current.style.transform = `translateY(${scrollValue * 0}px)`;
        }
        if (textRef.current) {
          textRef.current.style.transform = `translateY(${scrollValue * 4}px)`;
        }
        if (btnRef.current) {
          btnRef.current.style.transform = `translateY(${scrollValue * 1}px)`;
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
              style={{ width: '15rem', marginTop: '1rem', transform: 'translateY(1rem)' }}
            />
          </S.Header>
          <S.Section>
            <S.SectionImg ref={starsRef} src={stars} alt="stars" style={{ position: 'fixed' }} />

            <S.SectionImg ref={moonRef} src={moon} alt="moon" className="moon" />

            <S.SectionImg ref={mountainBehindRef} src={mountainBehind} alt="mountainBehind" />

            <S.ExplainText ref={textRef}>학원의 포텐을 For;ten과 함께 </S.ExplainText>
            <Link to="/login" style={{ display: 'flex', justifyContent: 'center' }}>
              <S.Button ref={btnRef}>서비스 시작하기</S.Button>
            </Link>

            <S.SectionImg
              ref={mountainFrontRef}
              src={mountainFront}
              alt="mountainFront"
              className="mountainFront"
            />
          </S.Section>
        </S.Bodysec>
      </div>
      {/* ==========================thirdpage 카드================================ */}

      <S.MainContent className="MainContent">
        <S.Sticky className="Sticky">
          <S.CardFrame>
            <S.Card className="Card">
              <S.Front>
                <img src={ai} alt="main" style={{ marginBottom: '5rem' }}></img>
                AI 요약 서비스로 컨설팅을 <br /> 보다 쉽게 진행합니다
              </S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>
                <img src={test} alt="test" style={{ marginBottom: '5rem' }}></img>
                학생 성적을 시각화 자료를 통해 <br /> 분석합니다
              </S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>
                <img src={rating} alt="rating" style={{ marginBottom: '6rem' }}></img>
                학생, 학부모 만족도 조사를 통해 <br /> 맞춤 수업 제공합니다
              </S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>
                <img src={pdf} alt="pdf" style={{ marginBottom: '5rem' }}></img>
                학생 정보를 pdf로 저장하여 <br /> 쉽게 관리합니다
              </S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
          </S.CardFrame>
        </S.Sticky>
      </S.MainContent>
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

export default ThirdOnBoardingPage;
