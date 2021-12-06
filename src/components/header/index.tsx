import styles from './header.module.css'
import logo from '../../logo.svg';
import {FaRegTimesCircle} from 'react-icons/fa'
import {FiAlignJustify} from 'react-icons/fi'


import LanguageChange from '../languageChange/intex';
import { useContext } from 'react';
import { ThemeContext } from '../../context';


export default function APPHeader () {
  const {userName, collapsed, toggleCollapsed} = useContext(ThemeContext)

  return(
    <header className={styles.AppHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <button
            className={collapsed ? styles.collapsed: styles.notCollapsed} 
            onClick={toggleCollapsed}>
            {
              collapsed
              ? <FiAlignJustify size={24}/>
              : <FaRegTimesCircle size={24}/>
            }
          </button>
        </div>
        <div>
          <span>{userName}</span>
          <LanguageChange/>
        </div>
    </header>

  )
}