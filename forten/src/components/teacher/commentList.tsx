import styled from 'styled-components';
import { Button } from '../../pages/signup/main/styles';
import Delete from '../../assets/delete.svg';
import Modify from '../../assets/modify.svg';
import React, { useEffect, useState } from 'react';
import TeacherRatingPage from '../../pages/teacher/modal/teacherrating';
import axios from 'axios';

interface CommentListProps {
  content: string;
  rating: string;
  feedbackId: string;
}
const CommentList: React.FC<CommentListProps> = (props) => {
  const [isModifyModalOpen, setModifyModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [content, setContent] = useState('');
  // const [rating, setRating] = useState('');

  const openModifyModal = () => {
    setModifyModalOpen(true);
  };

  const closeModifyModal = () => {
    setModifyModalOpen(false);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
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
    <FlexComment>
      <Text>학생 평가 내용 {props.content}</Text>
      <Rating>
        <div>학생 점수</div>
        <div>4.6 {props.rating}</div>
      </Rating>
      <ActionContainer>
        <div>
          수정
          <ModifyBtn type="button">
            <div>
              <img src={Modify} alt="수정" style={{ height: '100%' }}></img>
            </div>
          </ModifyBtn>
        </div>
        <div>
          삭제
          <DeleteBtn type="button">
            <div>
              <img src={Delete} alt="삭제" style={{ height: '100%' }}></img>
            </div>
          </DeleteBtn>
        </div>
      </ActionContainer>

      {isModifyModalOpen && <TeacherRatingPage closeModal={closeModifyModal} feedbackId="2" />}

      {isDeleteModalOpen && <TeacherRatingPage closeModal={closeDeleteModal} feedbackId="" />}
    </FlexComment>
  );
};

const FlexComment = styled.div`
  width: 98%;
  min-height: 6rem;
  display: flex;
  justify-content: space-evenly;
  margin: 1%;
  padding: 1%;
  border: solid 1px #5a5a5a;
  border-radius: 10px;
`;

const Text = styled.div`
  width: 60%;
  height: 100%;
`;

const Rating = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ActionContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ModifyBtn = styled.button`
  align-items: center;
`;
const DeleteBtn = styled.button`
  align-items: center;
`;

export default CommentList;
