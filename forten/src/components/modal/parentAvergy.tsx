import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SmileEmoji from '../../assets/smileEmoji.svg';
import SadEmoji from '../../assets/sadEmoji.svg';

const Wrapper = styled.div`
  width: 18.75rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ImgWrapper = styled.div`
  width: 7.6rem;
  height: 7.75rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(198, 198, 198, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(20px);
`;

const AvgWrapper = styled.div`
  width: 7.6rem;
  height: 7.75rem;
  background-color: rgba(198, 198, 198, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ScoreExplan = styled.div`
  font-size: 1rem;
  color: #f9fafb;
  font-weight: 400;
`;

const Score = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: #f9fafb;
`;

interface ParentAvergyProps {
  studentId: number;
}
// 학부모 평가 컴포넌트
function ParentAvergy(props: ParentAvergyProps) {
  const [parentAver, setParentAver] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://3.37.41.244:8000/api/analysis/${props.studentId}/`,
        );

        const parentRating = response.data.result.parent_rating;

        setParentAver(parentRating);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // parentAver가 undefined 일 경우 0으로 기본값 설정
  const defaultParentAver = parentAver || 1;
  // 이미지 경로 설정
  const emojiImage = defaultParentAver >= 5 ? SmileEmoji : SadEmoji;

  return (
    <Wrapper>
      <FlexContainer>
        <ImgWrapper>
          <div>
            <img src={emojiImage} alt="이모지" />
          </div>
        </ImgWrapper>
        <AvgWrapper>
          <ScoreExplan>평균 점수</ScoreExplan>
          <Score>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2rem',
                width: '4rem',
                height: '4rem',
                border: '2px solid #f9fafb',
              }}
            >
              {parentAver}
            </div>
          </Score>
        </AvgWrapper>
      </FlexContainer>
    </Wrapper>
  );
}

export default ParentAvergy;
