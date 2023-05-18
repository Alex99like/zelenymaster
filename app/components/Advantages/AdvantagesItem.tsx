import { SuccessIcon } from '@/app/shared/SuccessIcon/SuccessIcon'
import styles from './Advantages.module.scss'
import { motion, useInView } from 'framer-motion'
import { createRef } from 'react'

interface IAdvantagesItem {
  values: { name: string, description: string  }
}

export const AdvantagesItem = ({ values }: IAdvantagesItem) => {
  //const ref = createRef<HTMLDivElement>()
  //const isInView = useInView(ref, { once: false })


  return (
    <div className={styles.card}>
      <motion.div
        className={styles['icon-container']}
        initial={{ scale: 0, y: -20 }}
        whileInView={{ scale: 1, y: 0 }}
        //transition={{ delay: 1 }}
        //ref={ref}
      >
        <SuccessIcon className={styles.icon} width={40} />
      </motion.div>
      <h3>{values.name}</h3>
      <p>{values.description}</p>
    </div>
  )
}
