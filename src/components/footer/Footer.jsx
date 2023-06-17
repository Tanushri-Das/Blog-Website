
import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {

  return (
    <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className={styles.imgContainer}>
          <Image src='/1.png' width={25} className={styles.icon} height={25} alt=''/>
          <Image src='/2.png' className={styles.icon} width={25} height={25} alt=''/>
          <Image src='/3.png' className={styles.icon} width={25} height={25} alt=''/>
          <Image src='/4.png' className={styles.icon} width={25} height={25} alt=''/>
        </div>
    </div>
  )
}

export default Footer