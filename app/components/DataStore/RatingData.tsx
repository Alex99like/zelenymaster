import { StarIcon } from '@/app/shared/StarIcon/StarIcon'
import styles from './DataStore.module.scss'



export const RatingData = () => {
  return (
    <div className={styles['wrapper-rating']}>
      <StarIcon width={26} active delay={1.6} />
      <StarIcon width={26} active delay={1.9} />
      <StarIcon width={26} active delay={2.2} />
      <StarIcon width={26} active delay={2.5} />
      <StarIcon width={26} active delay={2.8} />
    </div>
  )
}
