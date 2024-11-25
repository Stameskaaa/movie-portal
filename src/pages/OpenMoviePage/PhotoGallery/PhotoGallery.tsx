import React, { useEffect, useState } from 'react';
import styles from './PhotoGallery.module.scss';
import { ImageUrls } from '../../../types/apiTypes';
import { SpinnerLoader } from '../../../components/SpinnerLoader/SpinnerLoader';
import { HiMiniXMark } from 'react-icons/hi2';
import { GrNext, GrPrevious } from 'react-icons/gr';
type PhotoGalleryProps = {
  photos: ImageUrls[];
  loading: boolean;
};

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, loading }) => {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    if (photoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [photoIndex]);

  if (loading) {
    return <SpinnerLoader />;
  }

  if (photos.length < 2) {
    return null;
  }

  function handleModal(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    if (
      target.classList.contains(styles.modal_container) ||
      target.classList.contains(styles.close)
    ) {
      setPhotoIndex(null);
    }

    if (target.id === 'prev' && photoIndex !== null && photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }

    if (target.id === 'next' && photoIndex !== null && photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>
          Photo Gallery {photos.length < 4 ? photos.length : 3} / {photos.length}
        </h4>
        <div className={styles.photo_gallery}>
          {photos.slice(0, 3).map((photo, index) => (
            <div onClick={() => setPhotoIndex(index)} key={index} className={styles.photo_item}>
              <img src={photo.imageUrl} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
        {photoIndex !== null && (
          <div onClick={handleModal} className={styles.modal_container}>
            <div className={styles.modal_content}>
              <div
                id="prev"
                className={`${styles.switch_buttons} ${photoIndex === 0 ? styles.disabled : null}`}>
                <GrPrevious style={{ pointerEvents: 'none' }} size={45} />
              </div>

              {<img src={photos[photoIndex].imageUrl} alt={`Photo ${photoIndex + 1}`} />}

              <div
                id="next"
                className={`${styles.switch_buttons} ${
                  photoIndex === photos.length - 1 ? styles.disabled : null
                }`}>
                <GrNext style={{ pointerEvents: 'none' }} size={45} />
              </div>
            </div>
            <div className={styles.close}>
              <HiMiniXMark style={{ pointerEvents: 'none' }} size={45} />
            </div>

            <div className={styles.page_info}>
              Photo {photoIndex + 1} / {photos.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
