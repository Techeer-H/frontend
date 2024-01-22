import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

export type MemoType = {
  user_id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
  role: string;
};

type MemoProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setConsultantOpen: () => void;
  onConsultantOpenChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  memoInput: string; // 추가
};

const Memo: React.FC<MemoProps> = ({ memoInput, setConsultantOpen, onConsultantOpenChange }) => {
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
    onConsultantOpenChange && onConsultantOpenChange(event);  
    localStorage.setItem('memo', newMemoContent);
    
    
     
  };


  const updateMemo = async () => {
    try {
      const data ={
        user_id: 1,
        memo:memoContent,
        
        
      };
      await axios.put(
        'http://3.37.41.244:8000/api/user/memo', data)
        
     
      
      alert('메모가 업데이트되었습니다.');
      // 업데이트가 성공했을 때 모달을 닫음
      setConsultantOpen();
    } catch (error) {
      // 오류 처리
      console.error('메모 업데이트 오류:', error);
    }
  };
    

  
  const data = localStorage.getItem('data');
  const [memo, setMemo] = useState<MemoType[]>([]);

 
    const getMemo = async () => {
      let response;
      
    }
      
    useEffect(() => {
      getMemo();
    }, [memoInput]);
    
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

export default Memo;

