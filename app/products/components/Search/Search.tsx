import { InputSearch } from "@/app/shared/InputField/Input"
import { DropList } from "./DropList"
import { IProduction } from "../../data/data"
import styles from './Search.module.scss'
import { useEffect, useState } from "react"

export const Search = ({ data }: { data: IProduction[] }) => {
  const [search, setSearch] = useState('')
  const [list, setList] = useState<IProduction[]>([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (search.length === 0) setList([])
    else setList(() => data.filter(el => el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))) 
  }, [search])

  return (
    <div className={styles.wrapper}>
      <InputSearch value={search} setValue={setSearch} setActive={setActive} />
      {active && <DropList data={list} />}
    </div>
  )
}
