import styles from './CityForm.module.css';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const CityForm = (props) => {
  const ref = useRef('');
  const router = useRouter();

  const cityHandler = (e) => {
    ref = e.currentTarget.value;
    router.push(ref);
  };

  const options = props.selectCity.map((city) => {
    return (
      <option value={city.landingUrl} key={city.landingUrl}>
        {city.dropdownItem}
      </option>
    );
  });
  return (
    <div className={styles.form}>
      <p className='subheading'>Where do you need a service?</p>
      <select name='city' id='city' onChange={cityHandler}>
        <option value=''>Select your city</option>
        {options}
      </select>
    </div>
  );
};

export default CityForm;
