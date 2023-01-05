import { useEffect, useState } from 'react';

import { moreCoursesData } from '../../api/moreCoursesData.js';

import styles from './moreCourses.module.css';

export default function MoreCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = () => {
      const allCourses = moreCoursesData();
      setCourses(allCourses);
    };
    getAllCourses();
  }, []);

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
