import styled from 'styled-components';
import remove from '../../assets/remove.svg';
import { useEffect } from 'react';
import Profile from '../../assets/profile.svg';

interface bookmarkedProps {
  bookmarkedStudents: string[];
  setBookmarkedStudents: (bookmarkedStudents: string[]) => void;
}

const BookMarkList = ({ bookmarkedStudents, setBookmarkedStudents }: bookmarkedProps) => {
  useEffect(() => {
    const storedBookmarkedStudents = localStorage.getItem('bookmarkedStudents');
    if (storedBookmarkedStudents) {
      setBookmarkedStudents(JSON.parse(storedBookmarkedStudents));
    }
  }, []);

  const removeBookmark = (studentName: string) => {
    const updatedBookmarks = bookmarkedStudents.filter((name) => name !== studentName);
    setBookmarkedStudents(updatedBookmarks);
    localStorage.setItem('bookmarkedStudents', JSON.stringify(updatedBookmarks));
  };

  return (
    <Fullcontainer>
      {bookmarkedStudents.map((studentName) => (
        <Wrapper key={studentName}>
          <img style={{ width: '2rem' }} src={Profile}></img>
          <Name>{studentName}</Name>
          <button onClick={() => removeBookmark(studentName)}>
            <img style={{ width: '1.2rem' }} src={remove} alt="Remove Bookmark" />
          </button>
        </Wrapper>
      ))}
    </Fullcontainer>
  );
};

const Fullcontainer = styled.div`
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  
  /* 스크롤바 커스터마이징 */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(1 2 3 / 80%);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }  
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 0.8rem;
`;
const Name = styled.p`
  color: #f9fafb;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default BookMarkList;
