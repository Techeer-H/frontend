import styled from "styled-components";

const FlexComment = styled.div`
  width: 98%;
  min-height: 6rem;
  display: flex;
  justify-content: space-evenly;
  margin: 1%;
  padding: 1%;
  border: solid 1px #5A5A5A;
  border-radius: 10px;
`

const Text = styled.div`
  width: 60%;
  height: 100%;
`

const Rating = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ActionContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`


function CommentList() {
    return (
        <FlexComment>
            <Text>학생 평가 내용</Text>
            <Rating>
                <div>학생 점수</div>
                <div>4.6</div>
            </Rating>
            <ActionContainer>
                <div>수정</div>
                <div>삭제</div>
            </ActionContainer>
        </FlexComment>
    )
}

export default CommentList;