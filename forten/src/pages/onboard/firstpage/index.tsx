import React, { useRef, useEffect } from 'react';
import * as S from './styles';
import stars from '../../../assets/stars.png';
import logo from '../../../assets/LogoAndLetter.svg';
import moon from '../../../assets/moon (2).png';
import mountainFront from '../../../assets/mountains_front.png';
import mountainBehind from '../../../assets/mountains_behind.png';
import { Full } from './styles';

const SecondOnBoardingPage: React.FC = () => {
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

      // ...

      // 여러 Ref에 대한 특정 동작을 수행하는 함수
      function applyScrollEffect(ref: any, scrollValue: any) {
        if (starsRef.current) {
          starsRef.current.style.transform = `translateX(${scrollValue * 0.25}px)`;
        }
        if (moonRef.current) {
          moonRef.current.style.transform = `translateY(${scrollValue * 1}px)`;
        }
        if (mountainBehindRef.current) {
          mountainBehindRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
        }
        if (mountainFrontRef.current) {
          mountainFrontRef.current.style.transform = `translateY(${scrollValue * 0}px)`;
        }
        if (textRef.current) {
          textRef.current.style.left = `${scrollValue * 4}px`;
        }
        if (btnRef.current) {
          btnRef.current.style.transform = `translateY${scrollValue * 1}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Full />
      <S.Body>
        <S.Header>
          <img src={logo} alt="logo" />
        </S.Header>
        <S.Section>
          <S.SectionImg ref={starsRef} src={stars} alt="stars" style={{ position: 'fixed' }} />

          <S.SectionImg ref={moonRef} src={moon} alt="moon" className="moon" />

          <S.SectionImg ref={mountainBehindRef} src={mountainBehind} alt="mountainBehind" />

          <S.ExplainText ref={textRef} style={{ marginTop: '20rem' }}>
            포텐은 학원생들 케어 서비스입니다
          </S.ExplainText>
          <S.Button ref={btnRef}>로그인하러가기</S.Button>

          <S.SectionImg
            ref={mountainFrontRef}
            src={mountainFront}
            alt="mountainFront"
            className="mountainFront"
          />
        </S.Section>
      </S.Body>
      <p>
        Apart from that, the logic inside the useEffect hook seems fine. It's applying scroll
        effects based on the scrollValue to different elements using their respective refs. The use
        of style and transform properties looks appropriate for achieving the desired scroll
        effects. Make sure that your styles defined in the styles.tsx file are working as expected
        and that your image paths are correct. If you encounter any specific issues or have
        additional requirements, feel free to ask! Apart from that, the logic inside the useEffect
        hook seems fine. It's applying scroll effects based on the scrollValue to different elements
        using their respective refs. The use of style and transform properties looks appropriate for
        achieving the desired scroll effects. Make sure that your styles defined in the styles.tsx
        file are working as expected and that your image paths are correct. If you encounter any
        specific issues or have additional requirements, feel free to ask!Apart from that, the logic
        inside the useEffect hook seems fine. It's applying scroll effects based on the scrollValue
        to different elements using their respective refs. The use of style and transform properties
        looks appropriate for achieving the desired scroll effects. Make sure that your styles
        defined in the styles.tsx file are working as expected and that your image paths are
        correct. If you encounter any specific issues or have additional requirements, feel free to
        ask!Apart from that, the logic inside the useEffect hook seems fine. It's applying scroll
        effects based on the scrollValue to different elements using their respective refs. The use
        of style and transform properties looks appropriate for achieving the desired scroll
        effects. Make sure that your styles defined in the styles.tsx file are working as expected
        and that your image paths are correct. If you encounter any specific issues or have
        additional requirements, feel free to ask! Apart from that, the logic inside the useEffect
        hook seems fine. It's applying scroll effects based on the scrollValue to different elements
        using their respective refs. The use of style and transform properties looks appropriate for
        achieving the desired scroll effects. Make sure that your styles defined in the styles.tsx
        file are working as expected and that your image paths are correct. If you encounter any
        specific issues or have additional requirements, feel free to ask! Apart from that, the
        logic inside the useEffect hook seems fine. It's applying scroll effects based on the
        scrollValue to different elements using their respective refs. The use of style and
        transform properties looks appropriate for achieving the desired scroll effects. Make sure
        that your styles defined in the styles.tsx file are working as expected and that your image
        paths are correct. If you encounter any specific issues or have additional requirements,
        feel free to ask!Apart from that, the logic inside the useEffect hook seems fine. It's
        applying scroll effects based on the scrollValue to different elements using their
        respective refs. The use of style and transform properties looks appropriate for achieving
        the desired scroll effects. Make sure that your styles defined in the styles.tsx file are
        working as expected and that your image paths are correct. If you encounter any specific
        issues or have additional requirements, feel free to ask!Apart from that, the logic inside
        the useEffect hook seems fine. It's applying scroll effects based on the scrollValue to
        different elements using their respective refs. The use of style and transform properties
        looks appropriate for achieving the desired scroll effects. Make sure that your styles
        defined in the styles.tsx file are working as expected and that your image paths are
        correct. If you encounter any specific issues or have additional requirements, feel free to
        ask!
      </p>
    </>
  );
};

export default SecondOnBoardingPage;
