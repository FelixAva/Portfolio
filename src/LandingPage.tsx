import './styles/index.css';

// Component's imports
import { NavBar } from './components';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <main className='pt-[96px]'>
        <section className='min-h-[calc(100vh-96px)] bg-[#EFE9E3]'></section>
      </main>
    </div>
  );
};

export default LandingPage;
