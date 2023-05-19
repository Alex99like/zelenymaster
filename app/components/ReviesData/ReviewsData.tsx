import Image from 'next/image'
import OneAvatar from '../../data/avatars/1.jpg'
import TwoAvatar from '../../data/avatars/2.jpg'
import ThreeAvatar from '../../data/avatars/3.jpg'
import FourAvatar from '../../data/avatars/4.jpg'
import FiveAvatar from '../../data/avatars/5.jpg'
import { motion } from 'framer-motion'
import styles from './ReviewsData.module.scss'
import { SuccessIcon } from '@/app/shared/SuccessIcon/SuccessIcon'
import Link from 'next/link'

const avatars = [OneAvatar, TwoAvatar, ThreeAvatar, FourAvatar, FiveAvatar]

export const ReviewsData = () => {
  return (
    <div className={styles.wrapper}>
      <motion.h2 className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >ИНДИВИДУАЛЬНЫЙ ПОДХОД <SuccessIcon className={styles.success} /></motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className={styles.description}>Мы стремимся сделать работу не только плодотворной, <br/> но и максимально удобной для Вас.</motion.p>
      <div className={styles['container-img']}>
        {avatars.map((photo, idx) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0 }}
            animate={{ x: -idx * 15 , opacity: 1 }}
            transition={{ delay: idx / 10 + 1 }}
          >
            <Image
              className={styles.img}
              src={photo}
              width={100}
              height={100}
              alt={'avatar'}
            />
          </motion.div>
        ))}
        <motion.span className={styles.count}
          initial={{ opacity: 0 }}
          animate={{ x: -60, y: 5, opacity: 1 }}
          transition={{ delay: 1.7 }}
        >4000+</motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: -40, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Link className={styles.link} href={'/reviews'}>ОТЗЫВЫ</Link>
        </motion.div> 
      </div>
    </div>
  )
}
