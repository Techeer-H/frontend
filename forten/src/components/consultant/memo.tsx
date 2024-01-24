import styled from 'styled-components';
import React, { useState, useEffect, ChangeEvent } from 'react';

const Textarea = styled.textarea`
  width: 100%;
  height: 90%;
  font-size: 0.875rem;
  resize: none;
`

const Memo: React.FC = () => {
  const [memoContent, setMemoContent] = useState<string>('');

  useEffect(() => {
    const storedMemo = localStorage.getItem('memo');
    if (storedMemo) {
      setMemoContent(storedMemo);
    }
  }, []);

  const handleMemoChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newMemoContent = event.target.value;
    setMemoContent(newMemoContent);
    localStorage.setItem('memo', newMemoContent);
  };

  return (
    <Textarea
      placeholder="기억해야할 것들을 적어주세요"
      value={memoContent}
      onChange={handleMemoChange}
    />
  );
};

export default Memo;

