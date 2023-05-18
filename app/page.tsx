'use client'

import styles from './page.module.scss'
import { motion, useMotionValueEvent, useScroll, useTransform, useViewportScroll } from 'framer-motion'
import { DataStore } from './components/DataStore/DataStore'
import { ReviewsData } from './components/ReviesData/ReviewsData'
import { createRef, useEffect, useRef, useState } from 'react'
import { Advantages } from './components/Advantages/Advantages'

export default function Home() {
  
  
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.gradient} />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, type: 'spring' }}
          className={styles.title}
        >
          КФХ <span>«Зелёный мастер»</span>
        </motion.h1>
        <motion.div>
          <DataStore />
          <ReviewsData />
        </motion.div>
        <motion.div
          className={styles['wrapper-btn']}
        >
          <motion.button
            className={styles.button}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .9, type: 'spring' }}
          >
            ПРОДУКЦИЯ
          </motion.button>
          <motion.button
            className={styles.button}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .9, type: 'spring' }}
          >
            ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ
          </motion.button>
        </motion.div>
      </section>
      <Advantages />
    </main>
  )
}
