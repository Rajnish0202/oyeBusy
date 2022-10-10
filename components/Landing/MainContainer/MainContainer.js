import AmcPlane from '../AMCPlan/AmcPlane';
import styles from './MainContainer.module.css';
import ReactCardSlider from '../Slider/ReactCardSlider';
import TabButton from '../TabButton/TabButton';
import Spare from '../SpareParts/Spare';
import ChooseUs from '../ChooseUs/ChooseUs';
import Brands from '../Brands/Brands';
import Description from '../Description/Description';
import Carousel from '../Carousel/Carousel';
import Faq from '../FAQ/Faq';
import Reviews from '../Reviews/Reviews';

const MainContainer = (props) => {
  const services = props.cards.filter((card) => card.cardType === 'service');
  const amcPlane = props.cards.filter((el) => el.cardType === 'amc');
  const { spare, choose, safety, brands, description, carousel, faq, reviews } = props;

  return (
    <section className={styles.mainContainer}>
      <TabButton home={'Home'} location={'Noida'} service={'Water Purifier'} />
      <h2 className={styles.heading}>Water Purifier Service Near You</h2>
      <ReactCardSlider services={services} />
      <AmcPlane services={amcPlane} />
      <Spare spare={spare} />
      <ChooseUs choose={choose} />
      <Brands brands={brands} />
      <ChooseUs choose={safety} />
      <Description desc={description} />
      <Carousel carousel={carousel} />
      <Faq faq={faq} />
      <Reviews reviews={reviews} />
    </section>
  );
};

export default MainContainer;
