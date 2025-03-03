import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Asjad from "./assets/All Teams/2nd captain (Asjad).jpg";
import SecondS from "./assets/All Teams/2S X1 .jpg";
import IndoorCaptain from "./assets/All Teams/Indoor captain.jpg";
import IndoorTeam from './assets/All Teams/Indoor Team.jpg';
import IndoorHeader from "./assets/All Teams/Indoor Header Image.jpg"
import thirdCaptain from "./assets/All Teams/karthick.jpg";
import firstS from "./assets/All Teams/saturday 1st xi.jpg";
import ThirdS from "./assets/All Teams/saturday 3S xi.jpg";
import sundaycaptain from "./assets/All Teams/sunday captain.jpg";
import SundayTigers2 from "./assets/All Teams/Sunday Tigers2.jpg";
import T20captain from "./assets/All Teams/T20 Captain.png";
import T20 from "./assets/All Teams/T20 Team.jpg";
import Shakil from "./assets/users/Shakil bhai.jpeg";
import Loader from './components/Loader';
import {Toaster} from "react-hot-toast"
import OurTeams from './pages/OurTeams';

// Lazy load components
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./pages/About'));
const GetInTouch = lazy(() => import('./components/GetInTouch'));
const HallBooking = lazy(() => import('./components/HallBooking'));
const JoinUs = lazy(() => import('./components/JoinUs'));
const NavBar = lazy(() => import('./components/NavBar'));
const NotFound = lazy(() => import('./components/NotFound'));
const Equality = lazy(() => import('./pages/Equality'));
const Home = lazy(() => import('./pages/Home'));
const News = lazy(()=>import('./pages/News'))
const Teams = lazy(() => import('./pages/Teams'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const History = lazy(() => import('./pages/History'));

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/touch' element={<GetInTouch />} />
            <Route path='/teams' element={<OurTeams />} />
            <Route path='/teams/saturday1stxi' element={<Teams captainStatment='Shakil Ahmed, the captain of Chelsfield Cricket Club’s 1st XI, has a rich and distinguished cricketing career, having played competitive cricket for several decades across various clubs in London. His extensive experience, passion, and love for the game unites the team and inspire everyone to give their best.' captainStatment2='The CCC 1st XI is a group of committed cricketers from diverse backgrounds, each bringing unique skills and a shared passion for the sport. United by our love for cricket, our goal is to compete with dedication, teamwork, and respect for the game and one another.' teamName='Saturday XI (Dark Horses), Kent Cricket League, Division 8, Underwood' captainName="Shakil Ahmed" captainImage={Shakil} teamImage1={firstS} teamImage2={firstS} captainEmail='shakil107@hotmail.com' captainPhone='+447940526066' />} />
            <Route path='/teams/saturday2ndxi' element={<Teams captainStatment='Asjad Mir, captain of CCC`s 2nd XI team, the Lion Hearts, leads with passion, dedication, and vast experience. He plays a crucial role in mentoring his squad, helping each player reach their full potential. Under his guidance, the Lion Hearts have emerged as a formidable team.' captainStatment2='The Lion Hearts bring together players of varying skill levels, united by a shared love for cricket. The team approaches every match, whether in league competitions or friendly games, with enthusiasm, determination, and an unwavering drive to win.' teamName='Saturday 2nd XI (Lion Hearts) – Kent Cricket League, Division 11, Underwood' captainName="Asjad Meer" captainImage={Asjad} teamImage1={SecondS} teamImage2={SecondS} captainEmail='asjadazeem@hotmail.com' captainPhone='+447984130132' />} />
            <Route path='/teams/saturday3rdxi' element={<Teams captainStatment='Karthic is the team captain, leading the squad with passion, dedication, and years
                of experience. He plays a vital role in mentoring the team and bringing out the best in
                every player. Under his leadership, the team has developed into a strong, competitive
                unit.' teamName='Saturday 3rd XI (Hunters) - Kent Cricket League, Division 13, Knott' captainName="Karthic" captainImage={thirdCaptain} teamImage1={ThirdS} teamImage2={ThirdS} captainEmail='karthick@hotmail.com' captainPhone='+447984 130132' />} />
            <Route path='/teams/sundaytigers' element={<Teams captainStatment='Naeem Ahad, the Captain of the Sunday Tigers, has led his team to an extraordinary feat, winning all 7 games under his captaincy this season. His leadership and strategic brilliance have made him a pivotal force for the team, adding to the Tigers’ already stellar performance. With his sharp decision-making, Naeem’s on-field presence has transformed each game into a well-executed victory. Beyond his tactical acumen, he successfully united the team, fostering strong bonds and a sense of camaraderie that turned the Tigers into a closely-knit unit.' captainStatment2='Naeem instilled a fighting spirit that made the Tigers a force to be reckoned with, inspiring each player to perform at their peak. Under his guidance, the Sunday Tigers have not only dominated on the field but have also become the most popular team, with everyone eager to play in it. His dual role as both a leader and top wicket-taker of the team emphasises his ability to lead by example, and this flawless run of victories has firmly cemented Naeem’s legacy in Sunday Tigers’ history.' teamName='4th XI Sunday (Tigers) – Kent Village Cricket League, Three East' captainName="Naeem Ahad" captainImage={sundaycaptain} teamImage1={SundayTigers2} teamImage2={SundayTigers2} captainEmail='ahadn@hotmail.com' captainPhone='+44 7572 427856' />} />
            <Route path='/teams/t20' element={<Teams captainStatment='T20 squad enjoys the fun of 120 ball game by providing extensive support to each other. We play fearless cricket and try to get the best out of our players. Each member brings in unique value to the team and have had a massive role in taking the team to the T20 cup final in 2024 season of CWG T20 league.' teamName='T20 Team' captainName="Kashif Malik" captainImage={T20captain} teamImage1={T20} teamImage2={T20} captainEmail='kashif@hotmail.com' captainPhone='49834948984835' />} />
            <Route path='/teams/indoor' element={<Teams captainStatment=' Adnan is the team captain, leading the squad with passion, dedication, and years
                of experience. He plays a vital role in mentoring the team and bringing out the best in
                every player. Under his leadership, the team has developed into a strong, competitive
                unit.' teamName='Indoor League' captainName="Adnan" captainImage={IndoorCaptain} teamImage1={IndoorHeader} teamImage2={IndoorTeam} captainEmail='adnan_ejaz_786@yahoo.co.uk' captainPhone='+447702416789' />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/hall' element={<HallBooking />} />
            <Route path='/all-news' element={<News />} />
            <Route path='/join' element={<JoinUs />} />
            <Route path='/equality' element={<Equality />} />
            <Route path='/club-history' element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
