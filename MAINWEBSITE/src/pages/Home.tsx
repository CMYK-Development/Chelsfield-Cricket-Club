import { Suspense, lazy } from 'react';
import Loader from '../components/Loader';

const AboutClub = lazy(() => import('../components/AboutClub'));
const ClubContacts = lazy(() => import('../components/ClubContacts'));
const Ground = lazy(() => import('../components/Ground'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const History = lazy(() => import('../components/History'));
const LatestNews = lazy(() => import('../components/LatestNews'));
const Sponsors = lazy(() => import('../components/Sponsors'));

const Home = () => {
 
  return (
    <Suspense fallback={<Loader />}>
      <div className=' w-full overflow-x-hidden'>
        <HeroSection />
        <AboutClub />
        <ClubContacts />
        <Ground />
        <History />
        <LatestNews />
        <Sponsors />
      </div>
    </Suspense>
  );
};

export default Home;
