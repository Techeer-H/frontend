import styled from 'styled-components';
import SendImg from '../../assets/send.png';

const FlexContainer = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 0.875rem;
  display: flex;
  border-radius: 0.6rem;
  justify-content: space-around;
  align-items: center;
`;

// 작성하러가기 컴포넌트
function WriteButton(props: any) {
  return (
    // 모달 닫기 버튼도 있어야할 것 같네요
    <FlexContainer onClick={props.onConfirm}>
      <div style={{ marginRight: '1rem' }}>만족도</div>
      <img src={SendImg} alt="보내기" />
    </FlexContainer>
  );
}

export default WriteButton;
