import { APPHeader, SideMenu } from './components';
import { ThemeProvider } from './context';


function App() {

  return (
    <ThemeProvider >
        <APPHeader />
        <SideMenu />
    </ThemeProvider>
  );
}

export default App;
