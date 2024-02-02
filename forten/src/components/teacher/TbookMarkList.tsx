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
        <Wrapper key={studentName}>
          <img style={{ width: '2rem', marginRight: '1.06rem' }} src={Profile}></img>
          <Name>{studentName}</Name>
          <button onClick={() => removeBookmark(studentName)}>
            <img style={{ width: '1.2rem' }} src={remove} alt="Remove Bookmark" />
          </button>
        </Wrapper>
      ))}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const Name = styled.p`
  color: #f9fafb;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 3.5rem;
`;

export default TBookMarkList;
