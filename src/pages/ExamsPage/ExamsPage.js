import React, { useState } from 'react';
import './ExamsPage.css';

function ExamsPage() {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const courseTag = window.prompt('Please enter the course tag for this exam:');
    if (file && courseTag) {
      const newExam = { courseTag, fileName: file.name, file: file };
      setExams([...exams, newExam]);
    }
  }

  function openPDF(exam) {
    setSelectedExam(exam);
  }

  return (
    <div id='exams-page-container'>
      <input type='file' accept='.pdf' onChange={handleFileUpload} />
      <ul id='exam-list'>
        {exams.map((exam, index) => (
          <li key={index} onClick={() => openPDF(exam)}>
            {exam.courseTag} - {exam.fileName}
          </li>
        ))}
      </ul>
      {selectedExam && (
        <div id='pdf-viewer'>
          <iframe
            src={URL.createObjectURL(selectedExam.file)}
            width='100%'
            height='500px'
            title='PDF Viewer'
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ExamsPage;
