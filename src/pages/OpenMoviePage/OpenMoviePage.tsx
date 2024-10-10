import { useParams } from 'react-router-dom';
import { useGetBaseInfoQuery } from '../../services/movieApi/movieApi';
import { MovieLoader } from '../../components/MovieLoader/MovieLoader';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { MovieFullCard } from './MovieFullCard/MovieFullCard';
import { useEffect } from 'react';

const OpenMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBaseInfoQuery({ id });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (error) return <div>error</div>;
  if (isLoading) return <MovieLoader />;

  return (
    <>{data ? <MovieFullCard data={data} id={id} /> : <ErrorComponent text="Film didnt found" />}</>
  );
};

export default OpenMoviePage;
