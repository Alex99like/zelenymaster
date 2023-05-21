import { motion } from 'framer-motion'
import styles from './MainSelect.module.scss'
import { useState } from 'react'
import cn from 'classnames'

const data = [
  'ВСЕ ТОВАРЫ', 'ДЕКОРАТИВНЫЕ', 'ПЛОДОВО-ЯГОДНЫЕ'
]

const calcTop = (val: number) => {
  if (val === 1) return 0
  if (val === 2) return val * 22.5
  else return val * 22.5 + 22.5
} 

export const MainSelect = () => {
  const [activeEl, setActiveEl] = useState(1)

  return (
    <div className={styles.wrapper}>
      {data.map((item, idx) => (
        <span 
          className={styles.item}
          onClick={() => setActiveEl(idx + 1)}
        ><strong className={cn({ [styles['active-strong']]: idx + 1 === activeEl })}>{item}</strong></span>
      ))}
      <motion.span
        animate={{
          top: calcTop(activeEl)
        }}
        className={styles.active}
      />
    </div>
  )
}
