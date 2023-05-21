import { IProduction } from '../../data/data'
import { ItemList } from './ItemList'
import styles from './List.module.scss'

export const List = ({ data }: { data: IProduction[] }) => {
  return (
    <section className={styles.wrapper}>
      {data.map(card => (
        <ItemList card={card} />
      ))}
    </section>
  )
}
