import styled from 'styled-components';

export const Fullcontainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;

  background: linear-gradient(237deg, #709d77 34.05%, #d9c9c9 100%);
`;
export const Container = styled.div`
  height: 8.125rem;
  display: flex;
  align-items: center;
`;

export const ConsultantBox = styled.div`
  display: flex;

  justify-content: space-between;
  margin-left: 65rem;
  margin-top: 3rem;
  width: 13.71338rem;
  height: 3.57981rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: rgba(99, 98, 101, 0.42);
`;

export const TeacherBox = styled.div`
  width: 7.85069rem;
  height: 1.415rem;
  transform: rotate(-0.392deg);
  flex-shrink: 0;
  color: #fff;
  font-family: Inter;
  font-size: 1.02281rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10rem;

  height: 0.1875rem;
  width: 15.85rem;
  height: 4rem;
  flex-shrink: 0;
  color: #fff;
  font-family: Inter;
  font-size: 8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SnowImg = styled.img`
  position: absolute;
  top: 10rem;
  transform: translateX(1rem);
`;
export const LogoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
export const NameImg = styled.div`
  position: SpeechRecognitionAlternative;
  width: 100%;
  height: 100%;
`;

export const AccountImg = styled.img`
  width: 3rem; /* 원하는 너비로 조절하세요. */
  height: 3rem;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
`;

export const LogoutImg = styled.img`
  margin-left: -3rem;
  margin-top: 0.7rem;

  width: 2rem; /* 원하는 너비로 조절하세요. */
  height: 2rem;
`;

export const Img = styled.div`
  color: black;
  font-family: Inter;
  font-size: 1.72944rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 0 0.75rem 0rem;
`;

export const ContentContainer = styled.span`
  display: flex;
`;

export const SchoolBox = styled.div`
  width: 12.5rem;
  height: 43.4375rem;
  flex-shrink: 0;
  border-radius: 1.25rem 0rem 0rem 0rem;
  background: rgba(100, 100, 100, 0.2);
  margin-left: 10rem;
  margin-top: 5rem;
  padding: 1.5rem;
`;

export const CommentBox = styled.div`
  width: 67.0625rem;
  height: 43.4375rem;
  flex-shrink: 0;
  margin-left: 11rem;
  margin-top: -6rem;
  border-radius: 0rem 1.25rem 0rem 0rem;
  background: #fff;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7rem auto 0 auto;
`;

export const LeftWrite = styled.div`
  display: flex;
  align-items: center;
  width: 4.0625rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-left: 5rem;
  color: #737b7b;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MiddleWrite = styled.div`
  display: flex;
  align-items: center;
  width: 5.625rem;
  height: 1.6875rem;
  flex-shrink: 0;
  color: #737b7b;
  margin-left: 28rem;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const RightWrite = styled.div`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 1.25rem;
  flex-shrink: 0;
  color: #737b7b;
  margin-left: 12rem;
  margin-right: 3rem;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const EndWrite = styled.div`
display: flex;
align-items: end;
width: 2rem;
height: 1.25rem;
flex-shrink: 0;
color: #737B7B;
margin-left:5rem
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  width: 63.5rem;
  height: 4rem;
  flex-shrink: 0;
  background: #f0f0f0;
  margin: 2rem auto 1.5rem 1rem;
  border-radius: 1.5rem;
`;

export const Behavior = styled.div`
  display: flex;
  width: 20rem;
  height: 2.3125rem;
  flex-direction: row;
  margin-top: 1.87rem;
  margin-left: 2rem;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
`;

export const Number = styled.div`
  display: flex;
  width: 3.75rem;
  height: 3.75rem;
  justify-content: center;
  flex-shrink: 0;
  color: #a7ba9e;
  text-align: center;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 20rem;
`;

export const Boxpencil = styled.img`
  margin-left: 13rem;
`;

export const MinusLogo = styled.img`
  margin-left: 3rem;
`;

export const BehaviorSecond = styled(Behavior)``;

export const BoxpencilSecond = styled.img`
  margin-left: 42.8rem; /* Adjust the margin for the second instance */
`;

export const MinusLogoSecond = styled.img`
  margin-left: 3rem; /* Adjust the margin for the second instance */
`;

export const BoxpencilThird = styled.img`
  margin-left: 29.3rem;
`;

export const MinusLogoThird = styled.img`
  margin-left: 3rem;
`;
export const HorizontalLine = styled.div`
  width: 92%;
  border: 1px solid #ccc; /* Adjust the border color and style as needed */
  margin-top: 0.5rem; /* Adjust the margin as needed */
  margin-left: 2rem;
`;

export const Late = styled.div`
  display: flex;
  width: 20drem;
  height: 2.3125rem;
  flex-direction: row;
  margin-top: 1.87rem;
  margin-left: 2rem;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.9rem;
  margin-top: 0.5rem;
`;

export const Name = styled.div`
  width: 105rem;
  height: 2.25rem;
  flex-shrink: 0;
  color: #fff;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
`;

export const Explan = styled.div`
  width: 7.625rem;
  height: 2.5625rem;
  flex-shrink: 0;
  margin-left: 1rem; /* 왼쪽으로 이동시키는 값은 필요에 따라 조절하세요. */
  /* 위쪽으로 이동시키는 값은 필요에 따라 조절하세요. */
  margin-right: 8rem; /* 오른쪽 여백은 필요에 따라 조절하세요. */
  margin-bottom: 1rem;
  padding: 1.5rem;
  color: #97b3a1;

  font-family: Inter;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BtnContainer = styled.div`
  width: 8.125rem;
  height: 2.5rem;
  margin: 25rem 0 0rem auto;
  margin-bottom: 3rem;
  background: linear-gradient(237deg, #709d77 34.05%, #d9c9c9 100%);
  color: #42424247;
  border: 2px solid #000000;
  fill: #000000;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WriteBtn = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1rem;
  margin: 0rem 0 0rem auto;
`;
