import styled from 'styled-components';

export const Fullcontainer = styled.div`
width: 90rem;
height: 64rem;

background: linear-gradient(237deg, #709D77 34.05%, #D9C9C9 100%);
color:#A7BA9E;


`;
export const Container = styled.div`
  height: 8.125rem;
  border-bottom: 0.316px solid #a3a8ff;
  background: linear-gradient(
    270deg,
    #e1fbff 14.43%,
    rgba(242, 255, 225, 0.61) 57.19%,
    rgba(255, 248, 225, 0.53) 95.11%
  );
  display: flex;
  align-items: center;
`;
export const NameBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 20em;
  height: 0.1875rem;
`;

export const NameImg = styled.img``;
export const Img = styled.div`
  color: black;
  font-family: Inter;
  font-size: 1.72944rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 0 0.75rem 0rem;
`;

export const CommentBox = styled.div`
  width: 67.25rem;
  height: 36rem;
  flex-shrink: 0;
  fill: #fff;
  margin: 0 auto;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7rem auto 0 auto;
`;
export const TitleBar = styled.div`
  width: 100%;
  height: 0.1875rem;
  background: linear-gradient(154deg, #6936f2 9.75%, #366cf7 97.11%);
  margin: 0rem auto 1.5rem auto;
`;

export const LeftContainer = styled.textarea`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 6.75rem;
  margin-right: 2.3rem;
  border: 0.1rem solid #85a1ff;
  border-radius: 0.4rem;
  width: 40rem;
  height: 28.875rem;
  fill: #ffffff;
  padding: 1rem;
  ::placeholder {
    color: black;
    content: 'Comment';
    opacity: 0.5;
  }
`;

export const RightContainer = styled.div``;
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.9rem;
  margin-top: 0.5rem;
`;
export const Name = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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

export const Explan = styled.div`
  margin-top: 7rem;
  font-size: 1.25rem;
  font-weight: 900;
`;
export const CommentWrapper = styled.ul`
  width: 100%;
  height: 30rem;
  margin-top: 2%;
  padding: 1%;
  border: solid 1px #6f99fa;
  border-radius: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnContainer = styled.div`
  width: 8.125rem;
  height: 2.5rem;
  margin: 4% auto 0 auto;
  background: linear-gradient(to right, #73a6ff, #efc2ff);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WriteBtn = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 1rem;
`;
