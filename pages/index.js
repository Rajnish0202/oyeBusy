import selectCity from '../data/selectCity.json';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import Banner from '../components/Home/Banner/Banner';
import AboutUrban from '../components/Home/AboutUrban/AboutUrban';
import Location from '../components/Home/Location/Location';
import Footer from '../components/Layout/Footer/Footer';
import { useState } from 'react';

const Home = () => {
  const [city, setCity] = useState(selectCity);
  return (
    <>
      <HeroSection city={city} />
      <Banner city={city} />
      <AboutUrban city={city} />
      <Location />
      <Footer background='#000' color='#FFFFFF' />
    </>
  );
};

export default Home;
