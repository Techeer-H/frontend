import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
  } from 'firebase/auth'; 
  import React, {useState,ChangeEvent} from 'react';
  import styled from 'styled-components';
 
  interface LoginProps {
    onConfirm: () => void;
    changeModal: () => void;
    onLoginSuccess: () => void;
  }
  

  const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 3;
    background: rgba(0, 0, 0, 0.45);
  `;
  const Modal = styled.div`
    position: fixed;
    border: 1px solid #000000;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 417px;
    height: 531px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const Logo = styled.img`
    height: 2.5rem;
    margin: 2.5rem auto 0 auto;
  `;
  const Close = styled.img`
    position: absolute;
    margin-left: 70%;
    margin-top: 10%;
    cursor: pointer;
  `;
  const Header = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const ImputBox = styled.input`
    width: 17.75rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #EFEFEF;
    padding: 0.3rem;
    margin-bottom: 1rem;
    placeholder: #D3D3D3;
  `;
  const Button = styled.button`
    border: none;
    background-color: #FFE4E1;
    width: 17.625rem;
    height: 2.5rem;
    border-radius: 70px;
    font-size: 0.875rem;
    font-weight: 700;
    margin-top: 3.3rem;
    cursor: pointer;
  `;
  const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin-top: 1.875rem;
  `;
  const YelloFont = styled.p`
    font-size: 0.875rem;
    color: #FBEDC8;
    font-weight: 900;
  `;
  const RedFont = styled.p`
    font-size: 0.875rem;
    color: #E75D97;
    cursor: pointer;
    font-weight: 900;
  `;
  function Login(props: LoginProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { onConfirm, changeModal, onLoginSuccess } = props;
    const auth = getAuth();
  
    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setEmail(event.target.value);
    };
    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };
      const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      console.log(email + password);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          console.log(user, '로그인 성공');
           onLoginSuccess();
           console.log(onLoginSuccess());
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage, '로그인 실패');
        });
    };
    const googleLoginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // 나머지 코드
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((data) => {
          const { user } = data;
          console.log(user, '로그인 성공');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div>
        <Backdrop />
        <Modal>
        <Logo src="your-logo-url" alt="Logo" />
        <Close src="close-icon-url" alt="Close" />
          <Header>로그인</Header>
          <Form>
            <ImputBox
              type="text"
              placeholder="이메일"
              value={email}
              onChange={emailChangeHandler}
            />
            <ImputBox
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={passwordChangeHandler}
            />
           <form onSubmit={onSubmitHandler}>
             <Button type="submit">
              로그인
             </Button>
             </form>
            <Button onClick={googleLoginHandler}>구글 로그인</Button>
          </Form>
          <FlexRow>
            <YelloFont>아직 회원이 아니신기요?</YelloFont>
            <RedFont onClick={changeModal}>회원가입</RedFont>
          </FlexRow>
        </Modal>
      </div>
    );
  }
  export default Login; 