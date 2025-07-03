// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import Personal from './components/Personal';
import MainProject from './components/MainProject';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='bg-white'>
      {/* <Router>
      <Routes>
        <Route path="/MainProject" element={<MainProject />} />
      </Routes>
      </Router> */}

      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Personal />
      <Contact />
      <MainProject />
      <KindeProvider
		clientId="fa55d0e41b9046c29fd385eb663daeb1"
		domain="https://porfolio.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
		{/* <Routes /> */}
	</KindeProvider>
    </div>
  );
}

export default App;
