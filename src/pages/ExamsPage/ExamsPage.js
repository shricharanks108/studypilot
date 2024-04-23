import React, { useState } from 'react';
import './ExamsPage.css';

const ExamsPage = () => {
  const [exams, setExams] = useState([
    { 
      course: "MATH 111", 
      professor: "Dr. Smith", 
      semester: "Fall 2017", 
      pdfLink: "https://math.njit.edu/sites/math/files/Math%20111%20Exam%20I%20-%20Fall%202017.pdf",
      solutionPdfLink: "https://math.njit.edu/sites/math/files/Math%20111%20Exam%20I%20Solutions%20-%20Fall%202017.pdf"
    },
    { 
      course: "PHYS 121", 
      professor: "Dr. Johnson", 
      semester: "Spring 2024", 
      pdfLink: "https://physics.njit.edu/sites/physics/files/Practice%20problems%2C%20Physics%20111%20Common%20Exam%203%2C%20Spring%202024.pdf",
      solutionPdfLink: "https://physics.njit.edu/sites/physics/files/Formula%20Chart%2C%20Physics%20111%2C%20Common%20Exam%203%20and%20%20Final%20Exam.pdf"
    },
    // Add more exam objects here
  ]);

  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const [newResource, setNewResource] = useState({
    course: "",
    professor: "",
    semester: "",
    pdfLink: "",
    solutionPdfLink: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResource(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    setExams(prevExams => [...prevExams, newResource]);
    setNewResource({
      course: "",
      professor: "",
      semester: "",
      pdfLink: "",
      solutionPdfLink: ""
    });
  }

  const toggleSubmitForm = () => {
    setShowSubmitForm(!showSubmitForm);
  }

  const searchExams = () => {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredExams = exams.filter(exam =>
      exam.course.toLowerCase().includes(searchTerm) ||
      exam.professor.toLowerCase().includes(searchTerm) ||
      exam.semester.toLowerCase().includes(searchTerm)
    );
    setExams(filteredExams);
  }

  const toggleCollapse = (index) => {
    const newExams = [...exams];
    newExams[index].collapsed = !newExams[index].collapsed;
    setExams(newExams);
  }

  const displayExams = () => {
    return exams.map((exam, index) => (
      <div key={index} className="exam-card">
        <div className="exam-header" onClick={() => toggleCollapse(index)}>
          <h3>{exam.course}</h3>
          <p><strong>Professor:</strong> {exam.professor}</p>
          <p><strong>Semester:</strong> {exam.semester}</p>
        </div>
        {!exam.collapsed && 
          <div className="exam-body">
            <a href={exam.pdfLink} target="_blank" rel="noopener noreferrer">Open Exam PDF</a>
            <a href={exam.solutionPdfLink} target="_blank" rel="noopener noreferrer">Open Solution PDF</a>
          </div>
        }
      </div>
    ));
  }

  return (
    <div>
      <div className="search-and-submit-wrapper">
        <input type="text" id="searchInput" placeholder="Search exams..." className="search-input" />
        <button onClick={searchExams} className="search-button">Search</button>
        <button className="toggle-submit-button" onClick={toggleSubmitForm}>{showSubmitForm ? "Hide Submit Form" : "Show Submit Form"}</button>
      </div>
      {showSubmitForm &&
        <div className="submit-resources">
          <input type="text" name="course" value={newResource.course} onChange={handleChange} placeholder="Course" className="resource-input" />
          <input type="text" name="professor" value={newResource.professor} onChange={handleChange} placeholder="Professor" className="resource-input" />
          <input type="text" name="semester" value={newResource.semester} onChange={handleChange} placeholder="Semester" className="resource-input" />
          <input type="text" name="pdfLink" value={newResource.pdfLink} onChange={handleChange} placeholder="Exam PDF Link" className="resource-input" />
          <input type="text" name="solutionPdfLink" value={newResource.solutionPdfLink} onChange={handleChange} placeholder="Solution PDF Link" className="resource-input" />
          <button onClick={handleSubmit} className="submit-button">Submit Resource</button>
        </div>
      }
      <input type="text" id="searchInput" placeholder="Search exams..." className="search-input" />
      <button onClick={searchExams} className="search-button">Search</button>
      <div id="examsContainer">
        {displayExams()}
      </div>
    </div>
  );
}

export default ExamsPage;
