import logo from './logo.svg';
import './App.css';
//import SimpleTabs from './components/tab'
import ContainedButtons from './components/Buttons'
import { Router, Route,Switch  } from "react-router-dom";
import history from "./history";
import tab from './components/Tabs/tab';
import fixedTab from './components/Tabs/fixedTab';
import scrollTab from './components/Tabs/scrollTab'
import verticalTab from './components/Tabs/verticalTabs'
import navTab from './components/Tabs/navTabs'
   import Pdf from "./components/pdf";
   import Pdf1 from './components/pdf1'
   import Print from './components/print'

function App() {
  return (
    <div className="App">
        <Router history={history} >
          
        <Switch>
             <Route path="/" exact component={ContainedButtons} /> 
             <Route path="/tab" exact component={tab} /> 
             <Route path="/fixedTab" exact component={fixedTab} /> 
             <Route path="/scrollTab" exact component={scrollTab} /> 
             <Route path="/verticalTab" exact component={verticalTab} /> 
             <Route path="/navTab" exact component={navTab} /> 
             <Route path="/pdf" exact component={Pdf} /> 
             <Route path="/pdf1" exact component={Pdf1} /> 
             <Route path="/print" exact component={Print} /> 


             </Switch>                      
        </Router>
    </div>
  );
}

export default App;
