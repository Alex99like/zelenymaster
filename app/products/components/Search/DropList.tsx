import Image from 'next/image'
import { IProduction } from '../../data/data'
import styles from './Search.module.scss'
import { motion } from 'framer-motion'

export const DropList = ({data}: { data: IProduction[] }) => {
  return (
    <div className={styles.droplist}>
      {data.map(item => (
        <motion.div 
          className={styles.item}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image 
            src={item.photo}
            width={40}
            height={40}
            alt=''
          />
          <span className={styles.name}>{item.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
