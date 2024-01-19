import react, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import SmileEmoji from '../../assets/smileEmoji.png';
import SadEmoji from '../../assets/sadEmoji.png';

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
  const [parentAver, setParentAver] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://3.37.41.244:8000/api/analysis/${16}/`);

        const parentRating = (response.data.result.parent_rating);

        setParentAver(parentRating);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // parentAver가 undefined 일 경우 0으로 기본값 설정
  const defaultParentAver = parentAver || 0;
  // 이미지 경로 설정
  const emojiImage = defaultParentAver >= 1 ? SmileEmoji : SadEmoji;

  return (
    <Wrapper>
      <Explan>학부모 평가</Explan>
      <FlexContainer>
        <ImgWrapper>
          <div>
            <img src={emojiImage} alt="이모지" />
          </div>
        </ImgWrapper>
        <AvgWrapper>
          <div>
            평균 점수(-5 ~ 5)
          </div>
          <div>
            {parentAver}
          </div>
        </AvgWrapper>
      </FlexContainer>
    </Wrapper>
  )
}


export default ParentAvergy;
