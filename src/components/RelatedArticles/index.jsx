import { useState, useEffect } from 'react';
../../hooks/useGenericState
import { relatedArticlesData } from '../../api/relatedArticlesData';

import styles from '../styles/relatedArticles.module.css';

export default function RelatedArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getAllArticles = () => {
      const allArticles = relatedArticlesData();
      setArticles(allArticles);
    };
    getAllArticles();
  }, []);

  return (
    <>
      <h3 className={styles.related_articles_title}>ARTÍCULOS RELACIONADOS</h3>
      <section className={styles.articles_section}>
        {articles.map(({ title, date }, index) => (
          <article key={index}>
            <h4>{title.toUpperCase()}</h4>
            <p className="c-grey">{date}</p>
            {!(articles.length - 1 === index) && <hr />}
          </article>
        ))}
        <button
          className="btn btn-bg-black"
          type="button"
          onClick={() => alert('GOING TO BLOG')}
        >
          LEER MÁS EN NUESTRO BLOG
        </button>
      </section>
    </>
  );
}
