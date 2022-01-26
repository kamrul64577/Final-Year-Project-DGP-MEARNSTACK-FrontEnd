import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
import Register from "./Pages/LogIn/Register/Register";
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from "./Pages/ContactUs/ContactUs";
import RepairApplication from "./Pages/Home/RepairApplication/RepairApplication";
import ApplyService from "./Pages/Services/ApplyService/ApplyService";
import AllServices from "./Pages/AllServices/AllServices";
import RequestServices from "./Pages/Dashboard/Services/RequestServices/RequestServices";
import RequestRepairing from "./Pages/Dashboard/RequestedRepairing/RequestedRepairing";
import AddNewService from "./Pages/Dashboard/Services/AddNewService/AddNewService";
import NewsDetails from "./Pages/Home/NewsDetails/NewsDetails";
import Event from "./Pages/Event/Event/Event";
import RegisterForEvent from "./Pages/Event/RegisterForEvent/RegisterForEvent";
import MaterialUIPickers from "./Pages/Dashboard/BirthDeathRegistration/MaterialUIPickers";
import ServiceDetails from "./Pages/AllServices/ServiceDetails";
import Success from "./Pages/AllServices/Success";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/newsDetails/:newsId">
              <NewsDetails></NewsDetails>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/success/:id">
              <Success></Success>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/event">
              <Event></Event>
            </PrivateRoute>
            <PrivateRoute path="/repair">
              <RepairApplication></RepairApplication>
            </PrivateRoute>
            <PrivateRoute path="/applyService">
              <ApplyService></ApplyService>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <AllServices></AllServices>
            </PrivateRoute>
            <PrivateRoute path="/registerEvent/:eventId">
              <RegisterForEvent></RegisterForEvent>
            </PrivateRoute>


            <PrivateRoute path="/date">
              <MaterialUIPickers></MaterialUIPickers>
            </PrivateRoute>
            
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
