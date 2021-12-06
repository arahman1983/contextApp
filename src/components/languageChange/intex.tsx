import { useState } from 'react'
import styles from './lang.module.css'

export default function LanguageChange() {
  const [Lang, setLang] = useState<string>('EN')
  const handleChangeLang = () => {
    Lang === 'AR'
      ? setLang('EN')
      : setLang('AR')
  }
  return (
    <button className={styles.button} onClick={handleChangeLang}>
      {Lang}
    </button>
  )
}