import React, { useState } from 'react';
import './UploadPage.css';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom';

const chapterMap = [
  { number: '1', name: 'An Introduction to High-Technology Crime', date: null },
  { number: '2', name: 'Hackers, Crackers, and Phone Phreaks', date: null },
  { number: '3', name: 'Identity Theft: Tools and Techniques of 21st Century Bandits', date: null },
  { number: '4', name: 'Digital Child Pornography and the Abuse of Children in Cyberspace', date: null },
  { number: '5', name: 'Financial Fraud and Con Artistry on the Internet', date: null },
  { number: '6', name: 'Online Harassment and Cyberstalking', date: null },
  { number: '7', name: 'Intellectual Property Theft and Digital File Sharing', date: null },
  { number: '8', name: 'Investigations on the Web: Examining Online Investigations and Sting Operations', date: null },
  { number: '9', name: 'Seizure of Digital Evidence', date: null },
  { number: '10', name: 'Executing a Search Warrant for Digital Evidence', date: null },
  { number: '11', name: 'An Introduction to Computer Forensics', date: null },
];

function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [courseName, setCourseName] = useState('');
  const [chapterDates, setChapterDates] = useState(Array(chapterMap.length).fill(null));

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      const newFile = {
        file: selectedFile,
        courseName: courseName,
        chapters: [] // Add chapter data here
      };
      setUploadedFiles([...uploadedFiles, newFile]);
      setSelectedFile(null);
      setCourseName('');
      setChapterDates(Array(chapterMap.length).fill(null));
    } else {
      console.log('No file selected');
    }
  };

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleChapterDateChange = (event, idx) => {
    const newChapterDates = [...chapterDates];
    newChapterDates[idx] = event.target.value;
    setChapterDates(newChapterDates);
  };


  return (
    <div className="upload_page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <div id="uploadContainer">
        <div className="upload-card" style={{ height: '300px', width: '500px' }}>
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
          <br />
          <Button className="upload_button" style={{ width: '80px' }} onClick={handleUpload}>Upload</Button>
        </div>
        {uploadedFiles.map((file, index) => (
          <div className="upload-card" key={index}>
            <h1 className="create-course-heading">Course: {file.courseName}</h1>
            <h2>Textbook: {file.file.name}</h2>
            <div class="chapters">
              <div className="chapter-list">
                <div className="chapter-header">
                  <div><h2>Chapters:</h2></div>
                  <div class="dueBy"><h2>Due by:  </h2></div>
                </div>
                <div className="chapter-header">
                  <div><h2>Chapters:</h2></div>
                  <div class="dueBy"><h2>Due by:  </h2></div>
                </div>
                {chapterMap.map((chapter, idx) => (

                  <div key={idx} className="chapter-row">
                    <div className="chapter-container">
                      <div className="chapter-name">{chapter.number}. {chapter.name}</div>
                    </div>
                    <div className="chapter-container">
                      <input
                        type="text"
                        value={chapterDates[idx]}
                        onChange={(event) => handleChapterDateChange(event, idx)}
                        className="chapter-date-input"
                        style={{ width: '100px' }}
                      />
                    </div>

                    <br />
                  </div>

                ))}
              </div>
            </div>
            <Button className="submit_button" style={{ width: '80px' }} href="/studypilot/#/coursePage">Submit</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadPage;
