import React from 'react';
import './DashboardPage.css';

const courses = [
  { id: 1, name: 'Course 1', overallProgress: 70, nextDueProgress: 30, nextDueDate: '2024-05-01' },
  { id: 2, name: 'Course 2', overallProgress: 50, nextDueProgress: 20, nextDueDate: '2024-05-05' },
  { id: 3, name: 'Course 3', overallProgress: 85, nextDueProgress: 10, nextDueDate: '2024-04-30' },
  { id: 4, name: 'Course 4', overallProgress: 40, nextDueProgress: 60, nextDueDate: '2024-05-10' },
];

const CourseCard = ({ course }) => {
  const overallWidth = '100%';
  const overallProgressWidth = course.overallProgress + '%';
  const nextDueWidth = (100 - course.overallProgress) + '%';

  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <div className="progress-bar overall-progress" style={{ width: overallWidth }}>
        <div className="progress-bar-inner" style={{ width: overallProgressWidth }}></div>
        <div className="progress-bar-inner next-due-progress" style={{ width: nextDueWidth }}></div>
      </div>
      <p>Next Due Date: {course.nextDueDate}</p>
    </div>
  );
};

const NewCourseCard = () => {
  return (
    <div className="course-card new-course-card">
      <h2>Create New Course</h2>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="course-page">
      <div className="course-list">
        <NewCourseCard />
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;