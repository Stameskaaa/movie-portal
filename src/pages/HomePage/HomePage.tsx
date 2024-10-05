import styles from './HomePage.module.scss';
import { MainCard } from '../../components/MainCard/MainCard';
import { useEffect, useState } from 'react';
import { SmallSliderCard } from '../../components/SmallSliderCard/SmallSliderCard';
import { EmblaCarousel } from '../../components/EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
const arr = [<MainCard />, <MainCard />, <MainCard />, <MainCard />];
const apikey = process.env.REACT_APP_API_KEY2;
const arr2 = [
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
  <SmallSliderCard />,
];

const OPTIONS: EmblaOptionsType = {};

const OPTIONS2: EmblaOptionsType = { dragFree: true };

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fecthasync2();
    //  /films?genres=1&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1
  }, []);

  const fecthasync = async () => {
    try {
      const data = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
        method: 'GET',
        headers: {
          'X-API-KEY': `${apikey}`,
          'Content-Type': 'application/json',
        },
      });

      const response = await data.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthasync2 = async () => {
    try {
      const data = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=3', {
        method: 'GET',
        headers: {
          'X-API-KEY': `${apikey}`,
          'Content-Type': 'application/json',
        },
      });

      const response = await data.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.home_container}>
      <h1>Watch movies now</h1>
      <EmblaCarousel slides={arr} options={OPTIONS} />
      <h1>Trending now</h1>
      <EmblaCarousel moreCards={true} slides={arr2} options={OPTIONS2} />
      <h1>Best actors</h1>
      <EmblaCarousel moreCards={true} slides={arr2} options={OPTIONS2} />
    </section>
  );
};
