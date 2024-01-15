import React, { useEffect } from 'react';
import * as S from './styles';
const ThirdOnBoardingPage: React.FC = () => {
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

  return (
    <S.Body>
      <S.MainContent className="MainContent">
        <S.Sticky className="Sticky">
          <S.CardFrame>
            <S.Card className="Card">
              <S.Front>MainPage</S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>AIPrompt</S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>Graph</S.Front>
              <S.Back>
                <S.Logo />
              </S.Back>
            </S.Card>
            <S.Card className="Card">
              <S.Front>Rating</S.Front>
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
