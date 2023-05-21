'use client'

import { useForm } from 'react-hook-form'
import { InputSearch } from '../shared/InputField/Input'
import { Search } from './components/Search/Search'
import styles from './page.module.scss'
import { MainSelect } from './components/MainSelect/MainSelect'
import { List } from './components/List/List'
import { dataDecoration } from './data/data'
 
export default function Products() {
  const {} = useForm()

  return (
    <main className={styles.wrapper}>
      <InputSearch />
      <MainSelect />

      <List data={dataDecoration} />
    </main>
  )
}