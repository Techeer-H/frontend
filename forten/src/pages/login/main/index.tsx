import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/logo.svg';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import TeacherModal from '../modal/TeacherSuccess';
import ConsultantModal from '../modal/ConsultantSuccessModal';
import FailModal from '../modal/failLoginModal';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //버튼활성화
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPassWordValid] = useState<boolean>(false);
  const [notAllow, setNotAllow] = useState<boolean>(true);

  const [TeacherOpen, setTeacherOpen] = useState<boolean>(false);
  const [ConsultantOpen, setConsultantOpen] = useState<boolean>(false);
  const [isFailOpen, setIsFailOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  // const User = {
  //   email: 'penloo@naver.com',
  //   password: 'shb931012580',
  // };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setEmail(e.target.value);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; //정규식
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/; //정규식
    if (regex.test(password)) {
      setPassWordValid(true);
    } else {
      setPassWordValid(false);
    }
  };

  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  // const passwordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  //localStorage.setItem('userId', userId);
  // localStorage.getItem('userId'); 써라

  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //클릭 기본 방지
    axios
      .post('http://3.37.41.244:8000/api/user/login/', {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        // 로그인 성공 시 처리
        if ((response.status = 200)) {
          console.log('로그인 성공!', response.data);
          localStorage.setItem('user_Id', response.data.user_id);
          localStorage.setItem('user_name', response.data.user_name);
          localStorage.setItem('role', response.data.role);
          if (response.data.role === 'T') {
            setTeacherOpen(true);
          } else if (response.data.role === 'C') {
            setConsultantOpen(true);
          }
        }
      })
      .catch((err) => {
        setIsFailOpen(true);
        console.log(err);
      });
  };

  const goToSign = () => {
    navigate('/signup');
  };

  return (
    <S.Section>
      <S.LeftColumn>
        <S.Form action="#" method="POST">
          <S.LogoImage src={Logo} alt="" />
          <div>
            <S.InputWrapper>
              <S.Input
                value={email}
                onChange={emailChangeHandler}
                type="text"
                name="email"
                placeholder="이메일"
              />
              <div className="errorMessageWrap">
                {!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
              </div>
            </S.InputWrapper>
          </div>
          <div>
            <S.InputWrapper>
              <S.Input
                value={password}
                onChange={passwordChangeHandler}
                type="password"
                name="password"
                placeholder="비밀번호"
              />
              <div className="errorMessageWrap">
                {!passwordValid && password.length > 0 && (
                  <div>영문,숫자 포함 8글자이상 입력해주세요.</div>
                )}
              </div>
            </S.InputWrapper>
          </div>

          {ConsultantOpen ? <ConsultantModal setConsultantOpen={setConsultantOpen} /> : null}
          {TeacherOpen ? <TeacherModal setTeacherOpen={setTeacherOpen} /> : null}
          {isFailOpen ? <FailModal setIsFailOpen={setIsFailOpen} /> : null}

          <S.Button>
            <button
              onClick={onSubmitHandler}
              className="bottomButton"
              disabled={notAllow}
              type="submit"
            >
              로그인
            </button>
          </S.Button>
          <S.TextSecondary style={{ textAlign: 'center' }}>
            아직 회원이 아니신가요?
            <S.Link onClick={goToSign} title="">
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
