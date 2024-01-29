import React, { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';

const TMemo: React.FC = () => {
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

const Textarea = styled.textarea`
  width: 12.3125rem;
  height: 16rem;
  font-size: 0.875rem;
  resize: none;
  padding-top: 1rem;
  padding-left: 0.6rem;
  background: transparent;
  color: #f9fafb;

  &:focus {
    outline: none;
  }
`;

export default TMemo;
