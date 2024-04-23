import React, { useState } from 'react';
import './DashboardPage.css';
import { Link } from 'react-router-dom';


const courses = [
  { id: 1, name: 'IT 332', overallProgress: 70, nextDueProgress: 30, nextDueDate: '2024-05-01' },
  { id: 2, name: 'CS 332', overallProgress: 50, nextDueProgress: 20, nextDueDate: '2024-05-05' },
  { id: 3, name: 'CS 280', overallProgress: 85, nextDueProgress: 10, nextDueDate: '2024-04-30' },
  { id: 4, name: 'CS 288', overallProgress: 40, nextDueProgress: 60, nextDueDate: '2024-05-10' },
];

const CourseCard = ({ course }) => {
  const overallWidth = '100%';
  const overallProgressWidth = course.overallProgress + '%';
  const nextDueWidth = (100 - course.overallProgress) + '%';

  return (
    <div className="course-card">
      <Link className="beeng" to='/coursePage'><h2 className='course-card-title'>{course.name}</h2>
        <div className="progress-bar overall-progress" style={{ width: overallWidth }}>
          <div className="progress-bar-inner" style={{ width: overallProgressWidth }}></div>
          <div className="progress-bar-inner next-due-progress" style={{ width: nextDueWidth }}></div>
        </div>
        <p className='course-card-title'>Next Due Date: {course.nextDueDate}</p>
      </Link>
    </div>
  );
};

const NewCourseCard = () => {

  return (
    <a href="#/upload">
      <div className="course-card new-course-card">
        <h2 className='new-course-text'>Create New Course</h2>
      </div>
    </a>
  );
};

const DashboardPage = () => {
  const [coursesData, setCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="course-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <i className="fa fa-search search-icon"></i>
      </div>
      <NewCourseCard />

      <div className="course-list">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;