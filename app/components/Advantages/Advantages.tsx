import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { createRef, useState } from "react";
import styles from './Advantages.module.scss'
import { AdvantagesItem } from "./AdvantagesItem";

const descriptions = {
  one: {
    name: 'Широкий ассортимент.',
    description: 'Мы можем предложить Вам качественную продукцию в точном соответствии с Вашими запросами и пожеланиями, как в отношении декоративных кустарников и хвойных растений, так и в отношении плодово-ягодных растений.'
  },
  two: {
    name: 'Высокое качество товара',
    description: 'Благодаря сотрудничеству с лучшими селекционными центрами России, Европы, США и Беларуси мы предлагаем растения, качество которых полностью соответствует требованиям семенной и карантинной государственных инспекций.'
  },
  three: {
    name: 'Наши специалисты',
    description: 'Наша высокая квалификация опирается также на самые прогрессивные методы работы. Мы стремимся к максимальной механизации, что позволяет поддерживать неизменно высокий уровень качества. Профессионализм в организационных делах положительно сказывается на уровне наших цен.'
  },
  four: {
    name: 'Система скидок',
    description: 'При покупке большого количества растений вы можете рассчитывать на постоянно действующие скидки'
  }
}

export const Advantages = () => {
  const ref = createRef<HTMLElement>()
  const [height, setHeight] = useState(0)
  const { scrollY } = useScroll({
    target: ref,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = ref.current?.offsetHeight || 0
    if (current > latest - 250) {
      setHeight(prev => latest - (250) > prev ? latest - (250) : prev)
    }
  })
  
  return (
    <section ref={ref} className={styles.advantages}>
      <div className={styles.title}>
        <hr className={styles.hr} />
        <h2 className={styles.h2}>ПРЕИМУЩЕСТВА</h2>
        <hr className={styles.hr} />
      </div>
      
      <motion.div 
        className={styles.progress}
        animate={{ height: height }}
      />
      <div className={styles.container}>
        <AdvantagesItem values={descriptions.one} />
        <AdvantagesItem values={descriptions.two} />
        <AdvantagesItem values={descriptions.three} />
        <AdvantagesItem values={descriptions.four} />
      </div>
    </section>
  )
}
