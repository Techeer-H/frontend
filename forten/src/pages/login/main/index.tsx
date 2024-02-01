import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/For-TEN.png';
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

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
    console.log(e.target.value);
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
          {/* <S.Title style={{ fontSize: '1.4rem' }}>Every English</S.Title>
          <S.Title2 style={{ fontSize: '3.6rem' }}>BLEND</S.Title2> */}
          <S.Title style={{ fontSize: '1.4rem' }}>10대의 잠재력을</S.Title>
          <S.Title2 style={{ fontSize: '3.6rem' }}>For:Ten</S.Title2>
        </S.TextContent>
      </S.RightColumn>
    </S.Section>
  );
};

export default LoginPage;
