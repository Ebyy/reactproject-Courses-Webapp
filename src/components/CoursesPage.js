import React from "react";
import { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
//import { getAuthors } from "../api/authorApi";
import {
  loadCourses,
  loadAuthors,
  deleteCourse
} from "../actions/courseActions";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(courseStore.getAuthors());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    if (courseStore.getAuthors().length === 0) loadAuthors();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
    setAuthors(courseStore.getAuthors());
  }
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
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList
        courses={courses}
        authors={authors}
        deleteCourse={deleteCourse}
      />
    </>
  );
}

export default CoursesPage;
