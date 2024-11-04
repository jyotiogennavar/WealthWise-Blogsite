import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt=" Logo"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Empowering your digital journey with innovative solutions.
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}