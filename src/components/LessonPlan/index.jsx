import { useEffect, useState } from 'react';

import styles from './lessonPlan.module.css';

import { lessonPlansData } from '../../api/lessonPlansData';

export default function LessonPlan() {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [maxItems, setMaxItems] = useState(5);

  const handleSeeMoreBtn = () => setMaxItems(Number.MAX_VALUE);

  useEffect(() => {
    const getAllLessonPlans = () => {
      const allLessonPlans = lessonPlansData();
      setLessonPlans(allLessonPlans.slice(0, maxItems));
    };
    getAllLessonPlans();
  }, [maxItems]);
  return (
    <>
      <h2 className={styles.lesson_plan_title}>LESSON PLAN</h2>
      <section className={styles.lesson_plan_section}>
        {lessonPlans.map(({ planNumber, planTitle, planContent }) => (
          <article key={planNumber}>
            <div className={styles.list_item}>
              <p className={styles.list_item_number}>{planNumber}</p>
              <div>
                <h3 className={styles.list_item_title}>{planTitle}</h3>
                <p className={styles.list_item_content}>{planContent}</p>
              </div>
            </div>
            <hr />
          </article>
        ))}
        {maxItems < 6 && (
          <button onClick={handleSeeMoreBtn} className="btn" type="button">
            VER TODOS
          </button>
        )}
      </section>
    </>
  );
}
