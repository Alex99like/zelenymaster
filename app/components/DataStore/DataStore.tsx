import CountUp from 'react-countup';
import styles from './DataStore.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { createRef, useEffect, useState } from 'react';
import { StarIcon } from '@/app/shared/StarIcon/StarIcon';
import { RatingData } from './RatingData';

export const DataStore = () => {

  return (
    <motion.div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .6, type: 'spring' }}
        className={styles.wrapper}
      >
        <div>
          <CountUp className={styles.count} start={0} delay={.6} end={9} duration={3} />
          <span className={styles.year}>ЛЕТ</span>
        </div>
        <span className={styles.name}>НА РЫНКЕ</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8, type: 'spring' }}
        className={cn(styles.wrapper, styles.two)}
      > 
        <CountUp className={cn(styles.count, styles.middle)} start={0} delay={.6} end={30000} duration={5} />
        <span className={styles.name}>ДОВОЛЬНЫХ КЛИЕНТОВ</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring' }}
        className={cn(styles.wrapper, styles.two)}
      > 
        <div className={styles.rating}>
          <div>
            <CountUp className={cn(styles.count, styles.middle)} start={0.0} delay={.6} decimals={2} end={4.99} duration={5} />
            <span className={styles.max}>/5</span>
          </div>
          
          <RatingData />
        </div>
        <span className={styles.name}>СРЕДНЯЯ ОЦЕНКА</span>
      </motion.div>
    </motion.div>
  );

}
