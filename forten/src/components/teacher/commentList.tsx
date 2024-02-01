import styled from 'styled-components';
import Delete from '../../assets/MinusLogo.svg';
import Modify from '../../assets/Boxpencil.svg';
import React, { useState } from 'react';
import TeacherRatingPage from '../../pages/teacher/modal/teacherrating';
import axios from 'axios';

interface CommentListProps {
  content: string;
  rating: number;
  feedbackId: number;
  onModifyClick: any;
}
const CommentList: React.FC<CommentListProps> = (props) => {

  const userId = localStorage.getItem('user_Id')
  console.log('로컬 값' + userId);

  const [modalFeedbackId, setModalFeedbackId] = useState<number | undefined>(undefined);


  const modifyHandler = (feedbackId: number) => {
    setModalFeedbackId(feedbackId);


    // 수정 버튼 클릭 시, 부모 컴포넌트로 전달받은 함수 호출
    if (props.onModifyClick) {
      props.onModifyClick(feedbackId, props.content, props.rating);
    }
  };

  console.log(modalFeedbackId);
  const removeHandler = (feedbackId: number) => {
    axios.delete(`http://3.37.41.244:8000/api/feedback/${userId}/${feedbackId}`);
  };

  // useEffect(() => {
  //   const dataApi = () => {
  //     axios
  //       .get('http://3.37.41.244:8000/api/feedback/2/2/info')
  //       .then(function (res) {
  //         console.log(res);
  //         console.log(res.data.result);
  //         setContent(res.data.result[0].content);
  //         setRating(res.data.result[0].student_rating);
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   };

  //   dataApi();
  // }, []);
  return (
    <div>
      <FlexComment>
        <Text>{props.content}</Text>
        <Rating>{props.rating}</Rating>
        <ActionContainer>
          <ModifyBtn onClick={() => modifyHandler(props.feedbackId)}>
            <ImgBox>
              <img src={Modify} alt="수정" style={{ height: '100%' }}></img>
            </ImgBox>
          </ModifyBtn>

          <DeleteBtn onClick={() => removeHandler(props.feedbackId)}>
            <ImgBox>
              <img src={Delete} alt="삭제" style={{ height: '100%' }}></img>
            </ImgBox>
          </DeleteBtn>
        </ActionContainer>
        {/* {isDeleteModalOpen && <TeacherRatingPage closeModal={closeDeleteModal} feedbackId="" />} */}
      </FlexComment>

      {/* {isModifyModalOpen && (
        <TeacherRatingPage
          closeModal={closeModifyModal}
          feedbackId={modalFeedbackId}
          comment={props.content}
          studentRating={props.rating}
        />
      )} */}
    </div>
  );
};

const FlexComment = styled.li`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(113, 119, 144, 0.25);
  transition: background-color 0.3s ease;
  &:hover {
    background: rgba(16, 18, 27, 0.4);
  }
`;

const Text = styled.div`
  margin-left: 1rem;
  width: 60rem;
  color: #f9fafb;

  white-space: nowrap;        /* 줄 바꿈 방지 */
  overflow: hidden;           /* 넘치는 부분 숨김 */
  text-overflow: ellipsis;    /* 넘치면 ... 으로 표시 */
`;

const Rating = styled.div`
  width: 15rem;
  color: #f9fafb;
  text-align: center;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ActionContainer = styled.div`
  width: 9.5rem;
  display: flex;
  justify-content: space-evenly;
`;
const ModifyBtn = styled.button`
  align-items: center;
  margin-right: 1rem;
`;

const ImgBox = styled.div`
  width: 24px;
  height: 24px;
`

const DeleteBtn = styled.button`
  align-items: center;
`;

export default CommentList;
