import styled from 'styled-components';
import Profile from '../../assets/profile.svg';
import Logo from '../../assets/For-TEN.png';
import signOut from '../../assets/signOut.png';
import { useNavigate } from 'react-router-dom';

import BlendLogoWhite from '../../assets/BlendLogoWhite.png';

const Wrapper = styled.div`
  width: 84rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainLogo = styled.button`
  width: 10.5rem;
  height: 4.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const MemberContainer = styled.div`
  width: 15.526rem;
  height: 3.625rem;
  background-color: rgba(99, 98, 101, 0.42);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Name = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
`;

const Logout = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const user_name = localStorage.getItem('user_name');
  const DeleteBtn = () => {
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    window.location.href = '/login';
  };

  const goMain = () => {
    navigate('/consultantmain');
  };

  return (
    <Wrapper>
      <MainLogo onClick={goMain}>
        <img src={BlendLogoWhite} alt="Logo" />
      </MainLogo>

      <MemberContainer>
        <img src={Profile} alt="profile" />
        <Name>{user_name}&nbsp;컨설턴트</Name>

        <Logout onClick={DeleteBtn} src={signOut} alt="로그아웃" />
      </MemberContainer>
    </Wrapper>
  );
};

export default Navbar;
