'use client'

import Image from 'next/image'
import { IReviews } from '../../data'
import styles from './CardReview.module.scss'
import AvatarDefault from '../../../assets/icons/avatar-default.svg'
import { RatingReview } from '../RatingReview/RatingReview'
import { motion } from 'framer-motion'

export const CardReview = ({ review: { author, rating, text, date } }: { review: IReviews }) => {
  
  return (
    <motion.div 
      className={styles.wrapper}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5 }}
    >
      <div className={styles.name}>
        <Image src={AvatarDefault} width={30} height={30} alt='avatar' className={styles.img} />
        <h2>{author}</h2>
        {date && <span className={styles.date}>{date}</span>}
      </div>
      
      <hr className={styles['hr-one']} />
      <p className={styles.description}>{text}</p>
      <RatingReview rating={rating} />
    </motion.div>
  )
}
