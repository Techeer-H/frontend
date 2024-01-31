import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './styles.css';

const WavesComponent: React.FC = () => {
  return (
    <div className="mod">
      <div className="cube">
        <div className="faces f1">
          <div className="dot p1"></div>
          <div className="dot p2"></div>
          <div className="dot p3"></div>

          <div className="dot p4"></div>
          <div className="dot p5"></div>
          <div className="dot p6"></div>

          <div className="dot p7"></div>
          <div className="dot p8"></div>
          <div className="dot p9"></div>
        </div>

        <div className="faces f2">
          <div className="dot p10"></div>
          <div className="dot p11"></div>
          <div className="dot p12"></div>
          <div className="dot p13"></div>
        </div>

        <div className="faces f3">
          <div className="dot p1"></div>
          <div className="dot p2"></div>
          <div className="dot p3"></div>

          <div className="dot p4"></div>
          <div className="dot p5"></div>
          <div className="dot p6"></div>

          <div className="dot p7"></div>
          <div className="dot p8"></div>
          <div className="dot p9"></div>
        </div>

        <div className="faces f4">
          <div className="dot p10"></div>
          <div className="dot p11"></div>
          <div className="dot p12"></div>
          <div className="dot p13"></div>
        </div>

        <div className="faces f5">
          <div className="dot p1"></div>
          <div className="dot p2"></div>
          <div className="dot p3"></div>

          <div className="dot p4"></div>
          <div className="dot p5"></div>
          <div className="dot p6"></div>

          <div className="dot p7"></div>
          <div className="dot p8"></div>
          <div className="dot p9"></div>
        </div>

        <div className="faces f6">
          <div className="dot p10"></div>
          <div className="dot p11"></div>
          <div className="dot p12"></div>
          <div className="dot p13"></div>
        </div>

        <div className="faces f7">
          <div className="dot p1"></div>
          <div className="dot p2"></div>
          <div className="dot p3"></div>

          <div className="dot p4"></div>
          <div className="dot p5"></div>
          <div className="dot p6"></div>

          <div className="dot p7"></div>
          <div className="dot p8"></div>
          <div className="dot p9"></div>
        </div>

        <div className="faces f8">
          <div className="dot p10"></div>
          <div className="dot p11"></div>
          <div className="dot p12"></div>
          <div className="dot p13"></div>
        </div>

        <div className="faces f9">
          <div className="dot p1"></div>
          <div className="dot p2"></div>
          <div className="dot p3"></div>

          <div className="dot p4"></div>
          <div className="dot p5"></div>
          <div className="dot p6"></div>

          <div className="dot p7"></div>
          <div className="dot p8"></div>
          <div className="dot p9"></div>
        </div>

        <div className="faces f10">
          <div className="dot p10"></div>
          <div className="dot p11"></div>
          <div className="dot p12"></div>
          <div className="dot p13"></div>
        </div>

        <div className="faces f11">
          <div className="dot p1"></div>
          <div className="dot p2"></div>
          <div className="dot p3"></div>

          <div className="dot p4"></div>
          <div className="dot p5"></div>
          <div className="dot p6"></div>

          <div className="dot p7"></div>
          <div className="dot p8"></div>
          <div className="dot p9"></div>
        </div>
      </div>

      <Link to="/jaemin" className="project-name">
        {/* <div className="l1">-START-</div> */}
        <BtnShine>
          For:TEN <br /> start
        </BtnShine>
      </Link>
    </div>
  );
};

const shine = keyframes`
  0% {
    background-position: 0;
  }
  50% {
    background-position: 180px;
  }
  100% {
    background-position: 270px;
  }
`;

const BtnShine = styled.a`
  transform: translate(-50%, -50%);
  background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 3s infinite linear;
  font-weight: 600;
  font-size: 20px;
`;

export default WavesComponent;
