import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Center = styled.div`
  display: flex;
  justify-content: center;

`

const TextArea = styled.div`
  width: 82rem;
  height: 27.5rem;
  color: #fff;
  background-color: rgba(146, 151, 179, 0.13);
  border-radius: 15px;
  padding: 1%;
  font-size: 1.3rem;
  overflow: auto;
`;

interface WordBoxProps {
  studentId: number;
}


// 작성한 글 보여주는 컴포넌트
function WordBox(props: WordBoxProps) {

  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://3.37.41.244:8000/api/analysis/prompt/${props.studentId}/`);
        console.log(response.data.response);
        setText(response.data.response || '잠시만 기다려주세요');
      } catch (error) {
        console.log('학생 ai 요약 실패', error);
      }
    };

    fetchData(); // useEffect 내에서 fetchData 호출
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <Center>
      <TextArea>
        {text}
      </TextArea>
    </Center>
  );
};

export default WordBox;
