import styles from '../../app.module.css';

import Header from '../../components/Header';
import NatacionResumeInfo from '../../components/NatacionResumeInfo';
import Slider from '../../components/Slider';
import Form from '../../components/Form';
import UserComments from '../../components/UserComments';
import MoreCourses from '../../components/MoreCourses';
import RelatedArticles from '../../components/RelatedArticles';
import Footer from '../../components/Footer';
import Classification from '../../components/Classification';
import Highlights from '../../components/Highlights';
import ExclusiveContent from '../../components/ExclusiveContent';
import LessonPlan from '../../components/LessonPlan';
import StudentsComments from '../../components/StudentsComments';

export default function Computer({ isMobile }) {
  return (
    <>
      <Header isMobile={isMobile} />
      <article className={styles.main_img_container}>
        <img src="https://imgur.com/c849jat.png" alt="woman swimming" />
      </article>

      <NatacionResumeInfo isMobile={isMobile} />

      <Slider />

      <ExclusiveContent isMobile={isMobile} />

      <LessonPlan />

      <Highlights isMobile={isMobile} />

      <Classification />

      <MoreCourses isMobile={isMobile} />

      <Form />

      <StudentsComments />

      <RelatedArticles />

      <UserComments />

      <article className={styles.footer_img_container}>
        <img src="https://imgur.com/jYXOoX2.png" alt="studio" />
        <p className={styles.footer_first_p}>APRENDE CON LOS MEJORES</p>
        <p className={styles.footer_second_p}>
          DETRÁS DE CADA ÉXITO, HAY UNA HISTÓRIA.
        </p>
        <p className={styles.footer_third_p}>CONOCE EN NUESTRO BLOG</p>
        <button
          className="btn btn-bg-black"
          onClick={() => alert('GOING TO BLOG')}
          type="button"
        >
          LER MÁS EN NUESTRO BLOG
        </button>
      </article>

      <Footer isMobile={isMobile} />
    </>
  );
}
