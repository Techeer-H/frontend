import React from 'react';
import Logo from '../../../assets/logo.svg';
import LoginImg from '../../../assets/LoginImg.svg';
import * as S from './styles';

const LoginPage = () => {
  return (
    <S.Section>
      <S.LeftColumn>
        <S.Form action="#" method="POST">
          <S.LogoImage src={Logo} alt="" />
          <div>
            <S.InputWrapper>
              <S.Input type="Id" name="" id="" placeholder="아이디" />
            </S.InputWrapper>
          </div>
          <div>
            <S.InputWrapper>
              <S.Input type="password" name="" id="" placeholder="비밀번호" />
            </S.InputWrapper>
          </div>
          <div>
            <S.Button type="submit">로그인</S.Button>
          </div>
          <S.TextSecondary style={{ textAlign: 'center' }}>
            아직 회원이 아니신가요?
            <S.Link href="/signup" title="">
              <br />
              <br /> <br />
              회원가입
            </S.Link>
          </S.TextSecondary>
        </S.Form>
      </S.LeftColumn>
      <S.RightColumn>
        <S.ImageOverlay />
        <S.TextContent>
          <S.Title style={{ fontSize: '1.4rem' }}>
            10대의 잠재력을 <br />
          </S.Title>
          <S.Title2 style={{ fontSize: '3.6rem' }}>For:ten</S.Title2>

          {/* <S.List>
            <S.ListItem>
              <S.IconWrapper color="#8b5cf6">
                <S.Icon viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </S.Icon>
              </S.IconWrapper>
              <S.Text>당신의 학생들만 평가</S.Text>
            </S.ListItem>
            <S.ListItem>
              <S.IconWrapper color="#3b82f6">
                <S.Icon viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </S.Icon>
              </S.IconWrapper>
              <S.Text>컨설턴트의 관리</S.Text>
            </S.ListItem>
            <S.ListItem>
              <S.IconWrapper color="#3b82f6">
                <S.Icon viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </S.Icon>
              </S.IconWrapper>
              <S.Text>여려명의 학생을 한눈에</S.Text>
            </S.ListItem>
            <S.ListItem>
              <S.IconWrapper color="#3b82f6">
                <S.Icon viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </S.Icon>
              </S.IconWrapper>
              <S.Text>시각화로 한번에</S.Text>
            </S.ListItem>
          </S.List> */}
        </S.TextContent>
      </S.RightColumn>
    </S.Section>
  );
};

export default LoginPage;
