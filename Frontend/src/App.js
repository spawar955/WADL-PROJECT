import React from 'react';
import logo from './logo.svg';

import './App.css';
import './Styles/Header.css'
import './Styles/HomePage.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Components/HomePage';


const  App = () => {
  return (
    <>  
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
        </Routes>
      </Router>
    
    </>
  );
}

export default App;







// const App = () => {
//   return (
//     <>
//       <Headerr/>
//       <Routes>
//           <Route  path="/" element={<Home/>}/>
//           <Route  path="/home2" element={<Home2/>} />
//           <Route  path="/home3" element={<Home3/>} />
//           <Route path="/admin" element={<Login />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/forgot-password' element={<ForgotPassword />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/TeamSection' element={<TeamSection />} />
//           <Route path='/AdminPanel/*' element={<AdminPanel />} />
//           <Route path='/user-profile' element={<AdminPanel/>} />
//           <Route path='/AdminPanel/user-profile/add-content' element={<ContentForm></ContentForm>} />
//           <Route path='/AdminPanel/user-profile/view-content' element={<Contentt></Contentt>} />
//           <Route path='/verify/:token' element={<EmailVerify />} />
//           <Route path='/reset-password/:token' element={<ResetPassword />} />
//           </Routes>
          
        
//     </>
//   )
// }