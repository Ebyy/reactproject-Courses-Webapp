import React from "react";
import { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

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
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
