
import 'tailwindcss/tailwind.css';
import * as S from './styles';

import TbookMarkList from '../../../components/teacher/TbookMarkList';
import Tmemo from '../../../components/teacher/Tmemo';
import Tnavbar from '../../../components/teacher/Tnavbar';
import TgrayBox from '../../../components/teacher/Tgraybox';
import TstudentInfo from '../../../components/teacher/TstudentInfo';

import star from '../../../assets/star.svg';
import search from '../../../assets/searchIcon.svg';


const TeacherPage = () => {
  return (
    <div
      className="background"
      style={{
        background: 'linear-gradient(106deg, #F0EAE3 -4.89%, #E2FCFF 105.97%)',
        height: '100vh',
        width: '100%',
        display: 'block',
        overflow: 'auto',
      }}
    >
      <Tnavbar />
      <div
        // rightContainer+LeftContainer
        className="fullContainer flex"
        style={{
          flexDirection: 'row',

          width: '62.5rem',
          height: '43rem',
          borderRadius: '1.78569rem',
          margin: '2rem auto 1.63rem auto',

          background: 'linear-gradient(90deg, #E6FDFF 4.39%, #FFEDF1 32.89%)',
        }}
      >
        <div
          className="LeftFullContainer"
          style={{
            position: 'relative',
            width: '12rem',
            height: '43rem',
          }}
        >
          <S.purpleCircle>
            <div>
              <img src={star} alt="star" style={{ marginLeft: '1rem', marginRight: '1rem' }} />
            </div>
            <p>즐겨찾기</p>
          </S.purpleCircle>
          <TbookMarkList />
        </div>
        <div
          className="rightFullContainer"
          style={{
            position: 'relative',
            // alignItems: 'flex-start',
            // justifyContent: 'start',
            width: '50rem',
            height: '43rem',
          }}
        >
          <div
            className="SearchContainer"
            style={{
              position: 'relative',
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',
              filter: 'drop-shadow(4px 4px 4px rgba(0,0,0,0.25))',
              width: '50rem',
              height: '30rem',
              margin: '0.2rem 0 1.5rem 0 ',
              background: '#ffffff',
              border: '1px solid #dadada',
              borderRadius: '40px',
              zIndex: '1',
            }}
          >
            {/* 검색 */}

            <div
              className="flex" // flex 추가
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: '0.9rem 0',
              }}
            >
              <div
                className="강사는 버튼이 필요없으니 그냥 공간만 넣어둡니다"
                style={{
                  width: '5.75rem',
                  height: '1.75rem',
                }}
              ></div>

              <div
                className="studentsearch"
                style={{
                  position: 'relative',
                  background: 'white',
                  width: '17.16081rem',
                  height: '2.52506rem',
                  border: '0.05rem solid #cdcfd4',
                  borderRadius: '1.73688rem',
                  display: 'flex', // flex container로 설정
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '9rem',
                  marginLeft: '9rem',
                }}
              >
                <input
                  type="text"
                  placeholder="학생조회"
                  style={{
                    margin: '0.74rem 0 0.74rem 0',
                    border: 'none', // input에 border는 따로 설정
                    fontSize: '0.4rem',
                    background: 'transparent',
                    textAlign: 'center',
                    width: '70%',

                    outline: 'none',
                  }}
                />
                <img
                  src={search}
                  alt="searchIcon"
                  style={{
                    marginRight: '0.5rem',
                    position: 'absolute',
                    right: '0',
                  }}
                />
              </div>

              {/* =========== */}
              <div
                className="dropDown"
                style={{
                  background: '#FFFFFF',
                  border: '0.05rem solid #cdcfd4',
                  width: '5rem',
                  height: '2rem',
                  display: 'grid',
                  flexDirection: 'row',
                  borderRadius: '1.44rem',
                }}
              >
                <select
                  className="text-gray-700"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.37rem',
                    marginTop: '0.5rem',
                    marginBottom: '0.7rem',
                  }}
                >
                  <option style={{ background: '#FFFFFF' }}>선택 </option>

                  <option value="1">전체</option>
                  <option value="2">완료</option>
                  <option value="3">미완료</option>
                </select>

                {/* <img
                  src={arrow}
                  alt="arrow"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '1.96rem',
                    height: '0.6rem',
                  }}
                /> */}
              </div>
            </div>
            <TgrayBox />
            <TstudentInfo />
          </div>

          <Tmemo />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
