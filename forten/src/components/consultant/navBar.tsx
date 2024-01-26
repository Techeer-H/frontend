import styled from 'styled-components';
import Profile from '../../assets/profile.svg';
import Logo from '../../assets/logo.svg';
import signOut from '../../assets/signOut.png';

const Wrapper = styled.div`
  width: 80.405rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MainLogo = styled.img`
  width: 9.25rem;
  height: 2.25rem;

  &:hover{
    cursor: pointer;
  }
`

const MemberContainer = styled.div`
  width: 15.526rem;
  height: 3.625rem;
  background-color: rgba(99, 98, 101, 0.42);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Name = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
`

const Logout = styled.img`
  
  &:hover{
    cursor: pointer;
  }
`

const Navbar = () => {
  const user_name = localStorage.getItem('user_name');
  const DeleteBtn = () => {
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    window.location.href = '/login';
  };

  return (
    <Wrapper>
      <MainLogo src={Logo} alt='Logo' />


      <MemberContainer>
        <img src={Profile} alt='profile' />
        <Name>

          {user_name}&nbsp;컨설턴트
        </Name>

        <Logout onClick={DeleteBtn} src={signOut} alt='로그아웃' />

      </MemberContainer>
    </Wrapper>
  );
};

export default Navbar;
