import styled from "styled-components";

const Wrapper = styled.div`
  width: 18.75rem;
  height: 16rem;
  margin-bottom: 1rem;
`

const Explan = styled.p`
  font-size: 1rem;
  font-weight: 900;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`

const ImgWrapper = styled.div`
  width: 7.6rem;
  height: 4.125rem;
  border: 0.56px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items:center;
`

const AvgWrapper = styled.div`
  width: 7.6rem;
  height: 4.125rem;
  background-color: #B59FF2;
  border-radius: 10px;
  color: #fff;
  font-size:0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// 학부모 평가 컴포넌트
function ParentAvergy() {
    return (
        <Wrapper>
            <Explan>학부모 평가</Explan>
            <FlexContainer>
                <ImgWrapper>
                    <div>
                        div로 이미지 크기 조절
                        <img />
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
        </Wrapper>
    )
}


export default ParentAvergy;
