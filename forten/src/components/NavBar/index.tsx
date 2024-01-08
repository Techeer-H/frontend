import { Link } from 'react-router-dom';
import * as S from './styles';

const NavBar = () => (
  <S.NavbarContainer>
    <S.User>
      <Link to="/ " style={{ textDecoration: 'none' }}>
        <S.Button>
          <S.LogoImage alt="로고 이미지" style={{ margin: '0px 0px 5px 0px', width: '10px' }} />홈
        </S.Button>
      </Link>

      <Link to="/wishlist" style={{ textDecoration: 'none' }}>
        <S.Button>
          <S.LogoImage alt="로고 이미지" style={{ margin: '0px 0px 5px 0px', width: '10px' }} />
          좋아요
        </S.Button>
      </Link>
      <Link to="/chat" style={{ textDecoration: 'none' }}>
        <S.Button>
          <S.LogoImage alt="로고 이미지" style={{ margin: '0px 0px 5px 0px', width: '10px' }} />
          채팅
        </S.Button>
      </Link>

      <Link to="/mypage" style={{ textDecoration: 'none' }}>
        <S.Button>
          <S.LogoImage alt="로고 이미지" style={{ margin: '0px 0px 8px 0px', width: '10px' }} />
          마이페이지
        </S.Button>
      </Link>
    </S.User>
  </S.NavbarContainer>
);

export default NavBar;
