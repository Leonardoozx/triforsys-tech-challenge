import { useEffect, useState } from 'react';

import { sliderData } from '../../api/sliderData';

import styles from './slider.module.css';

export default function Slider() {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getAllImages = async () => {
      const allImages = await sliderData();
      setImages(allImages);
    };
    getAllImages();
  }, [imageIndex]);

  return (
    <section className={styles.slider}>
      {images.length && (
        <div className={styles.main_img}>
          <img src={images[imageIndex].image} alt="natación" />
        </div>
      )}
      <div className={styles.article_container}>
        <article className={styles.exito}>
          <h1>ENTRENAR PARA EL ÉXITO</h1>
          <p>
            Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus
            venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et
            euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam.
            Suspendisse potenti. Nunc faucibus vulputate neque.
          </p>
        </article>

        <article className={styles.images_container}>
          {images &&
            images.map(({ order, image }, index) => (
              <section key={order}>
                <div>
                  <img
                    onClick={() => setImageIndex(index)}
                    src={image}
                    alt="people in the pool"
                  />
                </div>
              </section>
            ))}
        </article>
      </div>
    </section>
  );
}
