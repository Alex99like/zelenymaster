import Link from 'next/link'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

const links = [
  { name: 'Главня', route: '/' },
  { name: 'Продукция', route: '/products' },
  { name: 'Отзывы', route: '/reviews' },
]

type IMenuItems = {
  toggle: Dispatch<SetStateAction<boolean>>
  active: boolean
}

export const MenuItems = ({ active, toggle }: IMenuItems) => {
  const param = usePathname()

  return (
    <ul className={styles.menu}>
      {links.map((link, idx) => (
        <motion.button 
          key={link.route}
          onClick={() => toggle(false)}
          className={cn(styles.btn)}
          initial={{ opacity: 0, y: 20 }}
          animate={!active ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ delay: active ? (0.3 + idx / 10): 0 }}
        >
          <Link className={cn(styles.link, { [styles.active]: link.route === param })} href={link.route}>{link.name}</Link>
        </motion.button>
      ))}
    </ul>
  )
}
