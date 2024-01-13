import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`

const TextArea = styled.div`
  width: 94%;
  height: 5rem;
  border: 1px solid #717171;
  border-radius: 10px;
  padding: 0.25rem;
  font-size: 0.875rem;
`;

// 작성한 글 보여주는 컴포넌트
const WordBox = () => {
    return (
        <Center>
            <TextArea>
                이 학생은 이렇고.. 저렇고... 이렇습니다..
            </TextArea>
        </Center>
    );
};

export default WordBox;