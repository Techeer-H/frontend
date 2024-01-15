import styled from 'styled-components';

export const Fullcontainer = styled.div`
  background: white;
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
  flex-shrink: 0;
  fill: #fff;
  margin-left: 15rem;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7rem 6.81rem 0rem 6.75rem;
`;
export const TitleBar = styled.div`
  width: 67.25rem;
  height: 0.1875rem;
  background: linear-gradient(154deg, #6936f2 9.75%, #366cf7 97.11%);
  margin: 0rem 7.06rem 1.5rem 6.75rem;
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
