import "./App.css";
import Navbranch from "./component/Navbranch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SignInSide from './component/SingInSide';
import { ThemeProvider } from '@material-ui/styles';
import theme from './themeConfig'
import TypografyPage1 from './component/TypographyPage1';
import FooterPage1 from "./component/FooterPage1";
import Selector from './component/Selector'
import Reservation from './component/Reservation'
import FinalView from './component/FinalView.jsx'




function App() {
  return (

    <Router>
      {/*< ThemeProvider theme={theme} className="App">*/}
      {/* <div>
      <Link to= {SignInSide}>

      </Link>

    </div> */}
      <div className="App">
        <Switch>
          <Route path="/" exact>
            < ThemeProvider theme={theme}>
              <SignInSide />
            </ThemeProvider>
          </Route>
          {/* comienzo pagina uno */}
          <Route path="/start">
            <Navbranch />
            <TypografyPage1 />
            <Selector/>
            <FooterPage1 />
          {/* final pagina uno */}
          </Route>
          <Route path="/reservation">
          <Navbranch />
          
          <Reservation/>
          <FooterPage1 />
          </Route>
          <Route path="/finalview">
            <FinalView/>
            <FooterPage1 />
          </Route>
        </Switch>
        {/*</ThemeProvider>*/}
      </div>
    </Router>



  );
}

export default App;
