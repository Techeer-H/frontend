import styled from 'styled-components';
import BackGround from '../../../assets/BackGround.svg';

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 900px;
  min-width: 1350px;
  padding-top: 2%;
  background: url(${BackGround}) no-repeat;
  background-size: cover; /* This will make the background image cover the entire div */
  background-position: center;
`;

export const TopFullContainer = styled.div`
  width: 84rem;
  height: 4rem;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.2);
  background: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  display: flex;
`;
export const fullcontainer = styled.div`
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
  width: 16rem;
  height: 48rem;
  padding: 1.13rem 2.5rem 0rem 1.5rem;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0rem 0rem 4.62rem 2.81rem;
  border-radius: 0rem 0rem 0rem 1.25rem;
  border-right: 1px solid rgba(213, 213, 213, 0.2);
  background: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
`;

export const RightFullContainer = styled.div`
  width: 68rem;
  height: 48rem;
  display: flex;
  padding: 2.44rem 4.12rem 1rem 4.5rem;
  flex-direction: column;

  border-radius: 0rem 0rem 1.25rem 0rem;
  background: rgba(16, 18, 27, 0.7);
  backdrop-filter: blur(20px);

  margin: 0rem 2.81rem 4.62rem 0rem;
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

export const CommentWrapper = styled.ul`
  margin-top: 0.5rem;
  width: 59rem;
  height: 35rem;
  font-size: 0.9rem;
  padding-top: 1rem;
  font-style: normal;
  font-weight: 400;
  color: #f9fafb;
  overflow: auto;
  border-radius: 0.875rem;
  background: rgba(146, 151, 179, 0.13);
`;

export const TitleBar = styled.div`
  width: 59rem;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.875rem;
  background: rgba(16, 18, 27, 0.4);

  display: flex; /* Flexbox를 활성화합니다. */
  align-items: center;
  justify-content: space-between; /* 수직 가운데 정렬 */
  font-size: 0.9rem;
  font-weight: 400;
  position: sticky;
  color: #ededed;
  margin-bottom: 1.5rem;
`;

export const Write = styled.div`
  width: 23rem;
  display: flex;
  justify-content: center;
  color: #ededed;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;
export const Rating = styled.div`
  width: 31rem;
  padding-right: 2rem;
  display: flex;
  justify-content: end;
  color: #ededed;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;
export const IconContainer = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-evenly;
`;
export const Upgrade = styled.div`
  color: #ededed;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;
export const Delete = styled.div`
  color: #ededed;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;

export const StudentListExplan = styled.div`
  color: #f9fafb;
  font-family: inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  width: 10.4375rem;
  height: 4rem;
  padding: 0.875rem 1.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-bottom: 2px solid #fff;
`;

export const BtnContainer = styled.div`
  width: 9.3125rem;
  height: 3.0625rem;
  background: rgba(63, 63, 63, 0.6);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 2.61rem 0.5rem 45.25rem;
  transition: background-color 0.3s ease;
  &:hover {
    background: rgba(30, 30, 30, 0.9);
  }
`;
export const WriteBtn = styled.button`
  width: 9rem;
  height: 3rem;
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
