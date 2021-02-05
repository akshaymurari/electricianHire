import React from 'react';
import MainLandingPage from './Containers/MainLandingPage/MainLandingPage.jsx';
import DonarForm from './Components/DonarForm/donarForm.jsx';
import SuccessPage from './Components/SuccessPage/SuccessPage.jsx';
import AcceptorPage from './Components/AcceptorPage/AcceptopPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DonarDonations from './Components/DonarDonations/DonarDonations.jsx'
import Signin from './Components/account/signin.jsx';
import Signup from './Components/account/signup.jsx';
// import SuccessPage from './SuccessPage/SuccessPage.jsx';
function error() {
  return (
    <div style={{
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "4rem",
        fontWeight: "800"
      }}>Error Page not found</h1>
    </div>
  )
}


function App() {
  return (
    <Router>
      <div className="App p-0">
        <Switch>
          <Route path="/" exact component={MainLandingPage}></Route>
          <Route path="/donarform" exact component={DonarForm}></Route>
          <Route path="/DonarDonations" exact component={DonarDonations}></Route>
          <Route path="/acceptorpage" exact component={AcceptorPage}></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/SuccessPage" exact component={SuccessPage}></Route>
          <Route path="*" component={error} />
          {/* <SuccessPage></SuccessPage>
          <DonarForm></DonarForm>
          <MainLandingPage></MainLandingPage>
          <AcceptorPage></AcceptorPage> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
