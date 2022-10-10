import styles from './EnquiryForm.module.css';

const EnquiryForm = () => {
  return (
    <div className={styles.enquiry}>
      <form>
        <select name='types' id='types' className={styles.input}>
          <option value=''>Select Water Purifier - Options</option>
          <option value=''>Kent</option>
          <option value=''>Aquaguard</option>
          <option value=''>Eureka</option>
          <option value=''>LG</option>
          <option value=''>Livpure</option>
        </select>
        <div>
          <input type='text' placeholder='Enter Name' className={styles.input} />
          <input type='tel' placeholder='Phone Number' className={styles.input} />
        </div>
        <input type='text' placeholder='Pincode or Address' className={styles.input} />
        <div>
          <input type='submit' value='Submit' className={styles.submit} />
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
