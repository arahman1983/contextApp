import { APPHeader, Form, SideMenu } from './components';
import { ThemeProvider } from './context';
import styles from './app.module.css'

function App() {

  return (
    <ThemeProvider >
        <APPHeader />
        <div className={styles.container}>
          <SideMenu />
          <Form/>
        </div>
    </ThemeProvider>
  );
}

export default App;
