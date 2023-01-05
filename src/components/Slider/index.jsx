import { useEffect, useState } from 'react';

import { sliderData } from '../../api/sliderData';

import styles from './slider.module.css';

export default function Slider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      const allImages = await sliderData();
      setImages(allImages);
    };
    getAllImages();
  }, []);

  return (
    <section className={styles.slider}>
      {images &&
        images.map(({ order, image }) => (
          <section key={order}>
            <div>
              <img src={image} alt="people in the pool" />
            </div>
          </section>
        ))}
    </section>
  );
}
