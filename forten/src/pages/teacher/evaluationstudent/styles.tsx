import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2%;

  background: linear-gradient(237deg, #709d77 34.05%, #d9c9c9 100%);
`;

export const fullcontainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 49rem;
  padding-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftFullContainer = styled.div`
  width: 13.875rem;
  height: 44rem;
  background-color: rgba(100, 100, 100, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1%;
  border-top-left-radius: 20px;
  color: #fff;
`;

export const RightFullContainer = styled.div`
  width: 67.375rem;
  height: 44rem;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameBox = styled.div``;

export const CommentBox = styled.div`
  width: 64rem;
  height: 42rem;

  fill: #fff;
  margin: 1.6rem 1.5rem 1.56rem 1.5rem;
`;

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
`;

export const Explan = styled.div`
  width: 7rem;
  height: 3rem;
  color: #97b3a1;
  font-family: Inter;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  margin: 2rem 0 0rem 2.8rem;
`;
export const CommentWrapper = styled.ul`
  width: 64em;
  height: 36rem;
  margin: 0 0 2rem 1.6rem;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  width: 64rem;
  height: 4rem;
  background: #f0f0f0;
  margin: 1.6rem 0 1rem 1.6rem;
  border-radius: 1rem;
  padding: 1%;
`;

export const Write = styled.div`
  width: 23rem;
  display: flex;
  justify-content: center;
  color: #737b7b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;
export const Rating = styled.div`
  width: 31rem;
  padding-right: 2rem;
  display: flex;
  justify-content: end;
  color: #737b7b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;
export const IconContainer = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-evenly;
`;
export const Upgrade = styled.div`
  color: #737b7b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;
export const Delete = styled.div`
  color: #737b7b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;

export const BtnContainer = styled.div`
  width: 9rem;
  height: 2.5rem;
  background: rgba(66, 66, 66, 0.28);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.06rem 0 0 78rem;
`;

export const WriteBtn = styled.button`
  color: #fff;
  font-size: 1rem;
`;
