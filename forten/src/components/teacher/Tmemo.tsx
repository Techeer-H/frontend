import React, { useState, useEffect, ChangeEvent } from 'react';

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
    <div>
      <textarea
        className="maincontainer flex-shrink-0"
        style={{
          width: '50rem',
          minHeight: '11rem',
          overflow: 'scroll',
          resize: 'vertical',
          boxSizing: 'border-box',
          margin: '0 0 0.44rem 0',
          padding: '0.625rem',
          position: 'relative',
          borderRadius: '1.73688rem',
          filter: 'drop-shadow(4px 4px 4px rgba(0,0,0,0.25))',
          border: '1px solid #dadada',
        }}
        placeholder="기억해야할 것들을 적어주세요"
        value={memoContent}
        onChange={handleMemoChange}
      />
    </div>
  );
};

export default TMemo;
