import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {WeatherForecast} from "./components/WeatherForecast.tsx";
import {WeekFooter} from "./components/WeekFooter.tsx";
// import { ThemeProvider } from 'styled-components';


function App() {

  return (
      <>
          {/*<ThemeProvider theme={themeMode}>*/}
          {/*    /!*<GlobalStyles />*!/*/}
          {/*    <PageWrapper theme={theme} toggleTheme={toggleTheme}>*/}

          <WeatherForecast/>
                  <WeekFooter/>
          {/*    </PageWrapper>*/}
          {/*</ThemeProvider>*/}
      </>
  )
}

export default App
