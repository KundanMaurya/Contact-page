import styles from './ContactHeader.module.css';

const ContactHeader =()=>{
  return(
          <div className={`${styles.contact_section} container`}>
            <h1>CONTACT US</h1>
            <p>Let`s connect: we are here to help and we love to hear you! Whether you have a question,comment,or just want to chat.</p>
          </div>
  );
}
export default ContactHeader;