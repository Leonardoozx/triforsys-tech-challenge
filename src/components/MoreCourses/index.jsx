import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { moreCoursesData } from '../../api/moreCoursesData.js';

import styles from './moreCourses.module.css';

export default function MoreCourses({ isMobile }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = () => {
      const allCourses = moreCoursesData();
      const courses = isMobile ? allCourses.splice(1, 2) : allCourses;
      setCourses(courses);
    };
    getAllCourses();
  }, [isMobile]);

  return (
    <>
      <h3 className={styles.more_courses_title}>MÁS CURSOS</h3>
      <section className={styles.more_courses_container}>
        {courses?.map((course, index) => (
          <div className={styles.more_courses} key={index}>
            <img src={course.courseThumb} alt={course.whatTeaches} />
            <p className={styles.teacher}>{course.teacher.toUpperCase()}</p>
            <div className={styles.what_teaches}>
              <p className="c-grey">ENSEÑA</p>
              <p> {course.whatTeaches.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

MoreCourses.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
