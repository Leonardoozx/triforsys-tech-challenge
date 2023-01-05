import { useEffect, useState } from 'react';
import { commentsData } from '../../api/commentsData';

import styles from './userComments.module.css';

export default function UserCommnets() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComents = () => {
      const allComments = commentsData();
      setComments(allComments);
    };
    getAllComents();
  }, []);

  return (
    <>
      <h4>COMENTÁRIOS DE USUÁRIOS</h4>

      <section className={styles.user_comments}>
        {comments?.map(({ content, name }, index) => (
          <section key={index}>
            <div>
              <p className={styles.content}>{content}</p>
              <p className={styles.name}>{name}</p>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}
