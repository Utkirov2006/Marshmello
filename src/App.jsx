import React from 'react';
import Navbar from './UI/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Footer from './UI/Footer';
import UpcomingShow from './components/UpcomingShow';
import Media from './components/Media';
import Songs from './components/Songs';
import Account from './components/Account';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />    

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upcoming' element={<UpcomingShow />} />
          <Route path='/media' element={<Media />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/account' element={<Account/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>


    </>
  );
};

export default App;