'use client'

import cn from 'classnames'

import React, { createRef, useState } from 'react'
import styles from './Input.module.scss'

interface InputWithRippleProps {
  placeholder: string;
}

export const InputSearch = () => {
  const ref = createRef<HTMLLabelElement>()
  const [card, setCard] = useState({ top: 0, left: 0 })
  const [focus, setFocus] = useState(false)
  const [label, setLabel] = useState(false)
  const inputRef = createRef<HTMLInputElement>()

  const handlerBubble = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const rect = ref.current?.getBoundingClientRect();
    
    console.log(rect)
    const x = e.clientX - rect!.left;
    const y = e.clientY - rect!.top;
    setLabel(true)
    setCard({ top: y, left: x })
    setFocus(true)
  }

  return (
    <label ref={ref} className={cn(styles.wrapper, { [styles.focus]: focus })}
      onClick={handlerBubble}
    >
      <input
        ref={inputRef}
        onBlur={() => {
          setFocus(false)
          setLabel(() => inputRef.current?.value ? true : false)
        }}
        type='text' 
        className={styles.input} 
      />
      <span className={cn(styles.label, { [styles.active]: label })}>Поиск</span>
      {focus && 
        <span 
          className={styles.bubble} 
          style={{ top: card.top, left: card.left }}
        />
      }
    </label>
  );
};
