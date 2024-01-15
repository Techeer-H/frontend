import styled from "styled-components";

const SelectBox = styled.div`
  width: 9rem;
  height: 1.75rem;
  border: 1px solid #000;
  border-radius: 20px;
  margin-left: 1%;
`


function GradeSelect() {
    return (
        <SelectBox>
            <select>
                <option value='1'>고1</option>
                <option value='2'>고2</option>
                <option value='3'>고3</option>
            </select>
        </SelectBox>
    )
}

export default GradeSelect;