import styled from 'styled-components';
import Navbar from '../../../components/consultant/navBar';
import Commentname from '../../../assets/Commentname.svg';
import Evaluation from '../../../assets/Evaluation.svg';

export const Fullcontainer = styled.div`
width: 80rem;
height: 52rem;
background: white;
`;
export const Container = styled.div`
width: 80rem;
height: 8.13488rem;
flex-shrink: 0;
border: 0.316px solid #5100FF;
background: linear-gradient(270deg, #E1FBFF 14.43%, rgba(242, 255, 225, 0.61) 57.19%, rgba(255, 248, 225, 0.53) 95.11%);
display: flex;
align-items: center;
`;
export const NavBar = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
width: 6.25rem;
height: 6.25rem;
flex-shrink: 0;
`;
export const Img = styled.div`
color: black;
font-family: Inter;
font-size: 1.72944rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin:0 0 0 2rem;
`;
export const Bar = styled.div`
`;
export const CommentBox = styled.div`
width: 80rem;
height: 40rem;
flex-shrink: 0;
fill: #FFF;
`;
export const TitleBox = styled.div`
display:flex;
justify-content: space-between;
margin: 3.5rem 6.81rem 0rem 6.75rem;
`;
export const TitleBar = styled.div`
width: 66.4375rem;
height: 0.1875rem;
background: linear-gradient(154deg, #6936F2 9.75%, #366CF7 97.11%);
margin: 0rem 7.06rem 1.5rem 6.75rem
`;
export const CommentContainer = styled.input`
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 margin:0 auto;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  width: 66.1875rem;
  height: 30.0625rem;
  flex-shrink: 0;
  fill: #FFF;
  ::placeholder {
    color: black;
    content: 'Comment';
    opacity: 0.5;
  }
`;
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Name = styled.span`
color: #000;
font-family: Inter;
font-size: 1.375rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
export const Divider = styled.span`
  margin: 0 1rem;
`;
export const TextContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
`;
export const EvaluationImage = styled.img`
  /* 기존 스타일 유지 */
  margin-left: -20px; /* 음수 값으로 조절 */
`;
export const CheckBox = styled.div`
display:flex;
justify-content: end;
flex-shrink: 0;
fill: #FFF;
margin: 0 12.06rem 2rem 6.75rem;
border-radius: 2rem;
`;
export const CheckBoxContainer = styled.div`
width: 100%;
`;
export const Check = styled.div`
width: 200rem;
height: 2.125rem;
display: flex;
align-items: flex-end;
flex-shrink: 0;
border-radius: 10rem;
border: 0.5px solid black;
margin: 0rem 10rem 4rem 7.06rem
`;