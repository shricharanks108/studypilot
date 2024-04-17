import React from 'react';
import './UploadPage.css'; 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // called when upload button is clicked 
  const handleUpload = () => {
    if (selectedFile) {
      // process uploaded file here (loading in chapter breakdown or whatever)
      console.log('Uploading file:', selectedFile);
      setSelectedFile(null);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="upload_page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="upload_text">Upload your textbook PDF here</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <Button className="upload_button" onClick={handleUpload}>Upload</Button>
      <br/>
    </div>
  );
}

export default UploadPage;
