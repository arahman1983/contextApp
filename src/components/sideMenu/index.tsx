import { useContext } from 'react'
import { ThemeContext } from '../../context'
import styles from './side.module.css'

export default function SideMenu (){
  const {collapsed} = useContext(ThemeContext)

  return(
    <ul className={collapsed ? styles.sideMenuCollapsed : styles.sideMenu}>
      <li> Side Menu Items </li>
      <li> Side Menu Items </li>
      <li> Side Menu Items </li>
      <li> Side Menu Items </li>
    </ul>
  )
}