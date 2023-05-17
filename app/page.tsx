'use client'

import Image from 'next/image'
import BgImageForest from './assets/images/bg-forest.jpg'
import styles from './page.module.scss'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { DataStore } from './components/DataStore/DataStore'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, type: 'spring' }}
          className={styles.title}
        >
          КФХ <span>«Зелёный мастер»</span>
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.description}
        >
          Мы предлагаем вам растения, качество которых полностью 
          соответствует требованиям семенной и карантинной государственных инспекци
        </motion.p> */}
        <motion.div>
          <DataStore />
        </motion.div>
        <motion.div
          className={styles['wrapper-btn']}
        >
          <motion.button
            className={styles.button}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .9, type: 'spring' }}
          >
            ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ
          </motion.button>
          <motion.button
            className={styles.button}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .9, type: 'spring' }}
          >
            ПРОДУКЦИЯ
          </motion.button>
        </motion.div>
      </section>
      <section className={styles.advantages}>
        <h2>О НАС </h2>
      </section>
    </main>
  )
}
