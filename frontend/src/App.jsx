import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Accueil/Home/Home.jsx';
import Favorite from './Pages/Accueil/Favorite/Favorite.jsx';
import Shared from './Pages/Accueil/Sharedwithme/Sharedwithme.jsx';
import Templates from './Pages/Accueil/Templates/Template.jsx';
import Verify from './Pages/Verifyemail/Verify.jsx';
import Forgotpassword from './Pages/ForgotPassword/Forgotpassword.jsx';
import Newpassword from './Pages/NewPassword/Newpassword.jsx';
import Register from './Pages/Register/Register.jsx';
import Firstpage from './Pages/FirstPage/Firstpage.jsx';
import TypeProjet from './Pages/Accueil/TypeProjet/TypeProjet.jsx';
import ChoixTechnique from './Pages/Accueil/choixTechnique/choixTechnique.jsx';
import ChoixClub from './Pages/Accueil/clubs/choixclub.jsx';
import Events from './Pages/Accueil/events/events.jsx';
import Choix from './Pages/Accueil/choixNiveau/choix.jsx';
import BoardId from './Pages/Board/BoardId.jsx';
import Admine from './Pages/admine/admine.jsx';
import Niveauu from './Pages/admine/niveau.jsx';
import Modulee from './Pages/admine/module.jsx';
import Expert from './Pages/admine/expert.jsx';
import Exper from './Pages/Accueil/Expert/Expert.jsx';
import Event from './Pages/admine/event.jsx';
import Notification from './Pages/Accueil/notification-et-profile/notification.jsx';
import Profilee from './Pages/Accueil/notification-et-profile/profile.jsx';
import Settings from './Pages/Accueil/setting/settings.jsx';
import LayoutWithNavbar from './components/LayoutWithNavbar.jsx';
import Testtab from './Pages/Accueil/testtab/testtab.jsx';
import Guide from './Pages/FirstPage/guide.jsx'
import Propos from './Pages/FirstPage/propos.jsx'

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<Firstpage />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/propos" element={<Propos />} />
          </Route>
          <Route path="/home" element={<Home buttonColor="white1" />} />
          <Route path="/typeprojet" element={<TypeProjet buttonColor="white2" />} />
          <Route path="/favorite" element={<Favorite buttonColor="white3" />} />
          <Route path="/choixtechnique" element={<ChoixTechnique buttonColor="white2" />} />
          <Route path="/sharedwithme" element={<Shared buttonColor="white4" />} />
          <Route path="/templates" element={<Templates buttonColor="white5" />} />
          <Route path="/verifyemail" element={<Verify />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clubs" element={<ChoixClub buttonColor="white2"/>} />
          <Route path="/events" element={<Events buttonColor="white2"/>} />
          <Route path="*" element={<p>Not Found oops</p>} />
          <Route path="/Niveau" element={<Choix buttonColor="white2" />} />
          <Route path="/Board" element={<BoardId />} />
          <Route path="/admine" element={<Admine buttonColor="white6"/>} />
          <Route path="/Niveauu" element={<Niveauu buttonColor="white6"/>} />
          <Route path="/modulee" element={<Modulee buttonColor="white6"/>} />
          <Route path="/expert" element={<Expert buttonColor="white6"/>} />
          <Route path="/event" element={<Event buttonColor="white6"/>} />
          <Route path="/prof" element={<Exper buttonColor="white7"/>} />
          <Route path="/notification" element={<Notification buttonColor="white1"/>} />
          <Route path="/settings" element={<Settings buttonColor="white1"/>} />
          <Route path="/testtab" element={<Testtab />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
