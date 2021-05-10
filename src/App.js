

import Home from './Components/Home/Home/Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ContactForm from './Components/ContactForm/ContactForm';
import Projects from './Components/Projects/Projects';
import About from './Components/Projects/Projects';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import BookingList from './Components/Dashboard/User/BookingList/BookingList';
import Booked from './Components/Dashboard/User/Booked/Booked';
import Review from './Components/Dashboard/User/Review/Review';
import OrderList from './Components/Dashboard/Admin/OrderList/OrderList';
import AddService from './Components/Dashboard/Admin/AddService/AddService';
import AddAdmin from './Components/Dashboard/Admin/AddAdmin/AddAdmin';
import ManageService from './Components/Dashboard/Admin/ManageService/ManageService';
function App() {
  return (
<Router>
  
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path = '/home'>
      <Home/>
    </Route>
    <Route path = "/about">
      <About/>
    </Route>
    <Route path = "/contact">
      <ContactForm/>
    </Route>
    <Route path = "/projects">
      <Projects/>
    </Route>
    <Route exact path = "/dashboard">
     <Dashboard/>
    </Route>
    <Route  path = "/dashboard/bookingList">
     <BookingList/>
    </Route>
    <Route path = "/dashboard/booking">
     <Booked/>
    </Route>
    <Route path = "/dashboard/review">
     <Review/>
    </Route>
    <Route path = "/dashboard/orderList">
     <OrderList/>
    </Route>
    <Route path = "/dashboard/addService">
    <AddService/>
    </Route>
    <Route path = "/dashboard/makeAdmin">
     <AddAdmin/>
    </Route>
    <Route path = "/dashboard/manageService">
   
    <ManageService/>
    </Route>
  </Switch>
</Router>
  );
}

export default App;
