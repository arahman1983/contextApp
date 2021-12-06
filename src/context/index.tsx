import React, {useState, FC } from "react"

type ContextValues = {
  collapsed: boolean,
  language: string,
  userName: string | undefined, 
  toggleCollapsed?: () => void, 
  changeLanguage?: () => void, 
  changeUserName?: (userName: string) => void
}

export const defaultValue = {
  collapsed: true,
  language: 'EN',
  userName: 'fdsf sfsdf', 
}

export const ThemeContext = React.createContext<ContextValues>(defaultValue)

export const ThemeProvider:FC = ({children}) => {
  const [collapsed, setCollapsed] = useState<boolean>(defaultValue.collapsed)
  const [language, setLanguage] = useState<string>(defaultValue.language)
  const [userName, setUserName] = useState<string | undefined>(defaultValue.userName)

  const changeUserName = (userName: string) => {
    setUserName(userName)
  }

  const toggleCollapsed = () => setCollapsed(!collapsed)

  const changeLanguage = () => {
    language === 'AR'
    ? setLanguage('EN')
    : setLanguage('AR')
  }

  return(
    <ThemeContext.Provider 
      value={{collapsed,language,userName, toggleCollapsed, changeLanguage, changeUserName}}>
      <div dir={language === 'EN'? 'ltr' : 'rtl'}
        style={{direction: language === 'EN'? 'ltr' : 'rtl' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}