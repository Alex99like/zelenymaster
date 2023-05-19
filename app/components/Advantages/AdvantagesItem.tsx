import { SuccessIcon } from '@/app/shared/SuccessIcon/SuccessIcon'
import styles from './Advantages.module.scss'
import { motion, useInView } from 'framer-motion'
import { createRef } from 'react'

interface IAdvantagesItem {
  values: { name: string, description: string  },
  last?: boolean
}

export const AdvantagesItem = ({ values, last }: IAdvantagesItem) => {
  //const ref = createRef<HTMLDivElement>()
  //const isInView = useInView(ref, { once: false })


  return (
    <motion.div 
      className={styles.card}
    >
      <motion.div 
        className={styles.line} 
        initial={{ height: 0 }}
        whileInView={{ height: !last ? '100%' : 0 }}
        transition={{ once: true, duration: 1 }}
       />
      <motion.div
        className={styles['icon-container']}
        initial={{ scale: 0, y: -20 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ amount: 1, once: true }}
        //transition={{ delay: 1 }}
        //ref={ref}
      >
        <SuccessIcon className={styles.icon} width={40} />
      </motion.div>
      <motion.h3
        className={styles.name}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 1, once: true }}
        transition={{ delay: 0.3 }}
      >{values.name}</motion.h3>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ delay: 0.5, type: 'spring' }}
        className={styles.description}
      >{values.description}</motion.p>
    </motion.div>
  )
}
