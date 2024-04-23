import React, { useState } from 'react';
import './UploadPage.css'; 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [courseName, setCourseName] = useState('');

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
    } else {
      console.log('No file selected');
    }
  };

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };


  return (
    <div className="upload_page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <div id="uploadContainer">
        <div className="upload-card" style={{height: '300px', width: '500px'}}>
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
        </div>
        {uploadedFiles.map((file, index) => (
          <div className="upload-card" key={index}>
            <h1 className="create-course-heading">Course: {file.courseName}</h1>
            <h2>Textbook: {file.file.name}</h2>
            <div class="chapters">
              <h2>Chapters:</h2>
              <div className="chapter-list">
                  <div className="chapter-name">1. An Introduction to High-Technology Crime  </div><br/>
                  <div className="chapter-name">2. Hackers, Crackers, and Phone Phreaks  </div><br/>
                  <div className="chapter-name">3. Identity Theft: Tools and Techniques of 21st Century Bandits  </div><br/>
                  <div className="chapter-name">4. Digital Child Pornography and the Abuse of Children in Cyberspace  </div><br/>
                  <div className="chapter-name">5. Financial Fraud and Con Artistry on the Internet  </div><br/>
                  <div className="chapter-name">6. Online Harassment and Cyberstalking  </div><br/>
                  <div className="chapter-name">7. Intellectual Property Theft and Digital File Sharing  </div><br/>
                  <div className="chapter-name">8. Investigations on the Web: Examining Online Investigations and Sting Operations  </div><br/>
                  <div className="chapter-name">9. Seizure of Digital Evidence  </div><br/>
                  <div className="chapter-name">10. Executing a Search Warrant for Digital Evidence  </div><br/>
                  <div className="chapter-name">11. An Introduction to Computer Forensics </div><br/>
              </div>
            </div>
            <Button className="submit_button" style={{ width: '80px'}} href="/studypilot/#/coursePage">Submit</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadPage;
