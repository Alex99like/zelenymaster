import { SuccessIcon } from '@/app/shared/SuccessIcon/SuccessIcon'
import styles from './Advantages.module.scss'

interface IAdvantagesItem {
  values: { name: string, description: string  }
}

export const AdvantagesItem = ({ values }: IAdvantagesItem) => {
  return (
    <div className={styles.card}>
      <SuccessIcon className={styles.icon} />
      {values.description}
    </div>
  )
}
