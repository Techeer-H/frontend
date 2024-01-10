import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbar';
import Memo from '../../components/Memo';
interface Props {}

const TeacherPage = (props: Props) => {
  return (
    <div
      className="background"
      style={{
        background: 'linear-gradient(106deg, #F0EAE3 -4.89%, #E2FCFF 105.97%)',
        height: '52rem',
        width: '80rem',
        display: 'block',
        overflow: 'auto',
      }}
    >
      <Navbar />
      <div
        className="SearchContainer"
        style={{
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
          filter: 'drop-shadow(4px 4px 4px rgba(0,0,0,0.25))',
          width: '62.5rem',
          height: '30rem',
          margin: '1.06rem 8.75rem 1.94rem 8.75rem ',
          background: '#ffffff',
          border: '1px solid #dadada',
          borderRadius: '40px',
          zIndex: '1',

          // 반응형 참고
          // top: '1%',
          // height: '60%', 반응형
          //marginLeft: '10%',
          //marginRight: '10%',
        }}
      >
        <div
          className="studentsearch"
          style={{
            position: 'relative',
            background: 'white',
            width: '17.16081rem',
            height: '2.52506rem',
            border: '0.84px solid #cdcfd4',
            borderRadius: '1.73688rem',
            margin: '0.9rem 22.67rem 26.58rem 22.67rem',
          }}
        ></div>
      </div>
      <Memo />
    </div>
  );
};

export default TeacherPage;
