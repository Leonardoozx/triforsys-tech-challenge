import PropTypes from 'prop-types';

import styles from '../../app.module.css';
import mobileStyles from './mobile.module.css';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import ExclusiveContent from '../../components/ExclusiveContent';
import Highlights from '../../components/Highlights';
import RelatedArticles from '../../components/RelatedArticles';
import MoreCourses from '../../components/MoreCourses';
import Classification from '../../components/Classification';
import UserComments from '../../components/UserComments';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import NatacionResumeInfo from '../../components/NatacionResumeInfo';

export default function Mobile({ isMobile }) {
  return (
    <>
      <Header isMobile={isMobile} />
      <article className={styles.main_img_container}>
        <img
          src='https://imgur.com/S55Ipc2.png'
          alt="woman swimming"
        />
      </article>

      <NatacionResumeInfo isMobile={isMobile} />

      <section className={mobileStyles.mobile_section}>
        <h3>ENTRENAR PARA EL ÉXITO</h3>
        <p className="c-grey">
          Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus
          venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et
          euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam.
          Suspendisse potenti. Nunc faucibus vulputate neque, sit amet pulvinar
          mi. Ut lacus neque, imperdiet vitae viverra id, vestibulum.
        </p>
      </section>

      <Slider />

      <ExclusiveContent isMobile={isMobile} />

      <Highlights isMobile={isMobile} />

      <Classification />

      <Form />

      <UserComments />

      <MoreCourses isMobile={isMobile} />

      <RelatedArticles />

      <Footer isMobile={isMobile} />
    </>
  );
}

Mobile.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
