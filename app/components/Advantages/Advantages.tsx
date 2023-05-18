import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { createRef, useState } from "react";
import styles from './Advantages.module.scss'
import { AdvantagesItem } from "./AdvantagesItem";

const descriptions = {
  one: {
    name: 'Широкий ассортимент.',
    description: 'Мы стараемся идти в ногу со временем (отслеживать новинки, учитывать пожелания клиентов).'
  },
  two: {
    name: 'Высокое качество товара',
    description: 'Благодаря сотрудничеству с лучшими селекционными центрами России, Европы, США и Беларуси мы предлагаем растения, качество которых полностью соответствует требованиям семенной и карантинной государственных инспекций.'
  },
  three: {
    name: 'Наши специалисты',
    description: 'помогут Вам повысить эффективность и рентабельность производства за счет внедрения новых технологий, подходов и идей.'
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
    setHeight(latest)
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
        animate={{ height: height - 150 }}
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
