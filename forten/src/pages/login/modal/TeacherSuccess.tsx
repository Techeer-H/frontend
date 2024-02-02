import Checkicon from '../../../assets/Checkicon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type TeacherSuccessLoginProps = {
  setTeacherOpen: (teacherSucessOpen: boolean) => void;
};

const Container = styled.div`
  position: absolute;
  z-index: 1;
  border: 1px solid #ffffff; //
  top: 7rem;
  width: 26.25rem;
  height: 15rem;
  border-radius: 1rem;
  background: rgba(16, 18, 27, 0.6);
  backdrop-filter: blur(30px);
`;

const Text = styled.div`
  display: flex;
  width: 25rem;
  height: 2.15906rem;
  flex-direction: column;
  justify-content: center;
  color: #e3ddff;
  margin-left: 0.8rem;
  margin-bottom: 2.2rem;
  text-align: center;
  font-family: Inter;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 525;
`;
const Img = styled.div`
  width: 16rem;
  height: 5.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  display: flex;
  width: 13rem;
  height: 2.6rem;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  margin-left: 6.4rem;
  color: #eae2ff;
  border: 2px solid #ffffff; //
  background: transparent;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 1rem; //
  transition: background-color 0.3s ease;

  &:hover {
    background: #ebdeff;
    color: #7c7c7c;
  }
`;

//구조분해할당
const T_successLoginModal = ({ setTeacherOpen }: TeacherSuccessLoginProps) => {
  const user_name = localStorage.getItem('user_name');

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setTeacherOpen(false);
    navigate('/teacher');
  };

  return (
    <Container>
      <Img>
        <img src={Checkicon} alt="Checkicon" />
      </Img>
      <Text>
        {' '}
        어서오세요! <br />
        {user_name}&nbsp; 강사님
      </Text>
      <Button onClick={handleButtonClick}>확인</Button>
      {/* onClick={() => setIsOpen(false) */}
    </Container>
  );
};

export default T_successLoginModal;
