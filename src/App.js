import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from "./Navbar";
import Api from "./Api";
import Footer from "./Footer";
import Error from './Error';
import Leagues from './League';
import Superliga from './Superliga';
import Premiership from './Premiership';
import Playersuper from './Playersuper';
import Playerpremier from './Playerpremier';
import Scores from './Scores';
import Standsuper from './Standsuper';
import Standpremier from './Standpremier';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Switch>
        {/* <Route path="/" component={Home}></Route> */}
        <Route exact path="/" component={Home}></Route>
        <Route path="/api" component={Api}></Route>
        <Route path="/leagues" component={Leagues}></Route>
        <Route path="/superliga" component={Superliga}></Route>
        <Route path="/premiership" component={Premiership}></Route>
        <Route path="/playersuper" component={Playersuper}></Route>
        <Route path="/playerpremier" component={Playerpremier}></Route>
        <Route path="/scores" component={Scores}></Route>
        <Route path="/standsuper" component={Standsuper}></Route>
        <Route path="/standpremier" component={Standpremier}></Route>
        
        {/* <Route path="/standing" component={Standing}></Route> */}
        {/* <Route path="/leagues2" component={LeagueList}></Route> */}
        <Route component={Error} />
      </Switch>
      {/* <Navbar><Api users={users}/></Navbar> */}
      
      <div className="start">
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
