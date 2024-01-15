import styled from "styled-components";
import send from '../../assets/send.png'

const Form = styled.form`
  width: 8.25rem;
  height: 15.25rem;
  background-color: rgba(252, 246, 255, 0.5);
  border: 1px solid #C1C7FF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const Explan = styled.div`
  font-size: 1rem;
  font-weight: 900;
`

const Input = styled.input`
  width: 90%;
  height: 3rem;
  background-color: transparent;
`

const BtnWrapper = styled.div`
  width: 100%;
  background-color: #C1C7FF;
  display: flex;
  justify-content: center;

`

const SummitBtn = styled.button`
  display: flex;
  align-items: center;

`


function EnterGrades() {
    return (

        <Form>
            <Explan>1학기 기말고사</Explan>
            <Input type='text' placeholder='국어 등급 입력' />
            <Input type='text' placeholder='수학 등급 입력' />
            <Input type='text' placeholder='영어 등급 입력' />

            <BtnWrapper>
                <SummitBtn>저장하기
                    <div>
                        <img src={send} alt='전송 아이콘' />
                    </div>
                </SummitBtn>
            </BtnWrapper>

        </Form>

    )
}

export default EnterGrades;