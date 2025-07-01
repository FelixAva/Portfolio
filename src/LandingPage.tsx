import './styles/index.css';

// Component's imports
import { NavBar } from './components';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <main className='overflow-y-scroll snap-y snap-mandatory h-screen'>
        <section id='summary' className='snap-start min-h-screen bg-[#EFE9E3] flex justify-center items-center gap-8'>
          <img src="/src/assets/me.jpeg" alt="Image of myself" className='w-80 h-full rounded-full' />

          <div className='w-150'>
            <h1 className='font-bold text-6xl pb-5'>Felix Avalos</h1>
            <p className='text-xl'>As a passionate Software Engineer specializing in Front Start development, I focus primarily on mobile and web applications, leveraging technologies such as React Native, HTML, CSS and JavaScript. With experience working in teams to develop cross-platform applications for Android and iOS during a bootcamp.</p>
          </div>
        </section>
        <section id='projects' className='snap-center '>
        </section>
        <section id='a' className='snap-start h-screen bg-white flex justify-center items-center gap-8'>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
