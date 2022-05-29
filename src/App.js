import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter as Router,Route  } from 'react-router-dom';
import Header from './Component/layout/Header/index';
import AddMember from './Component/members/AddMember/index';
import Home from './Component/pages/Home';
import EditMember from './Component/members/EditMember';
import Members from './Component/members/Member';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Member from './Component/members/Member';
import HomeCountState from './Component/ChitSeatTutorial/HomeCountState';




function App() {
 

  return (
    <div className="App">    
    
      <Router> 
      <Header />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/member" component={Member} />
       <Route exact path="/members/addMember" component={AddMember} />
       <Route exact path="/members/editMember/:id" component={EditMember} />
        <Route exact path="/members/member/:id" component={Members} />
        <Route exact path="/homeCountState" component={HomeCountState} />
      </Switch>
    </Router>


    </div >
  );
}

export default App;
/*
<Admin dataProvider={dataProvider} >
<Resource name="users" list={ListGuesser} />
<Resource name="users" list={MemberList} />
</Admin>
*/