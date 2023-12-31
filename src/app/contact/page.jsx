// import React from 'react'
// import styles from './page.module.css'
// const Contact = () => {
//   return (
//     <div className={styles.contact}>Contact</div>
//   )
// }

// export default Contact

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@@/components/Button/Button";

export const metadata = {
  title: "Contact Information",
  description: "This is Contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="email" placeholder="email" className={styles.input}/>
          <textarea className={styles.textArea} placeholder="message" cols="30" rows="10"></textarea>
          <Button url="#" text="send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
