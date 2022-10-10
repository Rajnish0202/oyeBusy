import EnquiryForm from '../EnquiryForm/EnquiryForm';
import styles from './MainSection.module.css';
import MainContainer from '../MainContainer/MainContainer';
import QuickLinks from '../QuickLinks/QuickLinks';

const MainSection = (props) => {
  const { cards, spareParts, banner1, banner2, brands, longDescription, carousel, faq, reviews, internalLinks } = props;
  return (
    <>
      <main className={styles.main}>
        <MainContainer
          cards={cards}
          spare={spareParts}
          choose={banner1}
          safety={banner2}
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
