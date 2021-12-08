import { useContext, useState } from 'react'
import { ThemeContext } from '../../context'
import styles from './form.module.css'

export default function Form (){
  const {language, changeUserName} = useContext(ThemeContext)
  const [newName, setNewName] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget?.value
    setError(false)
    setNewName(value)
  }
  const handleSubmit = () => {
    if(newName.length > 0){
      changeUserName && changeUserName(newName)
    }else{
    setError(true)
    }
  }
  return(
    <div className={styles.container}>
      <input 
        onChange={handleChange}
        maxLength={20}
        placeholder={language === "AR" ? "نغيير اسم المستخدم" : "Change User Name"}
      />
      <button onClick = {handleSubmit}>
        {language === "AR" ? "تغيير" : "Submit"}
      </button>
      <p>
        {
          error &&
            <small>
              {language === "AR" ? "برجاء إدخال اسم مستخدم صحيح" : "Please Add Valid User"}
            </small>
        }
        </p>
    </div>
  )
}