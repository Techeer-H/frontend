import styled from "styled-components";

const Subject = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Korean = styled.div`
  height: 3rem;
  border-bottom: 1px solid #CFCFCF;
  display: flex;
  align-items: center;
`

const Math = styled.div`
  height: 3rem;
  border-bottom: 1px solid #CFCFCF;
  display: flex;
  align-items: center;
`

const English = styled.div`
  height: 3rem;
  border-bottom: 1px solid #CFCFCF;
  display: flex;
  align-items: center;
`

function SubjectLine() {
  return (
    <Subject>
      <Korean>
        Korean
      </Korean>
      <Math>
        Math
      </Math>
      <English>
        English
      </English>
    </Subject>

  )
}

export default SubjectLine;