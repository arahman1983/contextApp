import { useContext } from 'react'
import { ThemeContext } from '../../context'
import styles from './lang.module.css'

export default function LanguageChange() {
  const {language, changeLanguage} = useContext(ThemeContext)
  return (
    <button className={styles.button} onClick={changeLanguage}>
      {language === 'AR' ? 'EN' : 'AR'}
    </button>
  )
}