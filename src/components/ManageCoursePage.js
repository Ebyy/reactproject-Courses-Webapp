import React, { useState, useEffect } from "react";
//import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import { saveCourse } from "../api/courseApi";
import { getCourseBySlug } from "../api/courseApi";
import { toast } from "react-toastify";
const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug; //gets slug from path `/course/:slug`
    if (slug) {
      getCourseBySlug(slug).then(returnedCourse => {
        setCourse(returnedCourse);
      });
    }
  }, [props.match.params.slug]);

  //copy course object and set the value passed in to the value of name attribute
  function handleChange({ target }) {
    /** destructuring this to be simpler
     *     const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
     */
    setCourse({ ...course, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required!";
    if (!course.authorId) _errors.authorId = "AuthorId is required!";
    if (!course.category) _errors.category = "Category is required!";

    setErrors(_errors);
    //Valid form if object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveCourse(course).then(() => {
      //redirect user to courses to see saved course
      props.history.push("/courses");
      toast.success("Course was successfully added to Courses.");
    });
  }
  return (
    <>
      <h2>Manage Course</h2>
      {/*<Prompt when={true} message="Do you really want to leave?" />
      {props.match.params.slug}*/}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
