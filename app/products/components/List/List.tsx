import { useState } from 'react'
import { IProduction } from '../../data/data'
import { ItemList } from './ItemList'
import styles from './List.module.scss'

export const List = ({ data }: { data: IProduction[] }) => {
  const [activeCard, setActiveCard] = useState<string>('')

  return (
    <section className={styles.wrapper}>
      {data.map(card => (
        <ItemList 
          key={card.name} 
          card={card} 
          active={activeCard === card.name}
          setActive={() => setActiveCard(card.name)}
        />
      ))}
    </section>
  )
}
