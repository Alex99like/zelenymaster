import { motion } from "framer-motion";
import { SetStateAction, Dispatch } from "react";
import styles from './Navbar.module.scss'
import cn from 'classnames'

type IToggle = {
  toggle: Dispatch<SetStateAction<boolean>>
  active: boolean
}

export const ToggleBtn = ({ toggle, active }: IToggle) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(styles.toggle, {
        [styles.active]: active
      })}
      onClick={() => toggle(prev => !prev)}
    >
      <motion.span 
        className={styles.line}
        animate={active ? {rotate: '45deg', translateY: 8 } : {rotate: 0}}
      ></motion.span>
      <motion.span 
        className={styles.line}
        animate={active ? { width: 0 } : {rotate: 0}}
      ></motion.span>
      <motion.span 
        className={styles.line}
        animate={active ? {rotate: '-45deg', translateY: -8 } : {rotate: 0}}
      ></motion.span>
    </motion.div>
  )
}
