import Image from 'next/image'
import { IProduction } from '../../data/data'
import styles from './List.module.scss'
import TreeImg from '../../../assets/icons/tree.svg'
import TemperatureImg from '../../../assets/icons/temperature.svg'
import LightImg from '../../../assets/icons/light.svg'
import { CardHr } from './CardHr'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/app/shared/Button/Button'

interface IItemList {
  card: IProduction,
  active: boolean
  setActive: () => void
}

export const ItemList = ({ card: { photo, name, view, height, width, hardiness, light }, active, setActive }: IItemList) => {

  return (
    <div className={styles.card}>
      <Image 
        src={photo}
        width={300}
        height={300}
        alt={name}
        className={styles.image}
      />
      <div className={styles['title-container']}>
        <h3 className={styles.title}>{view}</h3>
        <CardHr className={styles['hr-bg']} />
      </div>
      
      <motion.div 
        className={styles.content}
        animate={!active ? { height: 55 }: { height: 240 }}
      >
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.size}>
          <Image 
            src={TreeImg}
            width={100}
            height={100}
            alt=''
          />
          <span className={styles.height}>{height} м.</span>
          <span className={styles.width}>{width} м.</span>
        </div>
        <div className={styles.light}>
          <Image 
            src={LightImg}
            width={30}
            height={30}
            alt=''
          />
          <span>{light}</span>
        </div>
        <div className={styles.hardiness}>
          <Image 
            src={TemperatureImg}
            width={30}
            height={30}
            alt=''
          />
          <span>Зимостойкость -{hardiness}</span>
        </div>
      </motion.div>
      <div className={styles['container-btn']}>
        <Button onClick={setActive}>ПОДРОБНЕЕ</Button>
      </div>
    </div>
  )
}
