// ChapterList.js

import React from 'react';
import { Link } from 'react-router-dom';

const chapters = [
  { id: 1, title: 'Tour of Computer Systems' },
  { id: 2, title: 'Representing and Manipulating Information' },
  // Add more chapters
];

function ChapterList() {
  return (
    <div>
      <h2>Chapters:</h2>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>{chapter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChapterList;
