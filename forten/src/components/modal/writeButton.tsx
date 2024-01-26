import styled from 'styled-components';
import SendImg from '../../assets/send.png';

const FlexContainer = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  border-radius: 0.6rem;
  justify-content: center;
  align-items: center;
  margin-left: 48.6rem;
`;

// 작성하러가기 컴포넌트
function WriteButton(props: any) {
  return (
    // 모달 닫기 버튼도 있어야할 것 같네요
    <FlexContainer onClick={props.onConfirm}>
      <img src={SendImg} alt="보내기" />
    </FlexContainer>
  );
}

export default WriteButton;
