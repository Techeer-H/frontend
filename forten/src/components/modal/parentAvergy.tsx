import styled from "styled-components";

const Explan = styled.p`
  font-size: 0.875rem;
`

const FlexContainer = styled.div`
  display: flex;
  width: 16.25rem;
  justify-content: space-evenly;
`

const ImgWrapper = styled.div`
  width: 7.6rem;
  height: 4.125rem;
  border: 0.56px solid #000;
  border-radius: 10px;
`

const AvgWrapper = styled.div`
  width: 7.6rem;
  height: 4.125rem;
  background-color: #B59FF2;
  border-radius: 10px;
  color: #fff;
  font-size:0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


function parentAvergy() {
    return (
        <div>
            <Explan>학부모 평가</Explan>
            <FlexContainer>
                <ImgWrapper>
                    <div>
                        이미지 삽입
                    </div>
                </ImgWrapper>
                <AvgWrapper>
                    <div>
                        평균 점수
                    </div>
                    <div>
                        8.4
                    </div>
                </AvgWrapper>
            </FlexContainer>
        </div>
    )
}

export default parentAvergy;