import styles from './header.module.css'
import logo from '../../logo.svg';
import {FiAlignJustify} from 'react-icons/fi'
import LanguageChange from '../languageChange/intex';


export default function APPHeader () {
  return(
    <header className={styles.AppHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <button>
            <FiAlignJustify size={30}/>
          </button>
        </div>
        <div>
          <LanguageChange/>
          <span>User Name</span>
        </div>
    </header>

  )
}