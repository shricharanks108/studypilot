import React, { useState } from 'react';
import './UploadPage.css'; 
import Button from 'react-bootstrap/Button';

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [courseName, setCourseName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      setSelectedFile(null);
    } else {
      console.log('No file selected');
    }
  };

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };

  return (
    <div className="upload_page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <div id="examsContainer">
      <div className="exam-header">
        <h1 className="create-course-heading">Create a new course</h1>
        <div className="course-name-container">
          <label htmlFor="courseName" className="course-name-label">Course Name: </label>
          <input
            id="courseName"
            type="text"
            value={courseName}
            onChange={handleCourseNameChange}
            placeholder="Enter course name"
            className="course-name-input"
          />
        </div>
        <h2 className="upload_text">Upload your textbook PDF here</h2>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <br/>
        <Button className="upload_button" style={{ width: '80px'}} onClick={handleUpload}>Upload</Button>
        {selectedFile && (
          <p className="file-name">File Name: {selectedFile.name}</p>
        )}
      </div>
    </div>
    </div>
  );
  
}

export default UploadPage;
