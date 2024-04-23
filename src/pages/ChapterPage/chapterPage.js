import React from 'react';
import { useParams } from 'react-router-dom';

function ChapterPage() {
  const { id } = useParams();

  // Construct the file path based on the chapter ID
  const pdfPath = `/src/DCSummaries/IT332_Chapter_${id}_LectureNotes.pdf`;

  return (
    <div className="chapter-page">
      <h2>Chapter Study Guide</h2>
      <h4> pdf: {pdfPath}</h4>
      <div className="pdf-container">
        {/* <embed
          src={pdfPath}
          type="application/pdf"
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
        ></embed>
        <iframe
            src={pdfPath}
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
        ></iframe> */}
      </div>
    </div>
  );
}

export default ChapterPage;
