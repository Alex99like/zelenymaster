import CountUp from 'react-countup';
import styles from './DataStore.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { createRef, useEffect, useState } from 'react';

export const DataStore = () => {

  return (
    <motion.div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .6, type: 'spring' }}
        className={styles.wrapper}
      > 
        <span>МЫ НА РЫНКЕ БОЛЕЕ</span>
        <CountUp className={styles.count} start={0} delay={.6} end={20} duration={3} />
        <span>ЛЕТ</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8, type: 'spring' }}
        className={cn(styles.wrapper, styles.two)}
      > 
        <span>У НАС БОЛЕЕ</span>
        <CountUp className={cn(styles.count, styles.middle)} start={0} delay={.6} end={80000} duration={5} />
        <span>ДОВОЛЬНЫХ КЛИЕНТОВ</span>
      </motion.div>
    </motion.div>
  );

}
