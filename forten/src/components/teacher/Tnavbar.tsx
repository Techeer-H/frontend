import Profile from '../../assets/profile.svg';
import Logo from '../../../src/assets/logo.svg';

const Tnavbar = () => {
  const user_name = localStorage.getItem('user_name');
  const DeleteBtn = () => {
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    window.location.href = '/login';
  };

  return (
    <div
      id="Navbar"
      className=" flex items-center justify-center"
      style={{
        width: '62.5rem',
        height: '4rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        background:
          'linear-gradient(270deg, #E1FBFF 14.43%, rgba(242, 255, 225, 0.61) 57.19%, rgba(255, 248, 225, 0.53) 95.11%)',
        border: '0.5px solid #ffa154',
        borderRadius: '1.43rem',
      }}
    >
      <img
        id="Logo"
        alt="profile"
        style={{
          position: 'relative',
          width: '9.25rem',
          height: '2.25rem',
          margin: '0.8rem 49rem 0.9rem 0rem',
        }}
        loading="lazy"
        src={Logo}
      />

      <div
        className="mycontainer absolute flex items-center w-28 h-8 bg-white"
        style={{
          borderRadius: '2.795rem',
          border: '0.5rem solid #92929',
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          margin: '1rem 1rem 1rem  -8rem',
          padding: '0 0.5rem',
        }}
      >
        <img
          id="Profileimg"
          className="w-6 h-7"
          alt="profile"
          style={{ margin: '0.11rem 0.91rem 0.11rem 0rem ' }}
          loading="lazy"
          src={Profile}
        />
        <p
          className="font-bold text-xs text-gray-700"
          style={{
            fontSize: '0.6rem',
            transform: 'rotate(-0.432deg)',
            flexShrink: '0',
          }}
        >
          {user_name}&nbsp; 강사
        </p>
      </div>
      <button onClick={DeleteBtn}> 아웃</button>
    </div>
  );
};

export default Tnavbar;
