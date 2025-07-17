import './styles/index.css';

// Component's imports
import { NavBar, Projects, Summary } from './components';
import Stack from './components/sections/Stack';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <main className='lg:h-[calc(100vh-198px)] xl:h-[calc(100vh-142px)] 2xl:h-[calc(100vh-96px)] overflow-y-scroll snap-y snap-mandatory'>
        <Summary />
        <Projects />
        <Stack />
      </main>
    </div>
  );
};

export default LandingPage;
