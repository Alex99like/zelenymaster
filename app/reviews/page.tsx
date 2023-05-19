import { CardReview } from './components/CardReview/CardReview'
import { dataReviews } from './data'
import styles from './page.module.scss'

export default function Reviews() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {dataReviews.map((review) => (
          <CardReview review={review} />
        ))}
      </div>
    </main>
  )
}