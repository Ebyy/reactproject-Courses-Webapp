import React from "react";
import { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(returnedData => setCourses(returnedData));
  }, []);

  /* row can be extracted and called (with  this.renderRow) in the map
  renderRow(course) {
    return (
      <tr>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }
*/

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
