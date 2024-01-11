import styled from "styled-components";
import SendImg from '../../assets/send.png';

const FlexContainer = styled.button`
  width: 9.375rem;
  height: 3.75rem;
  background-color: #FFF5F5;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-evenly;
`

const Explan = styled.p`
  font-size: 1rem;
`

const ImgBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`


function WriteButton() {
    return (
        <FlexContainer>
            <Explan>작성하러 가기</Explan>
            <ImgBox>
                <img src={SendImg} alt="보내기" />
            </ImgBox>
        </FlexContainer>
    )
}

export default WriteButton;