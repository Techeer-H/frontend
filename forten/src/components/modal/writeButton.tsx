import styled from "styled-components";
import SendImg from '../../assets/send.png';

const RightBox = styled.div`
  padding-left: 79%;
`

const FlexContainer = styled.button`
  width: 8.125rem;
  height: 2.5rem;
  margin-left:79%;
  background: linear-gradient(to right, #73A6FF, #EFC2FF);
  display: flex;
  border-radius: 15px;
  justify-content: center;
`

const ImgBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`

// 작성하러가기 컴포넌트
function WriteButton(props) {
  return (
    // 모달 닫기 버튼도 있어야할 것 같네요
    <FlexContainer onClick={props.onConfirm}>
      <ImgBox>
        <img src={SendImg} alt="보내기" />
      </ImgBox>
    </FlexContainer>

  )
}

export default WriteButton;