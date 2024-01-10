import styled from "styled-components";
import StudentTable from "../../StudentTable";
import ColseBtn from '../../../assets/closeBtn.png';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`

const Modal = styled.div`
  position: fixed;
  border: 1px solid #000000;
  border-radius: 40px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 62.5rem;
  height: 45rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Close = styled.img`
  margin-left: 95%;
  margin-top: 3%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

const Center = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 1.25rem;
`

function StudentDetail() {
    return (
        <div>
            <Backdrop />
            <Modal>
                <Close src={ColseBtn} alt="닫기" />
                <Center>
                    <StudentTable />
                </Center>
                <div>
                    <div>
                        <div>학생 평가</div>
                        <div>학부모 평가</div>
                    </div>
                    <div>
                        <div>내신, 모의고사 내용</div>
                        <div>조회 내용</div>
                    </div>
                </div>
                <div>
                    작성하기 버튼
                </div>
            </Modal>
        </div>
    )
}

export default StudentDetail;