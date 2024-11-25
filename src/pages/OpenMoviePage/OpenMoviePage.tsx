import { useParams } from 'react-router-dom';
import {
  useGetBaseInfoQuery,
  useGetSimilarsByIdQuery,
  useGetMovieImgByIdQuery,
} from '../../services/movieApi/movieApi';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { MovieFullCard } from './MovieFullCard/MovieFullCard';
import { useEffect } from 'react';
import { SimilarFilm, ImageUrls } from '../../types/apiTypes';
import { PhotoGallery } from './PhotoGallery/PhotoGallery';
import { SwiperSection } from './SwiperSection/SwiperSection';

const OpenMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBaseInfoQuery({ id });
  const { data: similarsData, isLoading: similarsloading } = useGetSimilarsByIdQuery({ id });

  const { data: fanArtData, isLoading: fanArtloading } = useGetMovieImgByIdQuery({
    id,
    type: 'FAN_ART',
  });

  const { data: stillData, isLoading: stillLoading } = useGetMovieImgByIdQuery({
    id,
    type: 'STILL',
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  if (error) return <ErrorComponent text="Some Error Occured" />;
  if (isLoading) return <MovieLoader />;

  return (
    <>
      {data ? (
        <div>
          <MovieFullCard data={data} id={id} />

          <PhotoGallery photos={stillData?.items} loading={stillLoading} />

          <SwiperSection
            loading={similarsloading}
            title="Similars films"
            options={{ dragFree: true }}
            films={
              similarsData &&
              similarsData?.items.map((item: SimilarFilm) => ({
                id: item.filmId,
                url: item.posterUrl,
                title: item?.nameRu || item?.nameOriginal,
              }))
            }
          />

          <SwiperSection
            loading={fanArtloading}
            title="Fan Arts"
            options={{ dragFree: true }}
            films={fanArtData?.items.map((item: ImageUrls) => ({
              url: item.imageUrl,
            }))}
          />
        </div>
      ) : (
        <ErrorComponent text="Film didnt found" />
      )}
    </>
  );
};

export default OpenMoviePage;
