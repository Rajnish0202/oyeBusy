import EnquiryForm from '../EnquiryForm/EnquiryForm';
import styles from './MainSection.module.css';
import MainContainer from '../MainContainer/MainContainer';
import QuickLinks from '../QuickLinks/QuickLinks';

const MainSection = (props) => {
  const { cards, spare, choose, safety, brands, longDescription, carousel, faq, reviews, internalLinks } = props;
  return (
    <>
      <main className={styles.main}>
        <MainContainer
          cards={cards}
          spare={spare}
          choose={choose}
          safety={safety}
          brands={brands}
          description={longDescription}
          carousel={carousel}
          faq={faq}
          reviews={reviews}
        />
        <EnquiryForm />
        <QuickLinks internalLinks={internalLinks} />
      </main>
    </>
  );
};

export default MainSection;
