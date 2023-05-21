import React, { ButtonHTMLAttributes, PropsWithChildren, createRef, useState } from 'react'
import styles from './Buttom.module.scss'

export const Button = ({ children, ...props }: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const ref = createRef<HTMLDivElement>()
  const [card, setCard] = useState({ top: 0, left: 0 })
  const [focus, setFocus] = useState(false)
  const inputRef = createRef<HTMLInputElement>()

  const handlerBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = ref.current?.getBoundingClientRect();
    const x = e.clientX - rect!.left;
    const y = e.clientY - rect!.top;
    setCard({ top: y, left: x })
    setFocus(true)
    setTimeout(() => setFocus(false), 500)
  }

  return (
    <div 
      ref={ref}
      className={styles.wrapper}
      onClick={handlerBubble}
    >
      <button className={styles.btn} {...props}>{children}</button>
      <span 
          className={styles.bubble} 
          style={{ top: card.top, left: card.left }}
        />
      {focus && 
        <span 
          className={styles.bubble} 
          style={{ top: card.top, left: card.left }}
        />
      }
    </div>
  );
}
