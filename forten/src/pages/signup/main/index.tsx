import React, { useEffect, useState } from 'react';
import SignUpLogo from '../../../assets/SignUpLogo.svg';
import SuccessSignUp from '../modal/successSignUpModal';
import * as S from './styles';
import axios from 'axios';

type Role = 'T' | 'C';

const SignUpPage: React.FC = () => {
  //상태관리 및 api

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');

  const [role, setRole] = useState<Role>('T');
  const [notAllow, setNotAllow] = useState<boolean>(true);

  //다음에 써보기
  // const [signupInfo, setSignUpInfo] = useState<SignUpForm>({
  //   email: '',
  //   password: '',
  //   name: '',
  //   phone: '',
  //   birth: '',
  //   role: 'T',
  // });

  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>();
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPassWordValid] = useState<boolean>(false);
  const [phoneValid, setPhoneValid] = useState<boolean>(false);
  const [birthValid, setBirthValid] = useState<boolean>(false);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSignUpInfo({ ...signupInfo, [e.target.name]: e.target.value });

  //   if (e.target.name === 'email') {
  //     setIsCheckedEmail(false);
  //   }
  // };

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

  const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    const regex = /^(01[0]{1})[0-9]{3}[0-9]{4}$/;

    if (regex.test(phone)) {
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const birthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
    console.log(e.target.value);
    const regex = /^[0-9]{3}$/;
    if (regex.test(birth)) {
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  };

  useEffect(() => {
    if (emailValid && passwordValid && phoneValid && name && birthValid && role) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid, phoneValid, , name, birthValid, role]);

  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //클릭 기본 방지
    axios
      .post('http://3.37.41.244:8000/api/user/signup/', {
        academy_id: 1,
        email: email,
        password: password,
        name: name,
        phone: phone,
        birth: birth,
        role: role,
      })

      .then((response) => {
        setIsSuccessOpen(true);
        console.log(response);
      })
      .catch((err) => {
        alert('회원가입에 실패하였습니다.');
        console.log(err);
      });
  };

  return (
    <S.Section>
      <S.LeftColumn>
        <S.Form action="#" method="POST">
          <S.LogoImage src={SignUpLogo} alt="" />
          <S.InputWrapper>
            <S.Input
              value={email}
              onChange={emailChangeHandler}
              type="email"
              name="email"
              placeholder="이메일"
              maxLength={30}
            />
            <div className="errorMessageWrap">
              {!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
            </div>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Input
              onChange={passwordChangeHandler}
              value={password}
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
          <S.InputWrapper>
            <S.Input
              onChange={phoneChangeHandler}
              value={phone}
              type="tel"
              name="phone"
              placeholder="전화번호"
            />
            <div className="errorMessageWrap">
              {!phoneValid && phone.length > 0 && <div>ex) 01012345678 으로 작성해주세요</div>}
            </div>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Input
              onChange={nameChangeHandler}
              value={name}
              type="text"
              name="name"
              id=""
              placeholder="이름"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Input
              onChange={birthChangeHandler}
              type="year"
              name="birth"
              value={birth}
              className="box"
              id="birth-year"
              placeholder="출생연도"
            />

            <div className="errorMessageWrap">
              {!birthValid && birth.length > 0 && <div>ex)1999 으로 작성해주세요</div>}
            </div>
          </S.InputWrapper>
          <S.RoleContainer>
            <div>
              <input
                id="T"
                type="radio"
                value="T"
                checked={role === 'T'}
                onChange={(e) => setRole(e.target.value as Role)}
              />
              <label style={{ marginLeft: '0.6rem', marginRight: '1rem' }} htmlFor="T">
                강사
              </label>
              <input
                id="C"
                type="radio"
                value="C"
                checked={role === 'C'}
                onChange={(e) => setRole(e.target.value as Role)}
              />
              <label style={{ marginLeft: '0.6rem' }} htmlFor="C">
                컨설턴트
              </label>
            </div>
          </S.RoleContainer>

          {/* successmodal의 props에서 setisopen을 가져옴 아니라 하면 : null값으로 아무것도 안띄게 만듬 */}
          {isSuccessOpen ? <SuccessSignUp setIsOpen={setIsSuccessOpen} /> : null}

          <S.Button>
            <button
              onClick={onSubmitHandler}
              className="bottomButton"
              disabled={notAllow}
              type="submit"
            >
              회원가입
            </button>
          </S.Button>

          <S.StyledLink to="/login"> 뒤로</S.StyledLink>
        </S.Form>
      </S.LeftColumn>
      <S.RightColumn>
        <S.ImageOverlay />
        <S.TextContent>
          <S.Title id="box" className="gradient-border" style={{ fontSize: '1.4rem' }}>
            학생들의 관리를 <br />
          </S.Title>
          <S.Title2 style={{ fontSize: '3.6rem' }}>For:Ten</S.Title2>
        </S.TextContent>
      </S.RightColumn>
    </S.Section>
  );
};

export default SignUpPage;
