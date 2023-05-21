import Image from 'next/image'
import { IProduction } from '../../data/data'
import styles from './List.module.scss'
export const ItemList = ({ card: { photo, name } }: { card: IProduction }) => {
  return (
    <div className={styles.card}>
      
      <Image 
        src={photo}
        width={100}
        height={100}
        alt={name}
      />
    </div>
  )
}
