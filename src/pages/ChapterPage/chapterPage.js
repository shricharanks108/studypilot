import React from 'react';
import { useParams } from 'react-router-dom';

function ChapterPage() {
  const { id } = useParams();

  // Construct the file path based on the chapter ID
  const pdfPath = `https://web.njit.edu/~pma28/summaries/IT332_Chapter_${id}_LectureNotes.pdf`;

  return (
    
    <div className="chapter-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '20px', marginTop: '40px' }}>Chapter Study Guide</h2>
      <div className="pdf-container" style={{ width: '100%', maxWidth: '1200px' }}>
        <embed
          src={pdfPath}
          type="application/pdf"
          frameBorder="0"
          scrolling="auto"
          height="700px"
          width="100%"
        ></embed>
      </div>
    </div>
  );
}

export default ChapterPage;
