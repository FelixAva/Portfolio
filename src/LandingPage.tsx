import './styles/index.css';

// Component's imports
import { NavBar, Projects, Summary } from './components';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <main className='h-[calc(100vh-96px)] overflow-y-scroll snap-y snap-mandatory'>
        <Summary />
        <Projects />
      </main>
    </div>
  );
};

export default LandingPage;
