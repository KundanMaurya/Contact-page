import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import { useState } from 'react';


const ContactForm = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [text,setText]=useState("");

  const onSubmit =(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
      }


  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button  icon={<MdMessage fontSize="24px"/>} text="VIA SUPPORT CHAT" />
        <Button icon={<FaPhoneAlt fontSize="24px"/>} text="VIA CALL" />
        </div>
        <Button
         isOutLine="true"
        icon={<HiMail fontSize="24px"/>}
         text="VIA EMAIL FROM"
          />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Kundan maurya' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='example@gmail.com' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" placeholder='Write here...' rows="10" />
          </div> 
          <div style={{ display:"flex",justifyContent:"end"
          }}>
            <Button text="SUBMIT"/>
          </div> 
          <div>
            <h4>what you enter above:-</h4>
            <h5>{`Name: ${name}`}</h5>
            <h5>{`Email: ${email}`}</h5>
            <h5>{`Text: ${text}`}`</h5>
            
            </div>  
        </form>
        
      </div>
      <div className={styles.contact_image}>
          <img src="images/contact.svg" alt="contact_image" />
      </div>
     
      </section>
     
  )
}

export default ContactForm;