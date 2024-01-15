import React from 'react';

const Memo = () => {
  return (
    <div>
      <textarea
        className="maincontainer  flex-shrink-0"
        style={{
          width: '50rem',
          minHeight: '11rem',
          overflow: 'scroll', // 어느정도 짤라서 보여줌 scroll,auto 등이 있으니 참고
          resize: 'vertical',
          // whitespace:'nowrap', 기본적으로 텍스트나 이미지와 같은 인라인 요소들은 가로 공간이 부족한 경우 줄바꿈이 되기 때문에,
          //세로 방향으로 스크롤바가 생기는데요. 가로 방향으로 스크롤바가 생기게 하고 싶다면 단순히 white-space 속성을
          // nowrap으로 변경하여 줄바꿈이 되지 않도록 하면 됩니다.
          boxSizing: 'border-box',
          margin: '0 0 0.44rem 0',
          padding: '0.625rem',
          position: 'relative',
          borderRadius: '1.73688rem',
          filter: 'drop-shadow(4px 4px 4px rgba(0,0,0,0.25))',
          border: '1px solid #dadada',
        }}
        placeholder="기억해야할 것들을 적어주세요"

        //flexDirection: 'column',
      ></textarea>

      {/* 
        //display: 'flex',
        // alignItems: 'start',

        //반응형 때 고쳐 넣으시오

        //   top: '5%',
        //   marginLeft: '10%',
        //   marginRight: '10%',
        //   width: '80%',
        //   height: '20%', */}
    </div>
  );
};

export default Memo;
