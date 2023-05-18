'use client'

import Image from 'next/image'
import BgImageForest from './assets/images/bg-forest.jpg'
import styles from './page.module.scss'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { DataStore } from './components/DataStore/DataStore'
import { ReviewsData } from './components/ReviesData/ReviewsData'
import { ArrowIcon } from './shared/ArrowIcon/ArrowIcon'

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
            ПРОДУКЦИЯ <ArrowIcon direction='right' color='#f9f9f9' />
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
      <section className={styles.advantages}>
        <h2>О НАС </h2>
      </section>
    </main>
  )
}
