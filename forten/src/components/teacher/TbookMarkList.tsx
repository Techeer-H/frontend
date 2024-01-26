import styled from 'styled-components';
import remove from '../../assets/remove.svg';
import Profile from '../../assets/profile.svg';
import { useEffect } from 'react';

interface bookmarkedProps {
  bookmarkedStudents: string[];
  setBookmarkedStudents: (bookmarkedStudents: string[]) => void;
}

const TBookMarkList = ({ bookmarkedStudents, setBookmarkedStudents }: bookmarkedProps) => {
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
    <div style={{ overflow: 'auto' }}>
      {bookmarkedStudents.map((studentName) => (
        <Box>
          <Wrapper key={studentName}>
            <img style={{ width: '2rem' }} src={Profile}></img>
            <Name>{studentName}</Name>
            <button onClick={() => removeBookmark(studentName)}>
              <img style={{ width: '1.2rem' }} src={remove} alt="Remove Bookmark" />
            </button>
          </Wrapper>
        </Box>
      ))}
    </div>
  );
};

const Box = styled.div`
  width: 20rem;
  height: 4rem;
`;
const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
const Name = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #8e8e8e;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

export default TBookMarkList;
