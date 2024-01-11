import styled from "styled-components";

const Table = styled.table`
  width: 58.25rem;
  height: 5rem;
  text-align: center;
  border: 1px solid #BEBEBE;
  border-radius: 10px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #000;
`

const Td = styled.td`
  border: 1px solid #9C9C9C;
`

const Tr = styled.tr` 
  border: 1px solid #9C9C9C;
`

function studentTable() {

  return (
    <Table>
      <Tr>
        <Td>이현진/18/여</Td>
        <Td>목일중학교</Td>
        <Td>이현진</Td>
      </Tr>
      <Tr>
        <Td>010-0000-0000</Td>
        <Td>중3</Td>
        <Td>010-1111-1111</Td>
      </Tr>
    </Table>
  )
}

export default studentTable;
