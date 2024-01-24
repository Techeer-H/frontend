import styled from 'styled-components';
import remove from '../../assets/remove.svg';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  width: 8.25rem;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  margin: 0.25rem auto;
`;

const Name = styled.p`
  font-size: 0.65rem;
  color: #5f6868;
`;

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
    <>
      {bookmarkedStudents.map((studentName) => (
        <Wrapper key={studentName}>
          <Name>{studentName}</Name>
          <button onClick={() => removeBookmark(studentName)}>
            <img src={remove} alt="Remove Bookmark" />
          </button>
        </Wrapper>
      ))}
    </>
  );
};

export default BookMarkList;
