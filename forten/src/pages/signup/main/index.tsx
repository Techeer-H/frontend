import React, { useEffect, useRef } from 'react';
import Logo from '../../../assets/logo.svg';
import LoginImg from '../../../assets/LoginImg.svg';
import SignUpLogo from '../../../assets/siginuplogo.svg';
import * as S from './styles';

const SignUpPage: React.FC = () => {
  const birthYearEl = useRef<HTMLSelectElement>(null);
  const birthMonthEl = useRef<HTMLSelectElement>(null);
  const birthDayEl = useRef<HTMLSelectElement>(null);
  const isYearOptionExisted = useRef(false);
  const isMonthOptionExisted = useRef(false);
  const isDayOptionExisted = useRef(false);

  useEffect(() => {
    const handleFocus = (
      ref: React.RefObject<HTMLSelectElement>,
      isOptionExisted: React.MutableRefObject<boolean>,
      start: number,
      end: number,
    ) => {
      if (!isOptionExisted.current && ref.current) {
        isOptionExisted.current = true;
        for (let i = start; i <= end; i++) {
          const option = document.createElement('option');
          option.setAttribute('value', i.toString());
          option.innerText = i.toString();
          if (ref.current) {
            ref.current.appendChild(option);
          }
        }
      }
    };

    if (birthYearEl.current) {
      birthYearEl.current.addEventListener('focus', () =>
        handleFocus(birthYearEl, isYearOptionExisted, 1970, 2010),
      );
    }

    if (birthMonthEl.current) {
      birthMonthEl.current.addEventListener('focus', () =>
        handleFocus(birthMonthEl, isMonthOptionExisted, 1, 12),
      );
    }

    if (birthDayEl.current) {
      birthDayEl.current.addEventListener('focus', () =>
        handleFocus(birthDayEl, isDayOptionExisted, 1, 31),
      );
    }

    return () => {
      if (birthYearEl.current) {
        birthYearEl.current.removeEventListener('focus', () =>
          handleFocus(birthYearEl, isYearOptionExisted, 1940, 2022),
        );
      }
      if (birthMonthEl.current) {
        birthMonthEl.current.removeEventListener('focus', () =>
          handleFocus(birthMonthEl, isMonthOptionExisted, 1, 12),
        );
      }
      if (birthDayEl.current) {
        birthDayEl.current.removeEventListener('focus', () =>
          handleFocus(birthDayEl, isDayOptionExisted, 1, 31),
        );
      }
    };
  }, []);
  return (
    <S.Section>
      <S.LeftColumn>
        <S.Form action="#" method="POST">
          <S.LogoImage src={SignUpLogo} alt="" />
          <S.InputForm>
            <S.Input type="email" name="" id="" placeholder="이메일" />
            <S.Input type="password" name="" id="" placeholder="비밀번호" />
            <S.Input type="tel" name="" id="" placeholder="전화번호" />
            <S.Input type="text" name="" id="" placeholder="이름" />

            <S.InfoBirthContainer className="info" id="info__birth">
              <S.Select ref={birthYearEl} className="box" id="birth-year">
                <option disabled selected>
                  출생 연도
                </option>
              </S.Select>
              <S.Select ref={birthMonthEl} className="box" id="birth-month">
                <option disabled selected>
                  월
                </option>
              </S.Select>
              <S.Select ref={birthDayEl} className="box" id="birth-day">
                <option disabled selected>
                  일
                </option>
              </S.Select>
            </S.InfoBirthContainer>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem' }}>
              <label>
                {' '}
                <input
                  type="radio"
                  name="work"
                  style={{ marginRight: '1rem' }}
                  id=""
                  placeholder=""
                />
                강사
              </label>
              <label>
                <input
                  type="radio"
                  name="work"
                  style={{ marginRight: '1rem' }}
                  id=""
                  placeholder=""
                />
                컨설턴트
              </label>
            </div>
          </S.InputForm>
          <div>
            <S.Button type="submit">회원가입</S.Button>
          </div>
          <S.StyledLink to="/login"> 뒤로</S.StyledLink>
        </S.Form>
      </S.LeftColumn>
      <S.RightColumn>
        <S.ImageOverlay />
        <S.TextContent>
          <S.Title style={{ fontSize: '1.4rem' }}>
            학생들의 관리를 <br />
          </S.Title>
          <S.Title2 style={{ fontSize: '3.6rem' }}>For:ten</S.Title2>
        </S.TextContent>
      </S.RightColumn>
    </S.Section>
  );
};

export default SignUpPage;
