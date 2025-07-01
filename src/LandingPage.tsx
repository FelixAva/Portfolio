import './styles/index.css';

// Component's imports
import { NavBar, Summary } from './components';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <main className='overflow-y-scroll snap-y snap-mandatory h-screen'>
        <Summary />
        <section id='projects' className='snap-center '>
        </section>
        <section id='a' className='snap-start h-screen bg-white flex justify-center items-center gap-8'>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
