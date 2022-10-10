import { useRouter } from 'next/router';
import { useState } from 'react';
import landingJson from '../../data/RO-landing.json';
import LandingBanner from '../../components/Landing/LandingBanner/LandingBanner';
import OfferBanner from '../../components/Landing/OfferBanner/OfferBanner';
import MainSection from '../../components/Landing/MainSection/MainSection';
import Footer from '../../components/Layout/Footer/Footer';

const Product = () => {
  const [landing, setLanding] = useState(landingJson);
  console.log(setLanding);
  const router = useRouter();
  const { selectCity } = router.query;
  const data = landing.find((item) => item.serviceZone === selectCity);

  return (
    <>
      <LandingBanner {...data} />
      <OfferBanner {...data} />
      <MainSection {...data} />
      <Footer
        background='#ededed'
        color='#000'
        title='Contact Us'
        phone='Phone:+91 7827621417'
        email='Email:support@urbancleaningexpert.co.in'
      />
    </>
  );
};

export default Product;
