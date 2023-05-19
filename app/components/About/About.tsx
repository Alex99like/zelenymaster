import { motion } from 'framer-motion'
import styles from './About.module.scss'
import { SuccessIcon } from '@/app/shared/SuccessIcon/SuccessIcon'

const listItems = [
  'Быстрая обработка заказов по телефону, факсу, электронной почте',
  'Высокий уровень качества в соответствии с требованиями клиента',
  'Пред заказ растений в любом объеме и ассортименте',
  'Кратчайшие сроки отгрузки',
  'Как правило продукция подлежит самовывозу, по запросу клиента возможна организация транспорта',
  'Возможно снабжение этикетками с данными заказчика'
]

export const About = () => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <h3>Все для наибольшего удобства<br /> наших клиентов:</h3>
        {listItems.map((item) => (
          <motion.li 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8, once: true }}
            key={item}
          >{item} <SuccessIcon width={20} className={styles.icon} /></motion.li>
        ))}
      </ul>
      <motion.div className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
      >
        <hr className={styles.hr} />
        <h2 className={styles.h2}>О НАШЕЙ КОМПАНИИ</h2>
        <hr className={styles.hr} />
      </motion.div>
      <div className={styles.container}>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7, once: true }}
        >Наш питомник всегда рад предложить Вам посадочный материал плодово-ягодных 
           и декоративных растений.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7, once: true }}
        >При выращивании саженцев плодово-ягодных культур мы используем технологию <strong>in-vitro</strong> и <strong>in vivo</strong>. 
        Технология <strong>in-vitro</strong> позволяет оздоравливать растения 
           на питательной среде, а также содержать их в контролируемых условиях, что 
           обеспечивает полное отсутствие вирусов, патогенов и вредителей.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7, once: true }}
        >Мы готовы предложить Вам большой ассортимент качественной продукции, 
           а также новинки этого сезона от ведущих производителей Европы. Наши цены 
           приятно Вас удивят и не оставят равнодушными.
        </motion.p>
        <motion.p
          initial={{ opacity: 0.7, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 1, once: true }}
        >В результате постоянного изучения новых технологий и применение полученных 
           знаний на практике, наши специалисты всегда готовы ответить на интересующие 
           Вас вопросы и проконсультировать по агрономии.
        </motion.p>
      </div>
      
    </section>
  )
}
